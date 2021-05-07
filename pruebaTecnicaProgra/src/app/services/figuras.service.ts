import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'

})

export class FigurasService{

    figura:any={};
    constructor(private http:HttpClient){
         
    }


    obtenerFiguras():Observable<any>{
        
        
        return this.http.get("../../assets/figuras.json");




        
    }
}