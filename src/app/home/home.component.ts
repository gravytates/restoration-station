import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {
  members: FirebaseListObservable<any[]>

  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  toDetail(member){
    this.router.navigate(['members', member.$key]);
  }

}
