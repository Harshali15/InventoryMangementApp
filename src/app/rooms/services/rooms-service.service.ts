import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import {environment} from '../../../environments/environment'
import { APP_CONFIG_SERVICE } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomsList : RoomsList[] = []

  constructor(@Inject(APP_CONFIG_SERVICE) private config:AppConfig, private http: HttpClient) {
    // console.log(environment.apiEndpoint)
    console.log(this.config.apiEndpoint)   //now we are getting value from a value provider instead 
    //of directly accessing the environment variable
    console.log('Rooms Service Constructor Called');
   }

   getRooms() {
    return this.http.get<RoomsList[]>('/api/rooms'); //we do not need to specify the full url as we have already 
    //specified the base url in the proxy.conf.json file
  }
}
