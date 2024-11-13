export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  skills: Skill[];
  photos: string[];
}
