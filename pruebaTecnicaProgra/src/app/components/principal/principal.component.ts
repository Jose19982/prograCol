import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { StorageService } from 'src/app/core/services/storage.service';
import { AuthenticationService } from '../login/shared/authentication.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  show='p'
  public user: User;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) { }

  
  ngOnInit(): void {
    this.user = this.storageService.getCurrentUser();
  }

  public logout(): void{
    this.authenticationService.logout().subscribe(
        response => {if(response) {this.storageService.logout();}}
    );
  }
  
  mostrarContenido(value){
    this.show=value;
  }

  addItem(changeBox: string) {
    this.show= changeBox;
  }

  backItem(backItemBox: string) {
    this.show= backItemBox;
  }

}
