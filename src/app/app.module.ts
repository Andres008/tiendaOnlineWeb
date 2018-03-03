import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routes } from './app.route';
import { HomeComponent } from './components/home/home.component';
import { ComprasRealizadasComponent } from './components/compras-realizadas/compras-realizadas.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StockComponent } from './components/stock/stock.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComprasRealizadasComponent,
    IngresoComponent,
    ProductoComponent,
    SinginComponent,
    SingupComponent,
    NavbarComponent,
    StockComponent
  ],
  imports: [
    BrowserModule, routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
