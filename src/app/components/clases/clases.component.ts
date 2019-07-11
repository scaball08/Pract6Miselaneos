import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {
  alerta:string="alert-success";
   cargar:boolean= false;

  propiedades = {danger:false};
  objeto={resp:false};
  constructor() { }

  ngOnInit() {
  }

   ejecutar() {
   this.objeto.resp = true;
    setTimeout(()=> {
      this.objeto.resp = false;
      console.log(this.objeto.resp);
    }, 3000 );

  }

}
