import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  constructor(private httpClient: HttpClient){

  }
  getProducts(): void {
    const response = this.httpClient.get("https://api.escuelajs.co/api/v1/products").subscribe(response => {
      console.log(response);
    })
    console.log(response);
  }

  ngOnInit(): void {
    this.getProducts();
  };
};