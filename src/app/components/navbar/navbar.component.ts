import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Navbar :any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.datos=data;
    });
  }

}