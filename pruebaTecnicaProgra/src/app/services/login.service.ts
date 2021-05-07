import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn:'root'

})

export class LoginService{
    
    public id: number;
    public username: string;
    public password: string;

    constructor(private http:HttpClient){
         
    }

}