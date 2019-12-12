import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BatchserviceService } from './batchservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import { BatchesComponent } from './batches/batches.component';
import { InvalidpComponent } from './invalidp/invalidp.component';
import { IfelsComponent } from './ifels/ifels.component';
import { NgforrComponent } from './ngforr/ngforr.component';
import { NgswitcComponent } from './ngswitc/ngswitc.component';
import { TwowayComponent } from './twoway/twoway.component';
import { PropertybindComponent } from './propertybind/propertybind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
/*import { AngularFireModule } from 'angularfire2';*/
/*import {AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';*/

/*import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStore } from 'angularfire2/firestore';*/

import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { ServiceEgComponent } from './service-eg/service-eg.component';
import { ServiceEg2Component } from './service-eg2/service-eg2.component';
import { LoginfComponent } from './loginf/loginf.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ChildcComponent } from './childc/childc.component';
import { InbuiltpipComponent } from './inbuiltpip/inbuiltpip.component';
import { CustompipePipe } from './custompipe.pipe';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { AngularFireModule } from '@angular/fire';
import { ReactiveEgComponent } from './reactive-eg/reactive-eg.component';
import { FormbuilderegComponent } from './formbuildereg/formbuildereg.component';
import { ValidegComponent } from './valideg/valideg.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    BatchesComponent,
    InvalidpComponent,
    IfelsComponent,
    NgforrComponent,
    NgswitcComponent,
    TwowayComponent,
    PropertybindComponent,
    EventbindComponent,
    ServiceEgComponent,
    ServiceEg2Component,
    LoginfComponent,
    ChildcomponentComponent,
    ChildcComponent,
    InbuiltpipComponent,
    CustompipePipe,
    BatchdetailsComponent,
    BatchlistComponent,
    ReactiveEgComponent,
    FormbuilderegComponent,
    ValidegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   /* AngularFireModule.initializeApp(environment.firebase)*/
  ],
  providers: [BatchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
