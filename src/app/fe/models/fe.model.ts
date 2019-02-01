export class FE {
  constructor(public id: string, public tripDetails: TripDetails[]) {}
}
export class TripDetails {
  constructor(public tripNumber: string, public patientName: string) {}
}
