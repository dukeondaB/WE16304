import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product =[
    {
      name: "iphone 12",
      desc: "apple",
      price: 2000000
     },
     {
      name: "iphone 13",
      desc: "apple",
      price: 2000000
     }
  ]
  newProduct =
   {
   name: "",
   desc: "",
   price: 0
  }
  // onSubmit(data :any){
  //   this.product.push(data);
  //   this.newProduct = {
  //     name: "",
  //     desc: "",
  //     price: 0
  //    }
  // }

  onSubmit(data:any){
    if(this.isEdit){
      for (let i = 0; i < this.product.length; i++) {
        if(this.product[i].name === this.newProduct.name){
          this.product[i] = this.newProduct;
        }
        this.isEdit = false;
      }
    }else {
      this.product.push(data);
    }
    this.newProduct = {
      name :"",
      desc:"",
      price:0
    }
  }
  isEdit = false;
 edit(obj:any){
  this.newProduct = obj;
  this.isEdit = true;
 }
 remove(index: string) {
  this.product = this.product.filter(products => {
    return products.name !== index;
  });

}
//   edit(index : number){
// console.log(index);
//   this.newProduct =this.product[index];
//   }
}
