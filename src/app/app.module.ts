import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeokjaeHeaderComponent } from './seokjae-header/seokjae-header.component';
import { SeokjaeFooterComponent } from './seokjae-footer/seokjae-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SeokjaeHeaderComponent,
    SeokjaeFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
