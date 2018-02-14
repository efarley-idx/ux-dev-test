import { Routes } from '@angular/router';
import { FourOhFourComponent } from './modules/four-oh-four/four-oh-four.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';

export const routes: Routes = [{
  path: '404',
  component: FourOhFourComponent
}, {
  path: '',
  component: WelcomeComponent
}, {
  path: '**',
  redirectTo: '404'
}];
