import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

const routes: Routes = [

  


{ path:'description',component:DescripcionComponent},
{path:'home',component:AppComponent},

{path:'',redirectTo:'home',
pathMatch:'full'}


,
{path:'**',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
