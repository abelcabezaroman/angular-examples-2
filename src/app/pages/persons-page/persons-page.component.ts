import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.scss']
})
export class PersonsPageComponent implements OnInit {

  personsList = [{
    name: 'Abel',
    surname: 'Cabeza Román',
    sex: 'Hombre',
    activated: true,
    skills: ['PHP', 'Javascript', 'CSS']
  },{
    name: 'Pedro',
    surname: 'Cabeza Román',
    sex: 'Hombre',
    activated: false,
    skills: ['PHP', 'Javascript', 'CSS']
  },{
    name: 'Lucia',
    surname: 'Cabeza Román',
    sex: 'Hombre',
    activated: true,
    skills: ['PHP', 'Javascript', 'CSS']
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
