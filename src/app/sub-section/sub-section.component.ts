import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.css']
})
export class SubSectionComponent implements OnInit {

  constructor() { }
@Input() people;
  ngOnInit() {
  }

}