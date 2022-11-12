import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActionEvent, ProductsActionsTypes } from '../../../../state/product.state';
import { Product } from '../../../../model/product.model';
import { EventDriverServiceService } from '../../../../services/event-driver-service.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
@Input() product:Product|null=null;
//@Output() eventEmitter:EventEmitter<ActionEvent>=new EventEmitter();
  constructor(private eventDriverService:EventDriverServiceService) { }

  ngOnInit(): void {
  }
  onDelete(product: Product) {
    //this.eventEmitter.emit({type:ProductsActionsTypes.DELETE_PRODUCT,payload:this.product});
    this.eventDriverService.publishEvent({type:ProductsActionsTypes.DELETE_PRODUCT,payload:this.product});
  }

 onEdit(product: Product) {
  //this.eventEmitter.emit({type:ProductsActionsTypes.EDIT_PRODUCT,payload:this.product});
  this.eventDriverService.publishEvent({type:ProductsActionsTypes.EDIT_PRODUCT,payload:this.product});

}
onSelect(product: Product) {
//this.eventEmitter.emit({type:ProductsActionsTypes.SELECT_PRODUCT,payload:this.product});
this.eventDriverService.publishEvent({type:ProductsActionsTypes.SELECT_PRODUCT,payload:this.product});
}

}
