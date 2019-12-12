import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  /*routr pakge is not part of angular core..
it has its own pakg */

import { BatchesComponent } from './batches/batches.component';

import { SubjectComponent } from './subject/subject.component';

import { InvalidpComponent } from './invalidp/invalidp.component';
import { IfelsComponent } from './ifels/ifels.component';
import { NgforrComponent } from './ngforr/ngforr.component';
import { NgswitcComponent } from './ngswitc/ngswitc.component';

import { EventbindComponent } from './eventbind/eventbind.component';

import { TwowayComponent } from './twoway/twoway.component';

import { PropertybindComponent } from './propertybind/propertybind.component';
import { ServiceEg2Component } from './service-eg2/service-eg2.component';
import { ServiceEgComponent } from './service-eg/service-eg.component';
import { InbuiltpipComponent } from './inbuiltpip/inbuiltpip.component';


const routes: Routes = [
  { path : 'batches', component:BatchesComponent }, /*goes to batches page*/
    
  { path : 'subject', component:SubjectComponent },  /*goes to subject page*/

  { path : '', component:BatchesComponent},  /*default page*/

  { path : 'ifels', component:IfelsComponent},

  { path : 'ngforr', component:NgforrComponent},

  { path : 'ngswitc', component:NgswitcComponent},

  { path : 'eventbind', component:EventbindComponent},

  { path : 'twoway', component:TwowayComponent},

  { path : 'propertybind', component:PropertybindComponent},

  { path : 'service-eg', component:ServiceEgComponent},

  { path : 'service-eg2', component:ServiceEg2Component},
   
  { path : 'inbuiltpip', component:InbuiltpipComponent},
  
 { path : '**', component:InvalidpComponent}  /*when user enters invalid component then ut by defualt goes to this page*/
];

@NgModule({  /*NgModules configure the injector and the compiler and help organize related things together*/

  imports: [RouterModule.forRoot(routes)],  /*it configures the specific path*/
  exports: [RouterModule]
})
export class AppRoutingModule { }
