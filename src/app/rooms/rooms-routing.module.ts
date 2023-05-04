import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  { path: '', component: RoomsComponent,
    children: [{path: ':id', component: RoomsBookingComponent}],
  },
  // { path: ':id', component: RoomsAddComponent},
  { path: 'rooms/add', component: RoomsBookingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
