import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReloadComponent } from './reload/reload.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'reload', component: ReloadComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
