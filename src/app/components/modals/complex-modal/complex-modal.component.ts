import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-complex-modal',
  templateUrl: './complex-modal.component.html',
  styleUrls: ['./complex-modal.component.scss']
})
export class ComplexModalComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal,
    private modalService: ModalService,
  ) { }

  hidden = false;

  @Input() randomProp: string = '';

  openAnotherModal(): void {
    this.modalService.showAlert('Hey!', 'Im a modal inside of a modal', 'sm');
  }

  hideModal(): void {
    this.modalService.startLoading();
    this.hidden = true;

    setTimeout(() => {
      this.hidden = false;
      this.modalService.stopLoading();
    }, 2000);
  }

  close(): void {
    this.activeModal.close();
  }

  ngOnInit(): void {
  }

}
