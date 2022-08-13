export type TabBar = (string | null)[];

export interface Tab {
  progressions: TabProgression[];
}

export interface TabProgression {
  [stringId: number]: TabBar;
}
