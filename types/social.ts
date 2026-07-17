export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  icon: string;
  stats?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
