import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AuthGuard} from './guards/auth.guard';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'reactive',component:ReactiveComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
