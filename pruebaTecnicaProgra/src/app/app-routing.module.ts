import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component'
import { CreatefiguraComponent } from './components/createfigura/createfigura.component';
import { FigurasComponent } from './components/figuras/figuras.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SeeFigureComponent } from './components/see-figure/see-figure.component';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'index',component:PrincipalComponent, canActivate: [ AuthorizatedGuard ]},
  {path:'perfil', component:PerfilComponent},
  {path:'figuras',component:FigurasComponent},
  {path:'createFigura', component:CreatefiguraComponent},
  {path:'seeFigure', component:SeeFigureComponent},
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const Routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
