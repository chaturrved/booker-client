import { Component } from '@angular/core';
import { CreateUserGQL } from 'src/generated-types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private readonly createUserGql: CreateUserGQL) {}

  signUp({email, password}:any) {
    console.log(email, password);
    this.createUserGql
      .mutate({createUserData: {email, password}})
      .subscribe(() => {});
  }
}
