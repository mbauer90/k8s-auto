import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';
import {IconModule, IconSetService} from '@coreui/icons-angular';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ReactiveFormsModule} from '@angular/forms';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent} from '../containers';
import {RouterModule} from '@angular/router';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    // AppRoutingModule,
    // AvatarModule,
    // BreadcrumbModule,
    // FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    // SidebarModule,
    IconModule,
    // PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    // ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    // TabsModule,
    // ListGroupModule,
    // ProgressModule,
    BadgeModule,
    // ListGroupModule,
    // CardModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title
  ],
})

export class CoreUiModule {
}
