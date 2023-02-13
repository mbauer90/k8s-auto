import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DefaultLayoutComponent} from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'debitos',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'debitos',
        loadChildren: () =>
          import('./views/feed/feed.module').then((m) => m.FeedModule)
      },
    ]
  },
  {path: '**', redirectTo: 'debitos'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
