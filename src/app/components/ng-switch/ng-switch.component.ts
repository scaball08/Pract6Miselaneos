import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html'
})
export class NgSwitchComponent implements OnInit {
  alerta:string = 'info';
  selc:number = 1;
  constructor() { }

  ngOnInit() {
  }

  cambiaAl(opcion:number){
    this.selc = opcion;
  }
}
