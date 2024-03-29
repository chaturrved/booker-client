import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { SignUpModule } from './auth/sign-up/sign-up.module';
import { LoginModule } from './auth/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { BookmarkModule } from './bookmarks/bookmark/bookmark.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    SignUpModule,
    LoginModule,
    ApolloModule,
    HomeModule,
    BookmarkModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory:  (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri : 'api/graphql'
          })
        }
      },
      deps:[HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
