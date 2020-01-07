import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.warn("Login attempt submitted");

    console.log(this.loginForm.value);

    this.loginForm.reset();
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
