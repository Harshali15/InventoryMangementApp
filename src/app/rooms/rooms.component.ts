import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit{
  constructor() { }
  // ngDoCheck(): void {
  //   //console.log('ngDoCheck called')
  // }

  //binding syntax 1- interpolation
  hotelName = 'DoubleTree by Hilton Hotel';

  //binding syntax 2- property binding
  numRooms = 100

  //binding syntax 3- event binding
  hiddenRoom = false;

  toggle() {
    this.hiddenRoom = !this.hiddenRoom;
  }

  //to demonstrate the use of ngIf
  rooms : Rooms = {
    totalRoom: 100,
    availableRooms: 10,
    bookedRooms: 50,
    //onholdRooms: 5  //comment to see chaining and null collision
  }

  roomList : RoomsList[]= []

  ngOnInit(): void {

    this.roomList=[
      {
        roomNumber:1,
        roomType:'Deluxe Room',
        ammenities: '1 King Bed, Wifi included',
        price: 100,
        image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
        checkinTime: new Date(11-11-2021),
        checkoutTime: new Date(12-11-2021),
        rating: 4.7
      },
      {
        roomNumber:2,
        roomType:'Queen Room',
        ammenities: '1 Queen Bed, Wifi included',
        price: 200,
        image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
        checkinTime: new Date(11-11-2021),
        checkoutTime: new Date(12-11-2021),
        rating:3.12344
      },
      {
        roomNumber:3,
        roomType:'Deluxe King Room',
        ammenities: '1 King Bed, Wifi included, Free Breakfast',
        price: 1000,
        image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
        checkinTime: new Date(11-11-2021),
        checkoutTime: new Date(12-11-2021),
        rating:5.0
      },
  
    ]
  }

  selectedRoom! : RoomsList;

  selectRoom(room: RoomsList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {

    const room : RoomsList={
        roomNumber:7,
        roomType:'Deluxe Master Room',
        ammenities: '1 King Bed, Wifi included',
        price: 100,
        image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
        checkinTime: new Date(11-11-2021),
        checkoutTime: new Date(12-11-2021),
        rating: 5
    }
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];   //... is the spread operator, here you are creating
    // a new array with the old array and the new room
  }

  // ngDoCheck(): void {
  //   //console.log('ngDoCheck called')
  // }

}
