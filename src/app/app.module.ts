import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modules groups components, services providers and import other modules


@NgModule({
  // components, directives, pipes or filters just must be declared
  declarations: [
    AppComponent,
  ],
  // modules just must be importeds
  imports: [ // all modules that this module will import
    BrowserModule, // to get access to browser properties
    AppRoutingModule // to get access to all routing module properties
  ],
  providers: [],
  bootstrap: [AppComponent] // botstrap file
})
export class AppModule { }
