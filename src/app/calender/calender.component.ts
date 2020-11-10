import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfectedPcsService } from '../infected-pcs.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  calanderForm: FormGroup;

  data: any[];

  constructor(
    private router: Router,
    private infected_pcs: InfectedPcsService,
    private formBuilder: FormBuilder
  ) {
    let formControls = {};
    this.calanderForm = this.formBuilder.group(formControls);
  }

  ngOnInit(): void {}

  choose() {
    //location.reload();
    //this.router.navigate(['/dashboard']);
    this.infected_pcs.getAllInfected_pcs().subscribe(
      (result) => {
        let data = this.calanderForm.value;
        console.log(data);
        console.log('--------');
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
