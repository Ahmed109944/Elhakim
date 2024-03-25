import { Component } from '@angular/core';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { MeddileWidgetsComponent } from './meddile-widgets/meddile-widgets.component';
import { LastWidgetComponent } from './last-widget/last-widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TopWidgetsComponent, MeddileWidgetsComponent, LastWidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
