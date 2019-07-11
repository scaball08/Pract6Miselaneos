import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size':'15px' }">
      hola Mundo 1 ... esta es una etiqueta
    </p>

    <p [ngStyle]="{'font-size': tamano + 'px' }">
      hola Mundo 2 ... esta es una etiqueta
    </p>

    <p [style.fontSize]="'40px'">
      hola Mundo 3... esta es una etiqueta
    </p>

    <p [style.fontSize.px]="tamano">
      hola Mundo 4 ... esta es una etiqueta
    </p>

    <button type="button" class="btn btn-primary m-2" (click)="sumarRestar('-')">
		  <i class="far fa-minus-square"></i>
	  </button>

	  <button type="button" class="btn btn-primary m-2" (click)="sumarRestar('+')">
		  <i class="far fa-plus-square"></i>
	  </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano:number=5;
  constructor() { }

  ngOnInit() {
  }
  sumarRestar(signo:string){
    switch (signo) {
      case '-':
      if(this.tamano>=5)
      this.tamano-=5;

        break;
      case '+':
      this.tamano+=5;
        break;

      default:
        break;
    }
  }

}
