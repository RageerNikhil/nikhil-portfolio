import {Routes} from '@angular/router';
import {Home} from './home';
import {About} from './about';
import {Solutions} from './solutions';
import {Contact} from './contact';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'solutions', component: Solutions},
  {path: 'contact', component: Contact},
  {path: '**', redirectTo: 'home'}
];
