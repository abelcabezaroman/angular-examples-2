import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title: string = 'Sin nombre';
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  buttonClickedFn(){
    this.buttonClicked.next(this.title);
  }

}
