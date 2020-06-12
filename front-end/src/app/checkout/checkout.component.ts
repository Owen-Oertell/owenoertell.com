import { Component, OnInit } from '@angular/core';
import { getStage, getCheckoutStage, isInViewport, changeStageNS } from '../globals';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.checkVP();      
    }, 300)
  }

  private checkVP() {
    if(getStage()!=getCheckoutStage() && isInViewport(document.getElementById("checkout"))) {
      changeStageNS(getCheckoutStage());
    }
  }

}
