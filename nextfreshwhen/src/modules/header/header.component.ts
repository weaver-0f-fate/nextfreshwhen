import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { octMarkGithub } from '@ng-icons/octicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTooltipModule, NgIconComponent],
  providers: [provideIcons({ octMarkGithub })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}