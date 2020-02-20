import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-new-app';
  list = ['Lista 1', 'Lista 2', 'Lista 3'];

  galleryList = [{
    img: 'https://picsum.photos/200/300',
    title: 'Gatito',
    decription: 'Soy un gatito'
  },{
    img: 'https://picsum.photos/200/300',
    title: 'Gatito',
    decription: 'Soy un gatito'
},{
  img: 'https://picsum.photos/200/300',
    title: 'Gatito',
    decription: 'Soy un gatito'
}];

  mostrarAlert($event){
    alert('Has clickado el botón' + $event);
  }

  addElement($event){
    this.list.push($event);
  }
}
