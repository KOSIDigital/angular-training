import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'', component: HomeComponent, title:'Home'},
  {path:'aboutus', component: AboutusComponent, title:'About Us'},
  {path:'service', component: ServiceComponent, title: 'Our Service'},
  {path:'contactus', component: ContactusComponent, title: 'Contact Us'},
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
