import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomsList[] = [];  //make roomsList a valid input property on app-rooms-list component

  @Output() selectedRoom = new EventEmitter<RoomsList>(); //make roomsList a valid output property on app-rooms-list component
  constructor() { }

  ngOnInit(): void {

  }

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room);
  }


}


