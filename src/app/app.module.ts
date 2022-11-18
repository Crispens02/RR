import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatosService } from  './services/datos.service';
import { MiniGalleryComponent } from './components/mini-gallery/mini-gallery.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes:Routes = [
  { path: '', component:  MiniGalleryComponent },   
  
  { path:'gallery', component: GalleryComponent },
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiniGalleryComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
