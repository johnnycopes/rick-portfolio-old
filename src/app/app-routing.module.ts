import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { AboutComponent } from './pages/about/about.component';
import { MiscComponent } from './pages/misc/misc.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: 'work/:id', component: ProjectComponent, data: { page: 'project'} },
  { path: 'work', component: WorkComponent, data: { page: 'work'} },
  { path: 'about', component: AboutComponent, data: { page: 'about'} },
  { path: 'misc', component: MiscComponent, data: { page: 'misc'} },
  { path: '', component: HomeComponent, data: { page: 'home'} },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // wildcard route (default/no match)
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
