import { FormControl ,FormGroup} from "@angular/forms";
//验证邮箱用户名
export function emailValidator(control:FormControl):any{
    let email = control.value;
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    let valid = reg.test(email);
    return valid ? null : {email:{info:'请输入正确邮箱格式'}}
}

export function passwordValidator(control:FormControl):any{
    let password = control.value;
    let reg = /\w{5,15}/;
    let valid = reg.test(password);
    // return valid ? null : {passowrd:{info:'请输入5-15位密码'}}
    return valid ? null :{password:true}
}

//验证密码是否一致
export function equalPwdValidator(group:FormGroup):any {
    let password:FormControl = group.get("password") as FormControl;
    let pconfirm:FormControl = group.get("pconfirm") as FormControl;
    let valid:boolean = (password.value === pconfirm.value) ? true : false;
    return valid ? null : {equal:{info:'两次密码不一致'}}
}