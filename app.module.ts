import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './component/car/car.component';
import { MagazComponent } from './component/magaz/magaz.component';

const appRoutes: Routes = [
{path: '', component:CarComponent},
{path: 'magaz', component:MagazComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    MagazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
