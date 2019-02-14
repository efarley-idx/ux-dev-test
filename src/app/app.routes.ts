import { Routes } from '@angular/router';
import { FourOhFourComponent } from './modules/four-oh-four/four-oh-four.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import {CustomerDirectoryComponent} from './modules/customer-directory/customer-directory.component';

export const routes: Routes = [{
  path: '404',
  component: FourOhFourComponent
}, {
  path: 'customer-directory',
  component: CustomerDirectoryComponent
}, {
  path: '',
  component: WelcomeComponent
}, {
  path: '**',
  redirectTo: '404'
}];
