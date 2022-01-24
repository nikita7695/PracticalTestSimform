import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DropDown } from '../../interfaces/dropdown';
import { Products } from '../../interfaces/products';
import { ProductService } from '../../services/Products/products.service';
import { TypeServiceService } from '../../services/Type/type-service.service';

@Component({
  selector: 'app-invoice-validation',
  templateUrl: './product.component.html'
})

export class AddProductComponent implements OnInit {
  public model: Products = new Products();
  public typeDropDowns: DropDown[];
  id: number = 0;
  private sub: any;

  constructor(private route: ActivatedRoute, private typeServiceService: TypeServiceService, private productService: ProductService) {
    this.productService.GetCategoryList().subscribe((result: any) => {      
      this.typeDropDowns = result.data;
    }, error => console.log(error));
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id != undefined && !isNaN(this.id)) {
        this.setData();
      }
    });
  }

  setData() {
    this.productService.GetProductById(this.id).subscribe((result: any) => {      
      this.model = result.data;
    });
  }

  submitForm(isValid: boolean, e): void {
    debugger
    if (isValid) {
      this.productService.SaveProduct(this.model).subscribe((result: any) => {
        debugger
        this.model = result.data;
      });
    }
  }
}
