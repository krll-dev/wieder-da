import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import {MatButton} from '@angular/material/button';
import {MatList, MatListItem, MatListItemIcon, MatListItemLine, MatListItemTitle,} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'wd-hilfe',
  imports: [
    RouterLink,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButton,
    MatList,
    MatListItem,
    MatListItemIcon,
    MatListItemLine,
    MatListItemTitle,
    MatIcon,
  ],
  templateUrl: './hilfe.html',
  styleUrl: './hilfe.scss',
})
export class Hilfe {
}
