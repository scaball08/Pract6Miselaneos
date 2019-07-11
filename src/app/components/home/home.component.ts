import { Component, OnInit,OnChanges,DoCheck,AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <p>Hola mundo desde el app component</p>
  <app-clases></app-clases>
  <p [appResaltado]="'magenta'">Hola mundo</p>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit  , OnChanges, DoCheck,AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,OnDestroy{

  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  }



}
