import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './components/principal/principal.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FigurasComponent } from './components/figuras/figuras.component';
import { CreatefiguraComponent } from './components/createfigura/createfigura.component';
import { SeeFigureComponent } from './components/see-figure/see-figure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from "./core/core.module";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {environment} from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    PerfilComponent,
    FigurasComponent,
    CreatefiguraComponent,
    SeeFigureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CoreModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
