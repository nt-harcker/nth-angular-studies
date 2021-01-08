import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  constructor(private modalRef: NgbActiveModal) { }

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() subMessage: string = '';

  @Output() whenConfirm = new EventEmitter();

  ngOnInit(): void {
    console.log('title', this.title);
  }

  handleConfirm(): void {
    this.whenConfirm.emit('');
    this.modalRef.close();
  }



}
