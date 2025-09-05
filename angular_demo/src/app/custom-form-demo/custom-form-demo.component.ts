import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-custom-form-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomInputComponent, HeaderComponent, MenuComponent],
  templateUrl: './custom-form-demo.component.html'
})
export class CustomFormDemoComponent {
  form = new FormGroup({
    custom: new FormControl('')
  });
}
