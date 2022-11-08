import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service.service';
import { Product } from '../../model/product.model';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum } from '../../state/product.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /*products$:Observable<Product[]>|null=null;*/
  /* on cree un objet datastate*/
  products$:Observable<AppDataState<Product[]>>|null=null;
  /*creer un objet DataStateEnum pour la partie html*/
  readonly DataStateEnum=DataStateEnum;/*affecter un type à une variable*/
  constructor(private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllProducts(){
   /* this.productService.getAllProducts().subscribe(data=>{
      this.products=data;
    })*/
    this.products$=this.productService.getAllProducts()
    .pipe(
      map(data=>({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING})),
      catchError(err=>of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
  }
  onGetSelectedProducts(){
    this.products$=this.productService.getSelectedProducts()
    .pipe(
      map(data=>({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING})),
      catchError(err=>of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
  }
  onGetAvailableProducts(){
    this.products$=this.productService.getAvailableProducts()
    .pipe(
      map(data=>({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING})),
      catchError(err=>of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
  }
  onSearch(dataForm:any){
    this.products$=this.productService.searchProducts(dataForm.keyword)
    .pipe(
      map(data=>({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING})),
      catchError(err=>of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))

  }
  onSelect(p: Product) {
    this.productService.select(p)
      .subscribe(data=>{
        p.selected=data.selected;
      })
  }

  onDelete(p: Product) {
     let v=confirm("Etes vous sûre?");
     if(v==true)
    this.productService.deleteProduct(p)
      .subscribe(data=>{
        this.onGetAllProducts();
      })
  }
  onNewProducts(){
    this.router.navigateByUrl("/newProduct");
  }
  onEdit(p: Product) {
    this.router.navigateByUrl("/editProduct/"+p.id);
  }
}
