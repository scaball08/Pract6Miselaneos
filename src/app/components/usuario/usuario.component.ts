import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private rutaPadre:ActivatedRoute) {
      this.rutaPadre.params.subscribe((parPadre)=>{
         console.log("Ruta PAdre");
         console.log(parPadre);
      });
  }

  ngOnInit() {
  }

}
