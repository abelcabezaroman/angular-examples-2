import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.scss']
})
export class ItemGalleryComponent implements OnInit {

  @Input() item: object;

  constructor() { }

  ngOnInit(): void {
  }

}
