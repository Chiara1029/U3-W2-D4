import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { HomeComponent } from './components/home/home.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { DetailsComponent } from './components/details/details.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: ActivePostsComponent },
  { path: 'active-posts/:id', component: DetailsComponent },
  { path: 'inactive-posts', component: InactivePostsComponent },
  { path: 'inactive-posts/:id', component: DetailsComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    HomeComponent,
    PostCardComponent,
    DetailsComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
