import '@angular/compiler';
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouting } from './app/app-routing.module';

bootstrapApplication(AppComponent, { providers: [...appRouting] });
