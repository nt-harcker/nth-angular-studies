import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './components/modals/alert-modal/alert-modal.component';
import { ComplexModalComponent } from './components/modals/complex-modal/complex-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertModalComponent,
    ComplexModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    NgbModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
