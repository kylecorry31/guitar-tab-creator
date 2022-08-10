import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tab, TabProgression, TabBar } from './tab-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countPerSection = 4;
  allowInput = true;

  tab: Tab;

  constructor(private title: Title){}

  ngOnInit(): void {
    this.countPerSection = +prompt('Beats per bar', '4') || 4;
    this.tab = {
      progressions: [],
    };

    this.addSection();
  }

  titleChanged(text: string){
    this.title.setTitle(text);
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

    setTimeout(() => {
      window.scrollTo(0, window.innerHeight)
    });
  }

  print(){
    this.allowInput = false;
    setTimeout(() => {
      window.print();
      this.allowInput = true;
    });
  }
}
