import { Component, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing-playground',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-playground.component.html',
  styleUrls: ['./testing-playground.component.scss'],
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestingPlaygroundComponent {
  showModal = false;
  isDisabled = true;
  showToast = false;
  currentPage = 1;
  items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
  selectedDropdown = '';
  selectedDate = '';
  dropped = false;

  openModal() { this.showModal = true; }
  closeModal() { this.showModal = false; }
  toggleDisabled() { this.isDisabled = !this.isDisabled; }
  showNotification() { this.showToast = true; setTimeout(() => this.showToast = false, 2000); }
  nextPage() { if (this.currentPage < 3) this.currentPage++; }
  prevPage() { if (this.currentPage > 1) this.currentPage--; }
  selectDropdown(val: string) { this.selectedDropdown = val; }
  setDate(e: Event) { const input = e.target as HTMLInputElement; this.selectedDate = input.value; }
  onDrop(e: DragEvent) { e.preventDefault(); this.dropped = true; }
  onDragOver(e: DragEvent) { e.preventDefault(); }
}
