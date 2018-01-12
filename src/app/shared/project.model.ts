interface Clip {
  name: string;
  url: string;
}

export interface Project {
  id: number;
  headline: string;
  title: string;
  path: string;
  clips: Clip[];
}
