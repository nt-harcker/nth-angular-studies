import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './components/modals/alert-modal/alert-modal.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modalService: ModalService) {

  }

  title = 'angular-tests';

  handleOpenModal(): void {
    this.modalService.showAlert(``, ``, () => {})
  }
}
