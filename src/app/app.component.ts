import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'InventoryMangementApp';
  
  //role= 'User'
  role= 'Admin'

  @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef;
  
  ngAfterViewInit(): void {
    const ComponentRef = this.vcr.createComponent(RoomsComponent);
    //ComponentRef.instance.numRooms = 35  //change property of the component
  }

  @ViewChild('name', {static : true}) name! : ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = "ECENTRAL HOTEL"
  }

}
