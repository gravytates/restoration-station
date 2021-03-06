import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ){}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.memberService.getMemberById(this.memberId).subscribe(lastObserverData => {
    this.memberToDisplay = lastObserverData;
    })
  }

  beginPlanting(plantAmount){
    this.memberToDisplay.planted += parseInt(plantAmount);
    this.memberService.plantTrees(this.memberToDisplay);
  }

  beginRemoving(removeAmount){
    this.memberToDisplay.removed += parseInt(removeAmount);
    this.memberService.pullIvy(this.memberToDisplay);
  }

}
