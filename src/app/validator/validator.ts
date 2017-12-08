import {FormControl,FormGroup} from "@angular/forms"
import { Observable } from "rxjs";
import "rxjs/Rx"

export function mobileValidator(control:FormControl):any{
    var reg = /^1(3|4|5|7|8)\d{9}$/  ;
    var valid = reg.test(control.value);
     return valid ? null : {mobile:true}
  
}
export function mobileAsyncValidator(control:FormControl):any{
    var reg = /^1(3|4|5|7|8)\d{9}$/  ;
    var valid = reg.test(control.value);
    return Observable.of(valid?null : {mobile:true})
    
}

export function equalPwdValidator(group:FormGroup):any {
    let password:FormControl = group.get("password") as FormControl;
    let pconfirm:FormControl = group.get("pconfirm") as FormControl;
    let valid:boolean = (password.value === pconfirm.value) ? true : false;

    return valid ? null : {equal:{desc:"密码和确认密码不匹配"}}
    
}

export function pwdValidator(control:FormControl):any{
    var reg = /^\d{6}$/  ;
    var valid = reg.test(control.value);
     return valid ? null : {password:true}
  
}