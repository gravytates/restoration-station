import { Component, Input, OnInit } from '@angular/core';
// import { Member } from '../member.model';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;
  formButton = true;
  editForm = null;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  showForm(){
    this.editForm = true;
    this.formButton = null;
  }

  beginUpdatingMember(member){
    this.memberService.editMember(member);
    this.editForm = null;
    this.formButton = true;
  }

  beginDeletingMember(member){
  if(confirm("Sure yeah?")){
    this.memberService.deleteMember(member);
  }
}
}
