import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes=[
  {path:'products',component:ContentComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/details/:product_id',component:ProductDetailComponent}

]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
