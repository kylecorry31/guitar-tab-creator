import { Component, Input, OnInit } from '@angular/core';
import { TabBar } from '../tab-bar';

@Component({
  selector: 'app-guitar-tab-string',
  templateUrl: './guitar-tab-string.component.html',
  styleUrls: ['./guitar-tab-string.component.scss'],
})
export class GuitarTabStringComponent implements OnInit {
  @Input() tab: TabBar = [];
  @Input() allowInput: boolean;

  constructor() {}

  ngOnInit(): void {
  }

  onFretChange(fretIdx: number, newValue: string | null) {
    let value: number | null = null;
    if (newValue != null && newValue !== '') {
      value = parseInt(newValue);
    }

    this.tab[fretIdx] = value;
  }

  trackByFn(index, item) {
    return index;
  }
}
