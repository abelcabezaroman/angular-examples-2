import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { ButtonComponent } from './button/button.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { ItemGalleryComponent } from './item-gallery/item-gallery.component';
import { FormGalleryComponent } from './form-gallery/form-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    ButtonComponent,
    ListComponent,
    FormComponent,
    GalleryComponent,
    ItemGalleryComponent,
    FormGalleryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
