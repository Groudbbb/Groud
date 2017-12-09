import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './time/time.component';
import { FindComponent } from './find/find.component';
import { MessageComponent } from './message/message.component';
import { MyComponent } from './my/my.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FinddetailComponent } from './finddetail/finddetail.component';
import { SearchsComponent } from './searchs/searchs.component';
import { SearchComponent } from './search/search.component';

//service
import { GettimedataService } from './service/gettimedata.service';
import { FinddetailService } from './service/finddetail.service';
import { SearchsService } from './service/searchs.service';
import { FindService } from './service/find.service';

//pipe

import { SearchsPipe } from './pipe/searchs.pipe';

const routes:Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,
  
  children:[
    {path:"",redirectTo:"time",pathMatch:"full"},
    {path:"time",component:TimeComponent},
    {path:"find",component:FindComponent},
    {path:"message",component:MessageComponent},
    {path:"mine",component:MyComponent},
   
  ]
},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"findde/:id",component:FinddetailComponent},
{path:"searchs",component:SearchsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TimeComponent,
    FindComponent,
    MessageComponent,
    MyComponent,
    RegisterComponent,
    LoginComponent,
    FinddetailComponent,
    SearchsComponent,
    SearchComponent,
    SearchsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GettimedataService,FinddetailService,SearchsService,FindService],
  bootstrap: [AppComponent]
})
export class AppModule { }
