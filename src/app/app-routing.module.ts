import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent,
  
},
{
  path: 'side',
  component: SidebarComponent,
  
},
{
  path: 'header',
  component: HeaderComponent,
  
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
