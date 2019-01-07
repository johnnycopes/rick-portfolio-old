export interface Website {
  name: string;
  url: string;
}

export interface Song {
  name: string;
  artist: string;
  youtubeID: string;
}

export type Instagram = string;

export interface Misc {
  websites: Website[];
  songs: Song[];
  instagrams: Instagram[];
}
