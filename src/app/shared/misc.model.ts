interface Website {
  name: string;
  url: string;
}

interface Song {
  name: string;
  artist: string;
  url: string;
}

interface Instagram {
  user: string;
  url: string;
}

export interface Misc {
  websites: Website[];
  songs: Song[];
  instagrams: Instagram[];
}
