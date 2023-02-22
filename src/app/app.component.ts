import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Product } from './interfaces/product.interface';
import {  productService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products:Product[]=[]
  constructor(private productService:productService,private router:Router){}
  ngOnInit(){

    this.productService.products.pipe(
      tap((data:Product[])=>this.products=data
      
      )

      
    ).subscribe()


  }

  cambiarDescripcion():void{
    this.router.navigate(['/description'])
  }
}
