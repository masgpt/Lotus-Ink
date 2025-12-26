
export interface Book {
  id: string;
  title: string;
  author: string;
  price: string;
  description: string;
  coverImage: string;
  tag: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Hours {
  day: string;
  time: string;
}
