import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ButtonModule, FormModule, GridModule} from '@coreui/angular';
import {CheckoutComponent} from './components/checkout/checkout.component';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // coreui
    GridModule,
    FormModule,
    ButtonModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // coreui
    GridModule,
    FormModule,
    ButtonModule,

    //components
    CheckoutComponent
  ],

})

export class SharedModule {
}
