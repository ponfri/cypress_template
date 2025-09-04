
import { TestBed } from '@angular/core/testing';
import { ContactsComponent } from './contacts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the contacts component', () => {
    const fixture = TestBed.createComponent(ContactsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
