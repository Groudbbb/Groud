import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import { SearchsService } from '../service/searchs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.css']
})
export class SearchsComponent implements OnInit {


  private keyword:string;
  private serachresult=[];
  titleFilter:FormControl = new FormControl()

  constructor(private searchsService:SearchsService) { 

    this.titleFilter.valueChanges
    .debounceTime(400)
    .subscribe(
      value=>this.keyword = value
    )
  }

  ngOnInit() {

    // this.searchsService.getSearchResult().subscribe(
    //    data=>{
    //      console.log(data.json());
    //      this.serachresult=data.json();
    //    }
    // )




  }

  gobacks(){
    history.back();
  }

  gosearchss(){
      this.searchsService.getSearchResult().subscribe(
       data=>{
         console.log(data.json());
         this.serachresult=data.json();
       }
    )


  }
  
  

}
