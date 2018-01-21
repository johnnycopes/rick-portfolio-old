interface Video {
  name: string;
  url: string;
}

export interface Project {
  id: number;
  headline: string;
  title: string;
  thumbnail: string;
  videos?: Video[];
  photos?: string[];
}
