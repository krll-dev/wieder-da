import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle,} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {MatList, MatListItem} from '@angular/material/list';

@Component({
  selector: 'wd-datenschutz',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatDivider,
    MatList,
    MatListItem,
  ],
  templateUrl: './datenschutz.html',
  styleUrl: './datenschutz.scss',
})
export class Datenschutz {
}
