import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {
  addedUsers;
  constructor(private userService: UserService) { }
user;
private sub:Subscription=new Subscription();
  ngOnInit() {
    this.sub.add(this.userService.subject.subscribe(res=>{
      this.user=res;
    }))
  }
ngOnDestroy(){
  this.sub.unsubscribe();
}
}