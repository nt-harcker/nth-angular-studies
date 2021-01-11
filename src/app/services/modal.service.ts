import { Component, Directive, Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../components/modals/alert-modal/alert-modal.component';
import { LoadingModalComponent } from '../components/modals/loading-modal/loading-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  loadingRef?: NgbModalRef;

  /**
   * Affects the global modals, that are: loading, confirm and alert
   */
  globalProps = {
    windowClass: 'global-modals',
    centered: true,
  }

  constructor(private ngbModal: NgbModal) { }

  showAlert(
    title: string,
    message: string,
    size: 'sm' | 'lg' | 'xl' = 'sm',
    subMessage?: string,
    onConfirm?: Function,
  ): void {
    const modal = this.ngbModal.open(AlertModalComponent, {
      ...this.globalProps,
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

  startLoading(

  ): void {

    this.loadingRef = this.ngbModal.open(LoadingModalComponent, {
      ...this.globalProps,
      backdrop: 'static',
      backdropClass: 'loading-overlay',
    });

  }

  stopLoading(

  ): void {

    if (this.loadingRef) {
      this.loadingRef.close();
    }

  }

  open<T>(content: any, initialValues: T, options?: NgbModalOptions): void {
    const modal = this.ngbModal.open(content, options);
    for ( let prop in initialValues ) {
      modal.componentInstance[prop] = initialValues[prop];
    }
  }



}
