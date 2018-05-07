import { Component, OnInit } from '@angular/core';
import { MakeService } from './../../services/make.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  makes: any[];
  models: any[];
  vehicle: any = {};

  constructor(private makeService: MakeService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe(m => {
      this.makes = m;
      console.log(this.makes);
    });
  }
  onMakeChange() {
   const selectedMake = this.makes.find(m => m.id == this.vehicle.make);
   console.log('SelectedMake', selectedMake);
   this.models = selectedMake.models;
  }

}
