import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { MiscComponent } from './pages/misc/misc.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { ProjectComponent } from './components/project/project.component';
import { ClipComponent } from './components/clip/clip.component';

// Services
import { ProjectsService } from './services/projects.service';

// Pipes
import { SafeResourceUrlPipe } from './pipes/safe-resource-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    MiscComponent,
    HeaderComponent,
    ProjectComponent,
    ClipComponent,
    SafeResourceUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
