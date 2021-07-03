import {AbstractControl,ValidationErrors,ValidatorFn} from '@angular/forms';



export const forbiddenNameValidator = (forbiddenName:RegExp):ValidatorFn => {

    return (control:AbstractControl): ValidationErrors | null=>{

        const forbidden = forbiddenName.test(control.value);
        return forbidden ? { forbiddenName: {value: control.value}}:null

    }
    
};
