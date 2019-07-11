import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private rutaPadre:ActivatedRoute) {

     // la propiedad <parent> se utiliza para obtener 
    // el parametro padre en la ruta hija
    this.rutaPadre.parent.params.subscribe((parPadre)=>{
       console.log("Ruta hija");
       console.log(parPadre);
    });
}

  ngOnInit() {
  }

}
