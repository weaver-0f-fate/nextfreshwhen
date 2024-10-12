import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface TimelineSeason {
  name: string;
  start: Date;
  end: Date;
  description: string;
}

export interface TimelineEvent {
  label: string;
  seasons: TimelineSeason[];
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  timelineStart: Date;
  timelineEnd: Date;
  xAxisDates: Date[] = [];

  timelineData: TimelineEvent[] = [
    {
      label: 'Warmane Onyxia',
      seasons: [
        { 
          name: 'TBC prepatch', 
          start: new Date(Date.UTC(2024, 10, 2, 14, 0)), 
          end: new Date(Date.UTC(2024, 10, 16, 14, 0)), 
          description: 'The Burning Crusade prepatch' 
        },
        { 
          name: 'TBC', 
          start: new Date(Date.UTC(2024, 10, 16, 14, 0)), 
          end: new Date(Date.UTC(2024, 10, 23, 14, 0)), 
          description: 'The Burning Crusade' 
        },
        { 
          name: 'TBC T4', 
          start: new Date(Date.UTC(2024, 10, 23, 14, 0)), 
          end: new Date(Date.UTC(2025, 1, 15, 14, 0)), 
          description: 'The Burning Crusade Tier 4' 
        }
      ]
    },
    {
      label: 'Endless TBC',
      seasons: [
        { 
          name: 'Season 1', 
          start: new Date(Date.UTC(2024, 4, 1, 14, 0)), 
          end: new Date(Date.UTC(2024, 6, 30, 14, 0)), 
          description: 'Season 1' 
        },
        { 
          name: 'Season 2', 
          start: new Date(Date.UTC(2024, 9, 1, 14, 0)), 
          end: new Date(Date.UTC(2025, 0, 31, 14, 0)), 
          description: 'Season 2' 
        }
      ]
    }
  ];

  constructor() {
    // Set the start and end dates for the entire timeline
    this.timelineStart = new Date();
    this.timelineEnd = new Date(this.timelineStart);
    this.timelineEnd.setFullYear(this.timelineEnd.getFullYear() + 1);
    this.timelineEnd.setMonth(this.timelineEnd.getMonth() - 1);
  }

  ngOnInit() {
    this.generateXAxisDates();
    this.filterSeasons();
  }

  generateXAxisDates() {
    const currentDate = new Date(this.timelineStart);
    currentDate.setDate(1); // Ensure we start at the beginning of the month
    while (currentDate <= this.timelineEnd) {
      this.xAxisDates.push(new Date(currentDate));
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  }

  filterSeasons() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to midnight
    this.timelineData = this.timelineData.map(event => ({
      ...event,
      seasons: event.seasons.filter(season => season.start >= today)
    }));
  }

  calculateWidth(season: TimelineSeason): string {
    const totalTimelineDuration = this.getTotalTimelineDuration();
    const seasonDuration = (season.end.getTime() - season.start.getTime()) / (1000 * 3600 * 24);
    const percentage = (seasonDuration / totalTimelineDuration) * 100;
    return `${percentage}%`;
  }

  calculateStart(season: TimelineSeason): string {
    const totalTimelineDuration = this.getTotalTimelineDuration();
    const daysFromStart = (season.start.getTime() - this.timelineStart.getTime()) / (1000 * 3600 * 24);
    const percentage = (daysFromStart / totalTimelineDuration) * 100;
    return `${percentage}%`;
  }

  getTotalTimelineDuration(): number {
    const totalDuration = (this.timelineEnd.getTime() - this.timelineStart.getTime()) / (1000 * 3600 * 24);
    return totalDuration;
  }
}