import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookComponent } from './book/book.component';
import { BooksSortComponent } from './books-sort/books-sort.component';
import { BooksFilterComponent } from './books-filter/books-filter.component';
import { DirectiveEgComponent } from './directive-eg/directive-eg.component';
import { ChangeTextDirective } from './directives/change-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    LandingPageComponent,
    BookComponent,
    BooksSortComponent,
    BooksFilterComponent,
    DirectiveEgComponent,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
