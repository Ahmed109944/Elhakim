import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  labels: string[] = [
    '00:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
  ];

  data = [
    {
      label: 'New Patients',
      data: [31, 40, 28, 51, 42, 85, 77],
      borderColor: 'rgba(10, 200, 250, 1)',
      backgroundColor: 'rgba(10, 200, 250, 0.5)',

      tension: 0.4,
      fill: true,
      pointRadius: 0,
      pointHitRadius: 10,
      pointHoverRadius: 0,
    },
    {
      label: 'Old Patients',
      data: [11, 32, 45, 32, 34, 52, 41],
      borderColor: 'rgba(190, 39, 240, 1)',
      backgroundColor: 'rgba(190, 39, 240, 0.5)',

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
}
