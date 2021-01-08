import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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

  @Input() randomProp: string = '';

  openAnotherModal(): void {
    this.modalService.showAlert('Hey!', 'Im a modal inside of a modal', 'sm');
  }

  close(): void {
    this.activeModal.close();
  }

  ngOnInit(): void {
  }

}
