import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { flightDetailsModel } from '../Models/flightDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class FlightdetailService {

  api_url = 'http://localhost:3000/users/'

  constructor() { }
  placeOfDeparture;
  dateOfDeparture;
  placeOfArrival;
  dateOfArrival;
  personsOfFlight;
  kid;
  senior;
  bagage;
  airplane;

  flightDateils: flightDetailsModel = {
    departurePlace: 'Wrocław',
    arrivalPlace: '',
    departureDate: 0,
    arrivalDate: 0,
    persons: 0,
    senior: false,
    kid: false,
    zone: 0,
    bagage: '',
    price: 0
    }

}
