import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

    // la propiedad <parent> se utiliza para obtener 
    // el parametro padre en la ruta hija
  constructor(private rutaPadre:ActivatedRoute) {
    this.rutaPadre.parent.params.subscribe((parPadre)=>{
       console.log("Ruta hija");
       console.log(parPadre);
    });
}

  ngOnInit() {
  }

}
