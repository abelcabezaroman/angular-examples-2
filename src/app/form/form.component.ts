import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() addElementEmitter = new EventEmitter();
  public listName: string;

  constructor() { }

  ngOnInit(): void {
  }

  addElement(){
    this.addElementEmitter.next(this.listName);
  }

}
