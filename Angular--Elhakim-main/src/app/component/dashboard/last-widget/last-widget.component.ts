import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-last-widget',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './last-widget.component.html',
  styleUrl: './last-widget.component.scss',
})
export class LastWidgetComponent {
  dateNow = new Date();
}
