import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit{

  productCategories: any = []

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories(){
    this.productService.getProductCategories().subscribe(
      data =>{
        this.productCategories = data
        console.log(data)
      }
    )
  }


}
