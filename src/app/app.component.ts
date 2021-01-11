import { Component } from '@angular/core';
import { ComplexModalComponent } from './components/modals/complex-modal/complex-modal.component';
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

  handleOpenAlertModal(modalCode: number): void {

    switch (modalCode) {
      case 1:
        this.modalService.showAlert('Warning!', 'This is a very simple modal.', 'sm', '', () => {
          alert('Your action has been interpreted.')
        })
        break;
      case 2:
        this.modalService.showAlert('Warning!', 'This is a very simple modal bug bigger.', 'lg', '', () => {
          alert('Your action has been interpreted.')
        })
        break;
    }
  }

  handleOpenComplexModal(): void {
    this.modalService.open(
      ComplexModalComponent,
      {
        randomProp: 'Im a really random property',
      },
      {
        backdrop: false,
        size: 'xl',
        centered: true,
      }
    );
  }

  handleLoading(): void {

    this.modalService.startLoading();

    setTimeout(() => {
      this.modalService.stopLoading();
    }, 4000);


  }
}
