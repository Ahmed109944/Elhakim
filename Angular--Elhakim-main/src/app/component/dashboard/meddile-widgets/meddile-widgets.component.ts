import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-meddile-widgets',
  standalone: true,
  imports: [NgChartsModule, CommonModule, NzIconModule],
  templateUrl: './meddile-widgets.component.html',
  styleUrl: './meddile-widgets.component.scss',
})
export class MeddileWidgetsComponent {
  labels: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  data = [
    {
      label: 'New Patients',
      data: [10, 12, 15, 11, 9, 20, 9, 14, 17],
      borderColor: 'gray',
      backgroundColor: 'rgba(151, 150, 150, 0.686)',

      tension: 0.4,
      fill: true,
      pointRadius: 0,
      pointHitRadius: 10,
      pointHoverRadius: 0,
    },
    {
      label: 'Old Patients',
      data: [19, 20, 18, 16, 14, 18, 17, 21, 20],
      borderColor: 'blue',
      backgroundColor: 'rgba(74, 108, 142, 0.519)',

      tension: 0.4,
      yAxisID: 'old',
      fill: true,
      pointRadius: 0,
      pointHitRadius: 10,
      pointHoverRadius: 0,
    },
  ];
  chartOptions = {
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      axis: 'x' as const,
    },

    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        border: {
          display: false,
          dash: [1, 1],

          dashOffSet: 1,
        },

        grid: {
          tickBorderDash: [1, 1],
        },
      },
      y: {
        beginAtZero: true,
        border: {
          display: false,
          dash: [1, 1],

          dashOffSet: 1,
        },

        grid: {
          tickBorderDash: [1, 1],
        },
      },
      old: {
        beginAtZero: true,
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          tickBorderDash: [1, 1],
        },
      },
    },
  };

  labelsDisease: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  dataDisease = [
    {
      label: 'fever',
      data: [10, 12, 15, 11, 9, 20, 9, 14, 17],
      borderColor: 'gray',
      backgroundColor: 'rgba(151, 150, 150, 0.686)',

      barPercentage: 0.9,
      barThickness: 15,
    },

    {
      label: 'colds and flu',
      data: [9, 10, 7, 6, 14, 1, 8, 2, 0],
      borderColor: 'blue',
      backgroundColor: 'blue',
      barThickness: 15,
      barPercentage: 0.9,
    },
    {
      label: 'enruj',
      data: [19, 20, 18, 16, 14, 18, 17, 21, 20],
      borderColor: 'yellow',
      backgroundColor: 'yellow',
      barThickness: 15,
      barPercentage: 0.9,
    },
  ];
  chartOptionsDisease = {
    maintainAspectRatio: false,
    interaction: {
      mode: 'point' as const,
      axis: 'x' as const,
    },

    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        border: {
          display: false,
          dash: [1, 1],

          dashOffSet: 1,
        },

        grid: {
          tickBorderDash: [1, 1],
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        border: {
          display: false,
          dash: [1, 1],

          dashOffSet: 1,
        },

        grid: {
          tickBorderDash: [1, 1],
        },
      },
    },
  };
  dateNow = new Date();
  constructor() {}
}
