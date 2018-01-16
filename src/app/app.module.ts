import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { MiscComponent } from './pages/misc/misc.component';
import { ProjectComponent } from './pages/project/project.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { ProjectTileComponent } from './components/project-tile/project-tile.component';

// Services
import { ProjectService } from './services/project.service';
import { MiscService } from './services/misc.service';

// Pipes
import { SafeResourceUrlPipe } from './pipes/safe-resource-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    MiscComponent,
    ProjectComponent,
    HeaderComponent,
    ProjectTileComponent,
    SafeResourceUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ ProjectService, MiscService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
