import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // @Input('page-title') pageTitle: string;
  // @Input('show-button') showButton: boolean = true;
  // @Input('button-class') buttonClass: string;
  // @Input('button-text') buttonText: string;
  @Input() total: number;

  constructor() {
    this.total = 0
  }

  ngOnInit() {
  }

}
