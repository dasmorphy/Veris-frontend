import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-transfer-modal',
  styleUrls: ['./transfer-modal.component.css'],
  templateUrl: './transfer-modal.component.html',
})
export class TransferModalComponent {
  @Input() messagge: any = {title: '', message: ''};
  @Output() closeModal = new EventEmitter<boolean>();

  close() {
    this.closeModal.emit(false);
  }
}
