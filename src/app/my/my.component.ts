import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  gologin(){
    this.route.navigate(['/login'])

  }


}
