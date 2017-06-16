import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [MemberService]
})
export class NewMemberComponent implements OnInit {
  memberForm = null;
  formButton = true;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  showForm(){
    this.formButton = null;
    this.memberForm = true;
  }

  submitForm(name: string, location: string, role: string, summary: string){
    console.log(name, location, role, summary);
    console.log(Member);
    var newMember: Member = new Member(name, location, role, summary);
    this.memberService.addMember(newMember);
    this.memberForm = null;
    this.formButton = true;
  }

}
