import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/list';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'wd-kontakt',
  imports: [
    MatCard,
    MatCardHeader,
    MatIcon,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatDivider,
    MatButton
  ],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Kontakt {

}
