import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user: User;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.user = this.storageService.getCurrentUser();
  }

}
