import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Tab, TabBar } from '../tab-bar';

@Component({
  selector: 'app-guitar-tab',
  templateUrl: './guitar-tab.component.html',
  styleUrls: ['./guitar-tab.component.scss'],
})
export class GuitarTabComponent implements OnInit, OnChanges {
  @Input() tab: Tab;
  @Input() sectionsPerLine = 3;
  @Input() allowInput: boolean;

  @Output() addSection = new EventEmitter();
  @Output() copyPreviousSection = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['tab'] || changes['sectionsPerLine']) {
    //   this.lines = this.splitIntoLines(this.tab);
    // }
  }

  ngOnInit(): void {
    // this.lines = this.splitIntoLines(this.tab);
  }
}
