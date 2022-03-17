import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = 'duc';

  
}
// sẽ có luồng hoạt động trong LoginComponent
// khi định ngahix trong file này sẽ có thể gọi trong html
