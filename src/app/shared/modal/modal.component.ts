import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @ViewChild('myModal', { static: false }) modal: ElementRef | undefined;
  // @ViewChild('content', { static: false }) content: ElementRef | undefined;

  open() {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'block';
    }
  }

  close() {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'none';
    }
  }
}
