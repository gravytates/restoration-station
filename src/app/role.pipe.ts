import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {

  transform(input: Member[], filterCondition) {
    var output: Member[] = [];
    if (input != null){
      switch(filterCondition){
        case "member":
          return input.filter(function(member){
            return member.role === "Member";
          });
        case "board":
          return input.filter(function(member){
            return member.role === "Board of Directors";
          });
        case "manager":
          return input.filter(function(member){
            return member.role === "Project Manager";
          });
        case "coordinator":
          return input.filter(function(member){
            return member.role === "Member Coordinator";
          });
        default:
          return input;
      }
    }
  }
}
