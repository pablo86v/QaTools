import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes }       from '@angular/router';
import { FormsModule } from '@angular/forms';

// servicios
import {JenkinsService} from './services/jenkins.service';
import {FilesService} from './services/files.service';
import {GlobalFunctionsService} from './services/global-functions.service';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SystemTestComponent } from './system-test/system-test.component';
import { JenkinsReportsComponent } from './jenkins-reports/jenkins-reports.component';
import { KeysDataComponent } from './keys-data/keys-data.component';
import { OutputValidationComponent } from './output-validation/output-validation.component';
import { HshPluComponent } from './hsh-plu/hsh-plu.component';

//Ruteo
const appRoutes: Routes = [
  { path: 'hsh'                , component: HshPluComponent },
  { path: 'val'                , component: OutputValidationComponent },
  { path: 'keys'                , component: KeysDataComponent },
  { path: 'jks'                , component: JenkinsReportsComponent },
  { path: 'st'                , component: SystemTestComponent },
  { path: ''                    , redirectTo: '/home', pathMatch: 'full' },
  { path: '**'                  , component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SystemTestComponent,
    JenkinsReportsComponent,
    KeysDataComponent,
    OutputValidationComponent,
    HshPluComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    JenkinsService,
    FilesService,
    GlobalFunctionsService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
