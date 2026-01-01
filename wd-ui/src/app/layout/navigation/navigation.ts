import {Component} from '@angular/core';
import {MatDivider, MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'wd-navigation',
  imports: [
    MatNavList,
    MatListItem,
    RouterLink,
    MatDivider
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {

}
