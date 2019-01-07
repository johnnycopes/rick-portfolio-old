interface Video {
  name: string;
  url: string;
}

export interface Project {
  headline: string;
  title: string;
  thumbnail: string;
  videos?: Video[];
  photos?: string[];
}
