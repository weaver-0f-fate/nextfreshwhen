import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { octMarkGithub } from '@ng-icons/octicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTooltipModule, NgIconComponent, MatToolbarModule],
  providers: [provideIcons({ octMarkGithub })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}