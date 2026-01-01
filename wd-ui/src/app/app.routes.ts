import {Routes} from '@angular/router';
import {Dashboard} from './pages/dashboard/dashboard';
import {Fundstuecke} from './pages/fundstuecke/fundstuecke';
import {Verlustmeldungen} from './pages/verlustmeldungen/verlustmeldungen';
import {Matching} from './pages/matching/matching';
import {Status} from './pages/status/status';
import {Statistik} from './pages/statistik/statistik';
import {Admin} from './pages/admin/admin';
import {Impressum} from './pages/impressum/impressum';
import {Kontakt} from './pages/kontakt/kontakt';
import {Datenschutz} from './pages/datenschutz/datenschutz';
import {Hilfe} from './pages/hilfe/hilfe';

export const routes: Routes = [
  {path: '', component: Dashboard},
  {path: 'fundstuecke', component: Fundstuecke},
  {path: 'verlustmeldungen', component: Verlustmeldungen},
  {path: 'matching', component: Matching},
  {path: 'status', component: Status},
  {path: 'statistik', component: Statistik},
  {path: 'admin', component: Admin},

  {path: 'impressum', component: Impressum},
  {path: 'kontakt', component: Kontakt},
  {path: 'datenschutz', component: Datenschutz},
  {path: 'hilfe', component: Hilfe},
];
