import { Component, Directive, Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../components/modals/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal: NgbModal) { }

  showAlert(
    title: string,
    message: string,
    size: 'sm' | 'lg' | 'xl' = 'sm',
    subMessage?: string,
    onConfirm?: Function,
  ): void {
    const modal = this.ngbModal.open(AlertModalComponent, {
      windowClass: 'global-modals',
      size
    });
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;
    modal.componentInstance.subMessage = subMessage;
    modal.componentInstance.whenConfirm.subscribe(() => {
      if ( onConfirm )
        onConfirm();
    })
  }

  open<T>(content: any, initialValues: T, options?: NgbModalOptions): void {
    const modal = this.ngbModal.open(content, options);
    for ( let prop in initialValues ) {
      modal.componentInstance[prop] = initialValues[prop];
    }
  }



}
