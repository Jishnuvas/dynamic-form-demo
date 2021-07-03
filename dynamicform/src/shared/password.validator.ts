import {AbstractControl, ValidationErrors} from '@angular/forms';

export const passwordValidator = (control:AbstractControl): ValidationErrors | null => {

    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if(password?.pristine || confirmPassword?.pristine){
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value?{mismatch:{value:true}}:null;
};
