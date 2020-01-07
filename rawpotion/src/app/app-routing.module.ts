import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
