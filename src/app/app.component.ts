import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild("beatsPerBar", { static: false })
  beatsPerBarSelect: HTMLSelectElement;

  tab: Tab;

  constructor(private title: Title){}

  ngOnInit(): void {
    this.countPerSection = parseInt(this.beatsPerBarSelect?.value || '4');
    this.tab = {
      progressions: [],
    };

    this.addSection();
  }

  titleChanged(text: string){
    this.title.setTitle(text);
  }

  copyPreviousSection(){
    if (this.tab.progressions.length == 0){
      return;
    }
    this.addSection();
    const current = this.tab.progressions[this.tab.progressions.length - 1];
    const previous = this.tab.progressions[this.tab.progressions.length - 2];
    
    for (let i = 0; i < 6; i++){
      current[i] = [...previous[i]];
    }
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
      window.scrollTo(0, document.body.scrollHeight)
    });
  }

  export(){
    const text = JSON.stringify(this.tab);
    const a = document.createElement("a");
    a.download = this.title.getTitle() + ".json";

    const file = new Blob([text], {
      type: "application/json"
    });

    a.href = window.URL.createObjectURL(file);
    a.click();
  }

  import(){
    const input = document.createElement("input");
    input.type = 'file';
    input.click();

    input.addEventListener('change', () => {
      const reader = new FileReader();
      reader.onload = () => {
          this.tab = JSON.parse(reader.result as string);
      };
      reader.readAsText(input.files[0]);
    });
  }

  print(){
    this.allowInput = false;
    setTimeout(() => {
      window.print();
      this.allowInput = true;
    });
  }

  changeBeat(value: string){
    const backfill = confirm('Apply to existing bars?');
    this.countPerSection = parseInt(value) || 4;

    if (backfill){
      this.tab.progressions.forEach(bar => {
        Object.keys(bar).forEach(string => {
          const stringBar = bar[string];
          this.changeBeatForBar(stringBar, this.countPerSection);
        });
      })
    }
  }

  private changeBeatForBar(bar: TabBar, newBeat: number) {
    if (bar.length == newBeat){
      return;
    }

    if (bar.length == 4 && newBeat == 8){
      const newBar = [bar[0], null, bar[1], null, bar[2], null, bar[3], null];
      bar.push(null);
      bar.push(null);
      bar.push(null);
      bar.push(null);
      for (let i in newBar){
        bar[i] = newBar[i];
      }
    }

    if (bar.length == 8 && newBeat == 4){
      const newBar = [bar[0], bar[2], bar[4], bar[6]];
      bar.pop();
      bar.pop();
      bar.pop();
      bar.pop();
      for (let i in newBar){
        bar[i] = newBar[i];
      }
    }

  }

}
