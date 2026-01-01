import {Component, signal} from '@angular/core';
import {Shell} from './layout/shell/shell';

@Component({
  selector: 'wd-root',
  imports: [Shell],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wd-ui');
}
