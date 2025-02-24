import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { DemoComponentsShareModule } from '../components/demo-components-share/demo-components-share.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { AppComponent } from '../app.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RouterModule } from '@angular/router';
import { AssureComponent } from './assure/assure.component';
import { AssureRoutingModule } from './assure-routing.module';
import { ContratComponent } from './contrat/contrat.component';


@NgModule({
    declarations: [
        AssureComponent,
        ContratComponent,
      
    
      
    ],
    imports: [
      CommonModule,
      SharedModule,
      AssureRoutingModule,
      NzCardModule,
      DemoComponentsShareModule,
      NzCollapseModule,
      NzSkeletonModule,
      NzUploadModule,
      NzSpinModule,
      NzTableModule
    ],
    exports: [
      AssureComponent
    ],
    providers: [
      ThemeConstantService,
      

  ],
  bootstrap: [AppComponent]
  })
  export class AssureModule { }







