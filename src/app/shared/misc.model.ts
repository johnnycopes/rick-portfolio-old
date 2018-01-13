export interface Website {
  name: string;
  url: string;
}

export interface Song {
  name: string;
  artist: string;
  url: string;
}

export interface Instagram {
  user: string;
  url: string;
}

export interface Misc {
  websites: Website[];
  songs: Song[];
  instagrams: Instagram[];
}
