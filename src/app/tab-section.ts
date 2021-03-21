export type TabSection = (number | null)[];

export interface Tab {
  progressions: TabProgression[];
}

export interface TabProgression {
  [stringId: number]: TabSection;
}
