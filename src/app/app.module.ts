import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './time/time.component';
import { FindComponent } from './find/find.component';
import { MessageComponent } from './message/message.component';
import { MineComponent } from './mine/mine.component';
import { GettimedataService } from './service/gettimedata.service';
const routes:Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,
  children:[
    {path:"",redirectTo:"time",pathMatch:"full"},
    {path:"time",component:TimeComponent},
    {path:"find",component:FindComponent},
    {path:"message",component:MessageComponent},
    {path:"mine",component:MineComponent},
   
  ]
},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TimeComponent,
    FindComponent,
    MessageComponent,
    MineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule, 
   
  ],
  providers: [GettimedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
