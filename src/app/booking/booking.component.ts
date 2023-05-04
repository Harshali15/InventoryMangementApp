import { Component } from '@angular/core';
import { ConfigserviceService } from '../services/configservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
constructor(private configService: ConfigserviceService) { }
}
