import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PersonsPageComponent } from './pages/persons-page/persons-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';


const routes: Routes = [{
  path: 'list', component: ListPageComponent
},{
  path: 'persons', component: PersonsPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
