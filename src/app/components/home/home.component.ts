import { Component, OnInit } from '@angular/core';
import { IngresoComponent } from '../ingreso/ingreso.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articulos:any[] =[
    {
    "titulo": "Titulo del producto 1",

    "descripcion": "Descripcion del producto xxxxxxxxx xxxxxxxxx",

    "precio": 100.10,

    "cantidad": 2,
    "descuento":5,
    "url":"https://i2.linio.com/p/e7ad556f25504c845047bd9a43e511ef-product.jpg"
  },
  {
    "titulo": "Titulo del producto 2",

    "descripcion": "Descripcion del producto xxxxxxxxx xxxxxxxxx",

    "precio": 100.10,

    "cantidad": 2,
    "descuento":5,
    "url":"https://i2.linio.com/p/e7ad556f25504c845047bd9a43e511ef-product.jpg"
  },

  {
    "titulo": "Titulo del producto 3",

    "descripcion": "Descripcion del producto xxxxxxxxx xxxxxxxxx",

    "precio": 100.10,

    "cantidad": 2,
    "descuento":5,
    "url":"https://i2.linio.com/p/e7ad556f25504c845047bd9a43e511ef-product.jpg"
  },
  {
    "titulo": "Titulo del producto 4",

    "descripcion": "Descripcion del producto xxxxxxxxx xxxxxxxxx",

    "precio": 100.10,

    "cantidad": 2,
    "descuento":5,
    "url":"https://i2.linio.com/p/e7ad556f25504c845047bd9a43e511ef-product.jpg"
  },

  {
    "titulo": "Titulo del producto 5",

    "descripcion": "Descripcion del producto xxxxxxxxx xxxxxxxxx",

    "precio": 100.10,

    "cantidad": 2,
    "descuento":5,
    "url":"https://i2.linio.com/p/e7ad556f25504c845047bd9a43e511ef-product.jpg"
  },
  {
    "titulo": "Titulo del producto 6",

    "descripcion": "Descripcion del producto xxxxxxxxx xxxxxxxxx",

    "precio": 100.10,

    "cantidad": 2,
    "descuento":5,
    "url":"https://i2.linio.com/p/e7ad556f25504c845047bd9a43e511ef-product.jpg"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
