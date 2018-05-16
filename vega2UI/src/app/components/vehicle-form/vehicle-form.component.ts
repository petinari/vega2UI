import { Component, OnInit } from '@angular/core';
import { VehicleService } from './../../services/vehicle.service';


@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  makes: any[];
  models: any[];
  vehicle: any = {};
  features;

  constructor(
    private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(m => {
      this.makes = m;
      console.log(this.makes);
    });
    this.vehicleService.getFeature().subscribe(f => {
      this.features = f;
      console.log(f);
    });

  }
  onMakeChange() {
   const selectedMake = this.makes.find(m => m.id == this.vehicle.make);
   console.log('SelectedMake', selectedMake);
   this.models = selectedMake ? selectedMake.models : [];
  }

}
