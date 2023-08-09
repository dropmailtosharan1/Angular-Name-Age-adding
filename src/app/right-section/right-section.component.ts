import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css'],
})
export class RightSectionComponent implements OnInit {
  nameandage = '';
  deletedNames = [];
  addedPeople: { name: string; age: number }[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {}
  addItems() {
    const parts = this.nameandage.split(',');
    if (parts.length === 2) {
      const name = parts[0];
      const age = parseInt(parts[1], 10);
      if (name && age > 0) {
        this.addedPeople.push({ name, age });
        this.userService.subject.next(this.addedPeople);
        this.nameandage = '';
      }
    }
  }

}
