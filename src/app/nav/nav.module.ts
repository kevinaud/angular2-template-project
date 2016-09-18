import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MdButtonModule } from '@angular2-material/button';
import { BrowserModule } from '@angular/platform-browser';

import { MdIconModule } from '@angular2-material/icon';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ],
  providers: []
})
export class NavModule { }
