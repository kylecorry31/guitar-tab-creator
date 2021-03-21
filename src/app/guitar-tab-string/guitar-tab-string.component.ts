import { Component, Input, OnInit } from '@angular/core';
import { TabSection } from '../tab-section';

@Component({
  selector: 'app-guitar-tab-string',
  templateUrl: './guitar-tab-string.component.html',
  styleUrls: ['./guitar-tab-string.component.scss'],
})
export class GuitarTabStringComponent implements OnInit {
  @Input() tab: TabSection = [];
  @Input() allowInput: boolean;

  myTab: TabSection;

  constructor() {}

  ngOnInit(): void {
    this.myTab = [...this.tab];
  }

  onFretChange(fretIdx: number, newValue: string | null) {
    let value: number | null = null;
    if (newValue != null && newValue !== '') {
      value = +newValue;
    }

    this.myTab[fretIdx] = value;
  }

  trackByFn(index, item) {
    return index;
  }
}
