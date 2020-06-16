import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeCodeComponent } from './type-code/type-code.component';
import { AngFormsComponent } from './ang-forms/ang-forms.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TempFormsComponent } from './temp-forms/temp-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeCodeComponent,
    AngFormsComponent,
    TempFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
