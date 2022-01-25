import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorseConverterComponent } from './morse-converter/morse-converter.component';
import { MorsePipe } from './pipes/morse.pipe';
import { Md5 } from 'ts-md5/dist/md5';

@NgModule({
  declarations: [
    AppComponent,
    MorseConverterComponent,
    MorsePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
