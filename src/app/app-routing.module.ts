import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'index.html', component: HomeComponent},
  { path: '', redirectTo: 'index.html', pathMatch: 'full'},
  { path: 'about.html', component: AboutComponent},
  { path: 'resume.html', component: ResumeComponent },
  { path: 'contact.html', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
