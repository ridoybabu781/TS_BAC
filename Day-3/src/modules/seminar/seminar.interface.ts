export interface ISeminar {
  id?: number;
  speaker: string;
  title: string;
  date?: string; // YYYY-MM-DD
  time?: string; // HH:mm
  image?: string;
}
