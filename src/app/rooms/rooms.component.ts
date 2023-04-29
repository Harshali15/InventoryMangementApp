import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Rooms, RoomsList } from './rooms';
import { RoomsService } from './services/rooms-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy{
  
  constructor(private RoomService : RoomsService) { 
    //eg of dependency injection
    // this.roomList = this.RoomService.getRooms();
  }

  stream = new Observable((observer) => {
    observer.next('user 1');
    observer.next('user 2');
    observer.next('user 3'); 
    observer.complete();
  });

  //@ViewChild(HeaderComponent, {static : true}) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

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
      // this.RoomService.getRooms().subscribe(data => {
      //     this.roomList = data;
      //  })

      // this.stream.subscribe((data)=> console.log(data));

      this.stream.subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('completed')
      });
      
    //console.log(this.headerComponent)  //gives undefined if static is false in the header component
    // this.roomList=[
    //   {
    //     roomNumber:1,
    //     roomType:'Deluxe Room',
    //     ammenities: '1 King Bed, Wifi included',
    //     price: 100,
    //     image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
    //     checkinTime: new Date(11-11-2021),
    //     checkoutTime: new Date(12-11-2021),
    //     rating: 4.7
    //   },
    //   {
    //     roomNumber:2,
    //     roomType:'Queen Room',
    //     ammenities: '1 Queen Bed, Wifi included',
    //     price: 200,
    //     image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
    //     checkinTime: new Date(11-11-2021),
    //     checkoutTime: new Date(12-11-2021),
    //     rating:3.12344
    //   },
    //   {
    //     roomNumber:3,
    //     roomType:'Deluxe King Room',
    //     ammenities: '1 King Bed, Wifi included, Free Breakfast',
    //     price: 1000,
    //     image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
    //     checkinTime: new Date(11-11-2021),
    //     checkoutTime: new Date(12-11-2021),
    //     rating:5.0
    //   },
  
    // ]
  }

  //After the view is initialized, or all components are initialized
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"
    console.log(this.headerComponent) 

    console.log(this.headerChildrenComponent)

    this.headerChildrenComponent.last.title = "Last Title"
    // this.headerChildrenComponent.forEach((header) => {
    //   console.log(header)
    // }
  }

  //After the view is checked, or all components are checked once, change detection is run once
  ngAfterViewChecked(): void {
   //this.headerComponent.title = "Rooms View2"
    //console.log(this.headerComponent) 
  }

  selectedRoom! : RoomsList;

  selectRoom(room: RoomsList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {

    const room : RoomsList={
        roomNumber:'7',
        roomType:'Deluxe Master Room',
        amenities: '1 King Bed, Wifi included',
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


  ngOnDestroy(): void {
    console.log("RoomsListComponent destroyed")
  }
}
