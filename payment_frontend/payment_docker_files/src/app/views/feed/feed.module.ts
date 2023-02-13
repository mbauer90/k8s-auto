import {NgModule} from '@angular/core';
import {FeedComponent} from './feed.component';
import {SharedModule} from '../../shared/shared.module';
import {FeedRoutingModule} from './feed-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FeedRoutingModule,
  ],
  declarations: [FeedComponent]
})
export class FeedModule {
}
