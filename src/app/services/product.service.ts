import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { Product } from "../interfaces/product.interface";


@Injectable()
export class productService{


constructor(private httpClient: HttpClient){}

private url="https://fakestoreapi.com/products"

get products(){

return this.httpClient.get<Product[]>(this.url)
    


}

}