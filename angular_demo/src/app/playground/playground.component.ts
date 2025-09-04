import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playground',
  standalone: true,
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
  imports: [FormsModule]
})
export class PlaygroundComponent {
  code = '';
}
