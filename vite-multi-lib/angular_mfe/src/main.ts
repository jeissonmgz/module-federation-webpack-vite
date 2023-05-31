import '@angular/compiler';
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouting } from './app/app-routing.module';
import {setNavigateShell} from './NavigateShell';

const mount = (navigateShell: (route: string)=> void) => {
  setNavigateShell(navigateShell);
  bootstrapApplication(AppComponent,
    {
      providers: [
        ...appRouting
      ]
    })
    .catch((err) => console.error(err));
};

export { mount };


/*import '@angular/compiler';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const mount = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
};

export { mount };
*/
