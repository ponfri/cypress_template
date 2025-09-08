
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {
  public message$ = this.messageService.message$;
  public visible$ = this.messageService.visible$;
  constructor(private messageService: MessageService) {}
}
