import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ButtonComponent } from "./components/button/button.component";
import { LoginComponent } from "./pages/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ButtonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
