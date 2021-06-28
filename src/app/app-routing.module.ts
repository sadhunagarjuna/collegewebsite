import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcadmecisComponent } from './acadmecis/acadmecis.component';
import { DegreeComponent } from './acadmecis/degree/degree.component';
import { IntermediateComponent } from './acadmecis/intermediate/intermediate.component';
import { PostgraduateComponent } from './acadmecis/postgraduate/postgraduate.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AboutloyolaComponent } from './college/aboutloyola/aboutloyola.component';
import { CollegeComponent } from './college/college.component';
import { OriginandhistoryComponent } from './college/originandhistory/originandhistory.component';
import { PrincipalmessageComponent } from './college/principalmessage/principalmessage.component';
import { ContactComponent } from './contact/contact.component';
import { CovidComponent } from './covid/covid.component';
import { EResourcesComponent } from './e-resources/e-resources.component';
import { EcontentbyfacultyComponent } from './e-resources/econtentbyfaculty/econtentbyfaculty.component';
import { WikilinksComponent } from './e-resources/wikilinks/wikilinks.component';
import { HomeComponent } from './home/home.component';
import { LmsComponent } from './lms/lms.component';
import { NewpaperclipingsComponent } from './photos/newpaperclipings/newpaperclipings.component';
import { PhotogalleryComponent } from './photos/photogallery/photogallery.component';
import { PhotosComponent } from './photos/photos.component';
import { ResearchComponent } from './research/research.component';
import { ResearchcommitteeComponent } from './research/researchcommittee/researchcommittee.component';
import { ResearchinfoComponent } from './research/researchinfo/researchinfo.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'college',component:CollegeComponent,children:[
    {path:'aboutloyola',component:AboutloyolaComponent},
  {path:'principalmessage',component:PrincipalmessageComponent},
{path:'originandhistory',component:OriginandhistoryComponent}]},
  {path:'acadmecis',component:AcadmecisComponent,children:[{path:'intermediate',component:IntermediateComponent},
{path:'degree',component:DegreeComponent},{path:'postgraduate',component:PostgraduateComponent}]},
  {path:'staff',component:StaffComponent},
  {path:'research',component:ResearchComponent,children:[{path:'researchinfo',component:ResearchinfoComponent},
{path:'researchcommittee',component:ResearchcommitteeComponent}]},
  {path:'admissions',component:AdmissionsComponent},
  {path:'lms',component:LmsComponent},
  {path:'covid',component:CovidComponent},
  {path:'photos',component:PhotosComponent,children:[{path:'newspaperclipings',component:NewpaperclipingsComponent},
{path:'photogallery',component:PhotogalleryComponent}]},
  {path:'contact',component:ContactComponent},
  {path:'e-resources',component:EResourcesComponent,children:[{path:'wikilinks',component:WikilinksComponent},
{path:'econtentbyfaculty',component:EcontentbyfacultyComponent}]},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
