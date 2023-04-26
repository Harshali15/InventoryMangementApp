import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import {environment} from '../../../environments/environment'
import { APP_CONFIG_SERVICE } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomsList : RoomsList[] = [
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

  getRooms() : RoomsList[] {
    return this.roomsList;
  }

  constructor(@Inject(APP_CONFIG_SERVICE) private config:AppConfig) {
    // console.log(environment.apiEndpoint)
    console.log(this.config.apiEndpoint)   //now we are getting value from a value provider instead 
    //of directly accessing the environment variable
    console.log('Rooms Service Constructor Called');
   }
}
