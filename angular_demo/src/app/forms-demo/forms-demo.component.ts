import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { CapitalizePipe } from '../capitalize.pipe';
import { HeaderComponent } from '../header.component';
import { MenuComponent } from '../menu.component';
import { FooterComponent } from '../footer.component';

@Component({
    selector: 'app-forms-demo',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HighlightDirective, CapitalizePipe, HeaderComponent, FooterComponent, MenuComponent],
    templateUrl: './forms-demo.component.html',
    styleUrl: './forms-demo.component.scss'
})
export class FormsDemoComponent {
  // Template-driven form model
  user = {
    name: '',
    email: ''
  };
  isAdmin = typeof window !== 'undefined' && localStorage.getItem('role') === 'admin';

  // Reactive form model
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(1)])
  });

  onSubmitTemplate(form: NgForm) {
    alert('Template-driven form submitted: ' + JSON.stringify(form.value));
  }

  onSubmitReactive() {
    alert('Reactive form submitted: ' + JSON.stringify(this.productForm.value));
  }
}
