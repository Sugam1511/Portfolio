import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesService } from './Services/courses.service';
import { HollowComponent } from './hollow/hollow.component';
import { FooterComponent } from './footer/footer.component';
import { InformationComponent } from './information/information.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ProjectComponent } from './projects/project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FullComponent } from './full/full.component';


const appRoute : Routes=[
  {path:'', redirectTo:'Home', pathMatch:'full'},
  // {path:'', component:HomeComponent},
  {path:'Home', component:HeaderComponent},
  {path:'About',component:AboutComponent},
  {path:'Work', component:InformationComponent},
  {path:'Skills', component:HollowComponent},
  {path:'Education', component:ContainerComponent},
  {path:'pp', component :ProjectsComponent},
  {path:'Contact', component:ContactComponent},
  {path:'projects/project/:id', component :ProjectComponent},
  {path:'**', component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    HollowComponent,
    FooterComponent,
    InformationComponent,
    ProjectsComponent,
    ErrorComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
