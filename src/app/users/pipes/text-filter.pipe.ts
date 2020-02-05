import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(items, searchText) {
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    var filteredItems = items.filter(item => {
      return item.Name.includes(searchText) || item.Email.includes(searchText) || item.Login.includes(searchText)
    })
    return filteredItems.sort((a, b) => {
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
      if (a.Name.toLowerCase().includes(searchText)) {
        matchesA.name++
      }
      if (a.Email.toLowerCase().includes(searchText)) {
        matchesA.email++
      }
      if (a.Login.toLowerCase().includes(searchText)) {
        matchesA.login++
      }
      if (b.Name.toLowerCase().includes(searchText)) {
        matchesB.name++
      }
      if (b.Email.toLowerCase().includes(searchText)) {
        matchesB.email++
      }
      if (b.Login.toLowerCase().includes(searchText)) {
        matchesB.login++
      }
      var sumA = matchesA.name + matchesA.email + matchesA.login;
      var sumB = matchesB.name + matchesB.email + matchesB.login;
      console.log("Sum A: ", sumA)
      console.log("Sum B: ", sumB)
      if (sumA > sumB) { return -1 }
      if (sumA < sumB) { return 1 }
      if (sumA = sumB) {
        if(a.Name.length > b.Name.length) { return 1 }
        if(a.Name.length < b.Name.length) { return -1 }
      }
    })
  }

}
