import { NgModule } from '@angular/core';
import { ApiInfoComponent } from './components/api-info/api-info.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiListComponent } from './components/api-list/api-list.component';
import { TykResolver } from './resolvers/tyk.resolver';

const routes: Routes = [
  { path: 'api/:apiId', component: ApiInfoComponent },
  { path: 'dashboard', component: ApiListComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
