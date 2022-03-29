import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'user',component:UserComponent},
  {path:'login',component:LoginComponent},
  {path:'product/:id',component:ProductDetailComponent},
  {path:'students',component:StudentComponent},

  {path:'students/form',component:StudentFormComponent},
  {path:'students/:id',component:StudentDetailComponent},
  {path:'students/form/:id',component:StudentFormComponent},
  {path:'posts', component:PostComponent},

    {
      path:'posts/form', component:PostFormComponent
    },
    {
      path:'posts/form/:id', component:PostFormComponent
    },
    {
      path:'posts/detail',component:PostDetailComponent
    },
    {
      path:'posts/:id',component:PostDetailComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

