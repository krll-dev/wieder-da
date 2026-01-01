import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'wd-header',
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
