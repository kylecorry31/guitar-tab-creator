import { Component, Input, OnInit } from '@angular/core';
import { TabProgression } from '../tab-section';

@Component({
  selector: 'app-guitar-tab-section',
  templateUrl: './guitar-tab-section.component.html',
  styleUrls: ['./guitar-tab-section.component.scss'],
})
export class GuitarTabSectionComponent implements OnInit {
  @Input() progression: TabProgression;
  @Input() allowInput: boolean;

  constructor() {}

  ngOnInit(): void {}
}
