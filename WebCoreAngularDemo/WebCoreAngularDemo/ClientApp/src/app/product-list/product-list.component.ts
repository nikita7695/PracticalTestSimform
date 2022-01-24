import { Component, OnInit } from '@angular/core';
import { DropDown } from '../../interfaces/dropdown';
import { Products } from '../../interfaces/products';
import { ProductService } from '../../services/Products/products.service';
import { TypeServiceService } from '../../services/Type/type-service.service';

declare function InitBasicDataTable(selector, title): any;
declare var $: any;

@Component({
  selector: 'app-invoice-validation',
  templateUrl: './product-list.component.html'
})

export class ProductComponent implements OnInit {
  public countryDropDowns: DropDown[];
  public typeDropDowns: DropDown[];
  public products: Products[];
  constructor(private typeServiceService: TypeServiceService, private productService: ProductService) { }
  ngOnInit(): void {
    //this.InitDataTable();
    this.productService.GetProductList().subscribe((result: any) => {      
      this.products = result.data;
    }, error => console.log(error));
  }

  InitDataTable() {
    InitBasicDataTable("#tblProducts", "tblProducts");
  }

  deleteProduct(event, productId) {
    event.stopPropagation();
    if (confirm('Are you sure want to delete this item ?')) {
      this.productService.DeleteProduct(productId).subscribe((result: any) => {
        //this.router.navigate(['/product-list'], { queryParams: { username: this.myForm.controls.username.value } });
      });
    }
  }
}
