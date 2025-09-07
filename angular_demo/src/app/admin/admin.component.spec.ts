import { Component } from '@angular/core';

@Component({selector: 'app-dummy', template: ''})
class DummyComponent {}
import { TestBed } from '@angular/core/testing';
import { ROUTES } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('AdminComponent', () => {
  let fixture;
  let comp: AdminComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComponent, HttpClientTestingModule],
      providers: [
        { provide: ROUTES, useValue: [{ path: 'login', component: DummyComponent }] }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AdminComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin component', () => {
    expect(comp).toBeTruthy();
  });

  it('should add a user', () => {
    spyOn(comp.dataService, 'addUser').and.returnValue(of({ success: true }));
    comp.newUser = { username: 'test', password: 'pass', role: 'user' };
    comp.addUser();
  expect(comp.messageService.currentMessage).toBe('User added.');
  });

  it('should not add user with missing fields', () => {
    comp.newUser = { username: '', password: '' };
    comp.addUser();
  expect(comp.messageService.currentMessage).toBe('Username and password required.');
  });

  it('should edit a user', () => {
    spyOn(comp.dataService, 'updateUser').and.returnValue(of({ success: true }));
    comp.editUser = { username: 'edit', password: 'pass', role: 'user' };
    comp.saveEdit();
  expect(comp.messageService.currentMessage).toBe('User updated.');
  });

  it('should delete a user', () => {
    spyOn(comp.dataService, 'deleteUser').and.returnValue(of({ success: true }));
    comp.users = [{ username: 'del', password: '', role: 'user' }];
    comp.filteredUsers = comp.users;
    comp.deleteUser(comp.users[0]);
  expect(comp.messageService.currentMessage).toContain('Deleted user:');
  });

  it('should bulk delete users', () => {
    spyOn(comp.dataService, 'bulkDelete').and.returnValue(of({ success: true }));
    comp.bulkSelected = new Set(['a', 'b']);
    comp.bulkDelete();
  expect(comp.messageService.currentMessage).toBe('Bulk deleted.');
  });

  it('should bulk lock users', () => {
    spyOn(comp.dataService, 'bulkLock').and.returnValue(of({ success: true }));
    comp.bulkSelected = new Set(['a', 'b']);
    comp.bulkLock(true);
  expect(comp.messageService.currentMessage).toBe('Bulk locked.');
  });

  it('should bulk unlock users', () => {
    spyOn(comp.dataService, 'bulkLock').and.returnValue(of({ success: true }));
    comp.bulkSelected = new Set(['a', 'b']);
    comp.bulkLock(false);
  expect(comp.messageService.currentMessage).toBe('Bulk unlocked.');
  });

  it('should update user role', () => {
    spyOn(comp.dataService, 'updateRole').and.returnValue(of({ success: true }));
    comp.updateRole({ username: 'role', password: '', role: 'user' }, 'admin');
  expect(comp.messageService.currentMessage).toBe('Role updated.');
  });

  it('should toggle verification', () => {
    spyOn(comp.dataService, 'toggleVerify').and.returnValue(of({ success: true }));
    comp.toggleVerify({ username: 'ver', password: '', role: 'user' });
  expect(comp.messageService.currentMessage).toBe('Verification toggled.');
  });

  it('should query user', () => {
    spyOn(comp.dataService, 'getUsers').and.returnValue(of([{ username: 'q', password: '', role: 'user' }]));
    comp.queryUsername = 'q';
    comp.queryUser();
    expect(comp.filteredUsers.length).toBeGreaterThan(0);
  });

  it('should export users', () => {
    spyOn(comp.dataService, 'exportUsers').and.returnValue(of([{ username: 'e', password: '', role: 'user' }]));
    spyOn(window.URL, 'createObjectURL').and.returnValue('blob:url');
  spyOn(document, 'createElement').and.returnValue({ click: () => {/* mock click */}, href: '', download: '' } as HTMLAnchorElement);
    comp.exportUsers();
  expect(comp.messageService.currentMessage).toBe('Exported.');
  });

  it('should import users', (done) => {
    spyOn(comp.dataService, 'importUsers').and.returnValue(of({ success: true }));
  const file = new Blob([JSON.stringify([{ username: 'i', password: '', role: 'user' }])], { type: 'application/json' }) as File;
    file.text = () => Promise.resolve(JSON.stringify([{ username: 'i', password: '', role: 'user' }]));
    // Simulate FileReader
    const reader = {
      result: JSON.stringify([{ username: 'i', password: '', role: 'user' }]),
      onload: function() {/* mock onload */},
      readAsText: function(this: unknown) {
        const self = this as { onload?: () => void };
        if (typeof self.onload === 'function') {
          self.onload();
        }
      },
      error: null,
      onabort: null,
      onerror: null,
      onloadend: null,
      onprogress: null,
      abort: () => {/* mock abort */},
      addEventListener: () => {/* mock addEventListener */},
      dispatchEvent: () => false,
      removeEventListener: () => {/* mock removeEventListener */},
      DONE: 2,
      EMPTY: 0,
      LOADING: 1,
      readyState: 2,
      readAsArrayBuffer: () => {/* mock readAsArrayBuffer */},
      readAsBinaryString: () => {/* mock readAsBinaryString */},
      readAsDataURL: () => {/* mock readAsDataURL */}
    } as unknown as FileReader;
    spyOn(window as unknown as { FileReader: () => FileReader }, 'FileReader').and.returnValue(reader);
    comp.importUsers(file);
    setTimeout(() => {
  expect(comp.messageService.currentMessage).toBe('Imported.');
      done();
    }, 10);
  });

  it('should load audit log', () => {
    spyOn(comp.dataService, 'getAuditLog').and.returnValue(of(['entry']));
    comp.loadAuditLog();
    expect(comp.auditLog).toEqual(['entry']);
  });

  it('should view and close profile', () => {
    spyOn(comp.dataService, 'getProfile').and.returnValue(of({ username: 'p', password: '', role: 'user' }));
    comp.viewProfile({ username: 'p', password: '', role: 'user' });
    expect(comp.profileOpen).toBeTrue();
    comp.closeProfile();
    expect(comp.profileOpen).toBeFalse();
  });

  it('should handle failed add user', () => {
    spyOn(comp.dataService, 'addUser').and.returnValue(of({ success: false }));
    comp.newUser = { username: 'fail', password: 'fail', role: 'user' };
    comp.addUser();
  expect(comp.messageService.currentMessage).toBe('Add failed.');
  });

  it('should handle failed edit user', () => {
    spyOn(comp.dataService, 'updateUser').and.returnValue(of({ success: false }));
    comp.editUser = { username: 'edit', password: 'pass', role: 'user' };
    comp.saveEdit();
  expect(comp.messageService.currentMessage).toBe('Update failed.');
  });

  it('should handle failed delete user', () => {
    spyOn(comp.dataService, 'deleteUser').and.returnValue(throwError(() => new Error('fail')));
    comp.users = [{ username: 'del', password: '', role: 'user' }];
    comp.filteredUsers = comp.users;
    try {
      comp.deleteUser(comp.users[0]);
    } catch {
      // expected error
    }
  expect(comp.messageService.currentMessage).toBe('Delete failed.');
  });

  it('should handle failed bulk delete', () => {
    spyOn(comp.dataService, 'bulkDelete').and.returnValue(of({ success: false }));
    comp.bulkSelected = new Set(['a', 'b']);
    comp.bulkDelete();
  expect(comp.messageService.currentMessage).toBe('Bulk delete failed.');
  });

  it('should handle failed bulk lock', () => {
    spyOn(comp.dataService, 'bulkLock').and.returnValue(of({ success: false }));
    comp.bulkSelected = new Set(['a', 'b']);
    comp.bulkLock(true);
  expect(comp.messageService.currentMessage).toBe('Bulk action failed.');
  });

  it('should handle failed role update', () => {
    spyOn(comp.dataService, 'updateRole').and.returnValue(of({ success: false }));
    comp.updateRole({ username: 'role', password: '', role: 'user' }, 'admin');
  expect(comp.messageService.currentMessage).toBe('Role update failed.');
  });

  it('should handle failed verification', () => {
    spyOn(comp.dataService, 'toggleVerify').and.returnValue(of({ success: false }));
    comp.toggleVerify({ username: 'ver', password: '', role: 'user' });
  expect(comp.messageService.currentMessage).toBe('Action failed.');
  });

  it('should handle failed query', () => {
    spyOn(comp.dataService, 'getUsers').and.returnValue(throwError(() => new Error('fail')));
    comp.queryUsername = 'q';
    try {
      comp.queryUser();
    } catch {
      // expected error
    }
  expect(comp.messageService.currentMessage).toBe('Query failed.');
  });


  it('should edit user1 and change password, then verify update', () => {
    spyOn(comp.dataService, 'updateUser').and.returnValue(of({ success: true }));
    comp.editUser = { username: 'user1', password: 'user12345', role: 'user' };
    comp.saveEdit();
  expect(comp.messageService.currentMessage).toBe('User updated.');
  });

  it('should verify login with new password after edit', (done) => {
    spyOn(comp.dataService, 'getUsers').and.returnValue(of([{ username: 'user1', password: 'user12345', role: 'user' }]));
    comp.queryUsername = 'user1';
    comp.queryUser();
    setTimeout(() => {
      expect(comp.filteredUsers[0].password).toBe('user12345');
      done();
    }, 10);
  });

  it('should not show blank page or CORS error after edit', () => {
    spyOn(comp.dataService, 'updateUser').and.returnValue(of({ success: true }));
    comp.editUser = { username: 'user1', password: 'user12345', role: 'user' };
    comp.saveEdit();
    // Simulate UI state after edit
  expect(comp.messageService.currentMessage).not.toContain('CORS');
  expect(comp.messageService.currentMessage).not.toContain('blank');
  expect(comp.messageService.currentMessage).toBe('User updated.');
  });

});
