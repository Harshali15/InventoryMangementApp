import { Component, OnInit } from '@angular/core';
import { ConfigserviceService } from '../services/configservice.service';
import { FormGroup, FormBuilder, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{

  bookingForm!: FormGroup

  get guests() {
     return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private configService: ConfigserviceService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({ 
        //roomId: [''], //[''] is a shortcut to new FormControl('')
        roomId: new FormControl({'value':'2', 'disabled':true}),
        guestEmail: [''],
        checkinDate: [''],
        checkoutDate: [''],
        bookingstatus: [''],
        bookingAmount: [''],
        bookingDate:[''],
        mobileNumber: [''],
        guestName: [''],
        address: this.fb.group({
          addressLine1: [''],
          addressLine2: [''],
          City: [''],
          State: [''],
          Country: [''],
          ZipCode: [''],
        }),
        // guestAddress: [''],
        
        guests: this.fb.array([
          this.fb.group({
            guestName: [''],
            age: new FormControl(''),
          })
        ]) 
      })
  }

  Booking(){
    //console.log(this.bookingForm.value) //this wont give the disabled value
    console.log(this.bookingForm.getRawValue()) //this will give the disabled value

  }

  addGuest(){
    this.guests.push (this.fb.group({
      guestName: [''],  
      age: [''],
    }))
  }

  addPassport(){
    this.bookingForm.addControl('passport', new FormControl(''))
  }

}
 