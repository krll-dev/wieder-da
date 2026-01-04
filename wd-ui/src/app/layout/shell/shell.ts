import {Component} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {Navigation} from '../navigation/navigation';
import {Header} from '../header/header';
import {Main} from '../main/main';

@Component({
  selector: 'wd-shell',
  imports: [
    MatSidenavContainer,
    MatSidenav,
    Navigation,
    MatSidenavContent,
    Header,
    Main
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {

}
