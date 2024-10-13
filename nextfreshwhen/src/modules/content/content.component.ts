import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../timeline/table/table.component';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    TableComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
