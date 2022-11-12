import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum } from '../../../state/product.state';
import { ProductsActionsTypes } from '../../../state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input()productsInput$:Observable<AppDataState<Product[]>>|null=null;
 // @Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();

  readonly DataStateEnum=DataStateEnum;/*affecter un type à une variable*/

  constructor() { }

  ngOnInit(): void {
  }
//   onDelete(p: Product) {
//     this.productEventEmitter.emit({type:ProductsActionsTypes.DELETE_PRODUCT,payload:p});
//  }
//  onEdit(p: Product) {
//   this.productEventEmitter.emit({type:ProductsActionsTypes.EDIT_PRODUCT,payload:p});
// }
// onSelect(p: Product) {
//   this.productEventEmitter.emit({type:ProductsActionsTypes.SELECT_PRODUCT,payload:p});
//     }
// // onActionEvent($event:ActionEvent){
// //     this.productEventEmitter.emit($event);
// //     }
// //
}
