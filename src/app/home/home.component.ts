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
  currentRoute: string = this.router.url;
  filterBy: string = "all"
  filterRole: string = "all"

  onChange(menuOption) {
    this.filterRole = menuOption;
  }

  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit() {
    this.members = this.memberService.getMembers();
    if(this.currentRoute === "/portland"){
      this.filterBy = "Portland";
    } else if (this.currentRoute === "/seattle") {
      this.filterBy = "Seattle";
    } else if (this.currentRoute === "/boise") {
      this.filterBy = "Boise";
    } else if (this.currentRoute === "/san-francisco") {
      this.filterBy = "San-Francisco";
    } else {
      this.filterBy = "all";
    }
  }

  goToDetail(member){
    this.router.navigate(['members', member.$key]);
  }

}
