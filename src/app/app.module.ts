import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './time/time.component';
import { FindComponent } from './find/find.component';
import { MessageComponent } from './message/message.component';
import { MineComponent } from './mine/mine.component';
import { GettimedataService } from './service/gettimedata.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimedetailComponent } from './timedetail/timedetail.component';
const routes:Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,
  children:[
    {path:"",redirectTo:"time",pathMatch:"full"},
    {path:"time",component:TimeComponent},
    {path:"find",component:FindComponent},
    {path:"message",component:MessageComponent},
    {path:"mine",component:MineComponent}
   
   
  ]
},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"timedetail",component:TimedetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TimeComponent,
    FindComponent,
    MessageComponent,
    MineComponent,
    RegisterComponent,
    LoginComponent,
    TimedetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GettimedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
