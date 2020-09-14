import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router'; 

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder, private router: Router

  ) {
      // redirect to home if already logged in
     // if (this.authenticationService.currentUserValue) {
        //  this.router.navigate(['/']);
      //}
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          address: ['', Validators.required],
          state: ['', Validators.required],
          country: ['', Validators.required],
         // email: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          dob: ['', Validators.required],
         // contact: ['', [Validators.required, Validators.minLength(6)]]
          contact: ['', [ Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(10), Validators.maxLength(10)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {

    console.log("In onsubmit");
      this.submitted = true;

      // reset alerts on submit
     // this.alertService.clear();
     console.log("before if block");
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        console.log("Error block");
          return;
      } else {
        console.log("In else block");
        this.loading = true;
        this.router.navigate(['/appointment']);
        console.log("In else end block");
      }

      console.log("end block");
      /*this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });*/
  }
}
