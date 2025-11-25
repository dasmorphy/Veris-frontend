import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  styleUrls: ['./alert-modal.component.css'],
  templateUrl: './alert-modal.component.html',
})
export class AlertModalComponent {
  @Input() messagge: any = {title: '', message: ''};
  @Output() closeModal = new EventEmitter<boolean>();

  close() {
    this.closeModal.emit(false);
  }
}
