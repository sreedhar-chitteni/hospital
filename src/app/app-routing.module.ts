import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {path:"patient", component:RegisterComponent},
  {path:"appointment", component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
