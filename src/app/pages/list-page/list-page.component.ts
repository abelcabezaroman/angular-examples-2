import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  list = ['Lista 1', 'Lista 2', 'Lista 3'];

  constructor() { }

  ngOnInit(): void {
  }



  addElement($event){
    this.list.push(Object.assign({}, $event));
  }}
