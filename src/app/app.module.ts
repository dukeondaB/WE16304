import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import thành phần form
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule // đưa vào để các component có thể sử dụng
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
