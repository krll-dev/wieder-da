import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatDivider, MatList, MatListItem} from '@angular/material/list';

@Component({
  selector: 'wd-impressum',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    MatList,
    MatListItem
  ],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Impressum {

}
