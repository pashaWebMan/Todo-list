import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(items, searchText) {
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    items.sort((a, b) => {
      var matchesA = {
        name: 0,
        email: 0,
        login: 0
      }
      var matchesB = {
        name: 0,
        email: 0,
        login: 0
      }
      if (a.Name.includes(searchText)) {
        matchesA.name++
      }
      if (a.Email.includes(searchText)) {
        matchesA.email++
      }
      if (a.Login.includes(searchText)) {
        matchesA.login++
      }
      if (b.Name.includes(searchText)) {
        matchesB.name++
      }
      if (b.Email.includes(searchText)) {
        matchesB.email++
      }
      if (b.Login.includes(searchText)) {
        matchesB.login++
      }
      if (a.name + a.email + a.login > b.name + b.email + b.login) { return 1 }
      if (a.name + a.email + a.login < b.name + b.email + b.login) { return -1 }
      return 0
    })
    return items.filter(item => {
      return item.Name.includes(searchText) || item.Email.includes(searchText) || item.Login.includes(searchText)
    })
  }

}
