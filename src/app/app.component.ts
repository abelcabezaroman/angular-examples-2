import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-new-app';

  galleryList = [{
    img: 'https://picsum.photos/id/3/200/300',
    title: 'Gatito',
    description: 'Soy un gatito'
  },{
    img: 'https://picsum.photos/id/2/200/300',
    title: 'Gatito 2',
    description: 'Soy un gatito'
  },{
    img: 'https://picsum.photos/id/1/200/300',
    title: 'Gatito 3',
    description: 'Soy un gatito'
  }];



  mostrarAlert($event){
    alert('Has clickado el botón' + $event);
  }

}
