import { Component, OnInit , Input } from '@angular/core';
import { Cabinet } from 'src/app/models/Cabinet';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  @Input() cabinet:Cabinet;

  constructor() { }

  ngOnInit(): void {
  }

}
