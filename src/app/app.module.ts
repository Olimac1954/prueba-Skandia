import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import localeCo from '@angular/common/locales/es-CO'; // importar locale colombiano

registerLocaleData(localeCo); // registrar locale

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ObjetivoComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
     { provide: LOCALE_ID, useValue: 'es-CO' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
