import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'InventoryMangementApp';
  
  //role= 'User'
  role= 'Admin'

  constructor(@Inject (localStorageToken) private localStorage: any) { }

  @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef;
    
  ngAfterViewInit(): void {
    //const ComponentRef = this.vcr.createComponent(RoomsComponent);
    //ComponentRef.instance.numRooms = 35  //change property of the component
  }

  @ViewChild('name', {static : true}) name! : ElementRef;

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Hilton Hotel Group') //you can see this on local storage now. dont add anything secure on localstorage as it is not secure     
   // this.name.nativeElement.innerText = "ECENTRAL HOTEL"
  }

}
