import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products-service.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
// creer un formgroup,injecter un objet formbuilder
//le point ! C'est un moyen de dire explicitement au compilateur
//qu'une expression a une valeur autre que null ou undefined
productFormGroup!:FormGroup;
submitted:boolean=false;
  constructor(private fb:FormBuilder,private productsService:ProductsService) { }

  ngOnInit(): void {
    //on creer ici notre group control
    this.productFormGroup=this.fb.group({
      //on peut utiliser les validateurs
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required]
    });
  }
  onSaveProduct(){
    this.submitted=true;
    // si il est invalid on fait pas appel au service pour saving
    if(this.productFormGroup?.invalid) return;
    this.productsService.save(this.productFormGroup.value)
      .subscribe(data=>{
        alert("Success Saving product");
      });
  }

}
