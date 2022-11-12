import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsActionsTypes, ActionEvent } from '../../../state/product.state';
import { EventDriverServiceService } from '../../../services/event-driver-service.service';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
  //@Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();

  constructor(private eventDriverService:EventDriverServiceService) { }

  ngOnInit(): void {
  }
  onSearch(dataForm:any) {
    //this.productEventEmitter.emit({type:ProductsActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
    this.eventDriverService.publishEvent({type:ProductsActionsTypes.SEARCH_PRODUCTS,payload:dataForm}                     );
    }
    onNewProducts() {
      //this.productEventEmitter.emit({type:ProductsActionsTypes.NEW_PRODUCT});
      this.eventDriverService.publishEvent({type:ProductsActionsTypes.NEW_PRODUCT});
    }
    onGetAvailableProducts() {
      //this.productEventEmitter.emit({type:ProductsActionsTypes.GET_Available_PRODUCTS});
      this.eventDriverService.publishEvent({type:ProductsActionsTypes.GET_Available_PRODUCTS});

    }
    onGetSelectedProducts() {
      //this.productEventEmitter.emit({type:ProductsActionsTypes.GET_SELECTED_PRODUCTS});
      this.eventDriverService.publishEvent({type:ProductsActionsTypes.GET_SELECTED_PRODUCTS});
    }
    onGetAllProducts() {
      //this.productEventEmitter.emit({type:ProductsActionsTypes.GET_ALL_PRODUCTS});
      this.eventDriverService.publishEvent({type:ProductsActionsTypes.GET_ALL_PRODUCTS});
    }

}
