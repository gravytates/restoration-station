import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'location',
  pure: false
})
export class LocationPipe implements PipeTransform {

  transform(input: Member[], filterCondition) {
    var output: Member[] = [];
    if (input != null){
      switch(filterCondition){
        case "Portland":
          return input.filter(function(member){
            return member.location === "Portland";
          });
        case "Seattle":
          return input.filter(function(member){
            return member.location === "Seattle";
          });
        case "Boise":
          return input.filter(function(member){
            return member.location === "Boise";
          });
        case "San-Francisco":
          return input.filter(function(member){
            return member.location === "San-Francisco";
          });
        default:
          return input;
      }
    }
  }
}
