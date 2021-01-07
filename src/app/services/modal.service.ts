import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../components/modals/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal: NgbModal) { }

  showAlert(title: string, message: string, onConfirm: () => void, subMessage?: string): void {
    const modal = this.ngbModal.open(AlertModalComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;
    modal.componentInstance.subMessage = subMessage;
    modal.componentInstance.whenConfirm.subscribe(() => {
      onConfirm();
    })
  }
}
