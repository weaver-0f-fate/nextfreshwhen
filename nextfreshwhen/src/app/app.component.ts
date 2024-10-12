import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../modules/header/header.component';
import { TableComponent } from '../modules/timeline/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nextfreshwhen';
}
