import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchs'
})
export class SearchsPipe implements PipeTransform {

  transform(list: any[],resourceName:string,keyword:string): any {
    console.log(resourceName,keyword)
    if(!resourceName || !keyword){
      return [];
    }
    
    return list.filter(item=>{
       let filterValue = item.resourceName   ;   //product  title product["title"]
       console.log(filterValue)
       return filterValue.indexOf(keyword) >=0;
    })
  }

}
