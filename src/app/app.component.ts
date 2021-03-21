import { Component, OnInit } from '@angular/core';
import { Tab, TabProgression, TabSection } from './tab-section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countPerSection = 4;
  allowInput = true;

  tab: Tab;

  ngOnInit(): void {
    this.countPerSection = +prompt('Count per section', '4') || 4;
    this.tab = {
      progressions: [],
    };

    this.addSection();
  }

  addSection() {
    const progression: TabProgression = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
    };

    for (let fret = 0; fret < this.countPerSection; fret++) {
      progression[0].push(null);
      progression[1].push(null);
      progression[2].push(null);
      progression[3].push(null);
      progression[4].push(null);
      progression[5].push(null);
    }
    this.tab.progressions.push(progression);
  }
}
