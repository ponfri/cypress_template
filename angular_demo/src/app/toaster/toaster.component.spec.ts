import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToasterComponent } from './toaster.component';
import { MessageService } from '../services/message.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

class MockMessageService {
  message$ = new BehaviorSubject<string>('Test message');
  visible$ = new BehaviorSubject<boolean>(true);
}

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;
  let messageService: MockMessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ToasterComponent],
      providers: [
        { provide: MessageService, useClass: MockMessageService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
  messageService = TestBed.inject(MessageService) as unknown as MockMessageService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the banner when visible$ is true', () => {
    messageService.visible$.next(true);
    fixture.detectChanges();
    const banner = fixture.nativeElement.querySelector('.toaster-banner');
    expect(banner).toBeTruthy();
  });

  it('should hide the banner when visible$ is false', () => {
    messageService.visible$.next(false);
    fixture.detectChanges();
    const banner = fixture.nativeElement.querySelector('.toaster-banner');
    expect(banner).toBeFalsy();
  });

  it('should display the message text', () => {
    messageService.message$.next('Hello world');
    messageService.visible$.next(true);
    fixture.detectChanges();
    const text = fixture.nativeElement.querySelector('.toaster-text');
    expect(text.textContent).toContain('Hello world');
  });

  it('should show the checkmark icon', () => {
    messageService.visible$.next(true);
    fixture.detectChanges();
    const icon = fixture.nativeElement.querySelector('.toaster-icon');
    expect(icon.textContent).toContain('✔');
  });
});
