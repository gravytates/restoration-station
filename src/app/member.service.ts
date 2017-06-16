import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>


  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers(){
    return this.members;
  }

  getMemberById(memberId: string){
    return this.database.object('members/' + memberId);
  }

  addMember(newMember: Member){
    this.members.push(newMember);
  }

  editMember(anyMember){
    var firebaseMemberToEdit = this.getMemberById(anyMember.$key);
    firebaseMemberToEdit.update({name: anyMember.name,
      location: anyMember.location,
      role: anyMember.role,
      summary: anyMember.summary,
      removed: anyMember.removed,
      planted: anyMember.planted,
    });
  }

  deleteMember(localMember){
    var firebaseMemberToDelete = this.getMemberById(localMember.$key);
    firebaseMemberToDelete.remove();
  }

  plantTrees(someMember){
    var firebaseMemberToEdit = this.getMemberById(someMember.$key);
    firebaseMemberToEdit.update({planted: someMember.planted});
  }

  pullIvy(oneMember){
    var firebaseMemberToEdit = this.getMemberById(oneMember.$key);
    firebaseMemberToEdit.update({removed: oneMember.removed});
  }


}
