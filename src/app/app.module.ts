import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollegeComponent } from './college/college.component';
import { AcadmecisComponent } from './acadmecis/acadmecis.component';
import { StaffComponent } from './staff/staff.component';
import { ResearchComponent } from './research/research.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { LmsComponent } from './lms/lms.component';
import { CovidComponent } from './covid/covid.component';
import { EResourcesComponent } from './e-resources/e-resources.component';
import { ContactComponent } from './contact/contact.component';
import { PhotosComponent } from './photos/photos.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutloyolaComponent } from './college/aboutloyola/aboutloyola.component';
import { PrincipalmessageComponent } from './college/principalmessage/principalmessage.component';
import { OriginandhistoryComponent } from './college/originandhistory/originandhistory.component';
import { IntermediateComponent } from './acadmecis/intermediate/intermediate.component';
import { DegreeComponent } from './acadmecis/degree/degree.component';
import { PostgraduateComponent } from './acadmecis/postgraduate/postgraduate.component';
import { ResearchinfoComponent } from './research/researchinfo/researchinfo.component';
import { ResearchcommitteeComponent } from './research/researchcommittee/researchcommittee.component';
import { NewpaperclipingsComponent } from './photos/newpaperclipings/newpaperclipings.component';
import { PhotogalleryComponent } from './photos/photogallery/photogallery.component';
import { WikilinksComponent } from './e-resources/wikilinks/wikilinks.component';
import { EcontentbyfacultyComponent } from './e-resources/econtentbyfaculty/econtentbyfaculty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollegeComponent,
    AcadmecisComponent,
    StaffComponent,
    ResearchComponent,
    AdmissionsComponent,
    LmsComponent,
    CovidComponent,
    EResourcesComponent,
    ContactComponent,
    PhotosComponent,
    SigninComponent,
    SignupComponent,
    AboutloyolaComponent,
    PrincipalmessageComponent,
    OriginandhistoryComponent,
    IntermediateComponent,
    DegreeComponent,
    PostgraduateComponent,
    ResearchinfoComponent,
    ResearchcommitteeComponent,
    NewpaperclipingsComponent,
    PhotogalleryComponent,
    WikilinksComponent,
    EcontentbyfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
