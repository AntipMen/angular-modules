import {NgModule} from '@angular/core';
import {AboutPageComponent} from './about-page.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AboutPageComponent, children: [
          {path: 'extra', component: AboutExtraComponent}
        ]}
    ])
  ],
  exports: [RouterModule]
})
export class AboutPageModule {

}
