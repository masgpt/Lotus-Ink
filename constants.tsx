
import { Book, TeamMember, Hours } from './types';

export const STORE_NAME = "Lotus & Ink";
export const ADDRESS = "123 Onizuka Plaza, Los Angeles, CA 90012";
export const EMAIL_SALES = "sales@lotusandink.com";
export const EMAIL_INFO = "info@lotusandink.com";

export const FEATURED_BOOKS: Book[] = [
  {
    id: '1',
    title: 'On Earth We\'re Briefly Gorgeous',
    author: 'Ocean Vuong',
    price: '$12.00',
    tag: 'Bestseller',
    description: 'A powerful letter from a son to a mother who cannot read.',
    coverImage: 'https://picsum.photos/seed/ocean/400/600'
  },
  {
    id: '2',
    title: 'The Sympathizer',
    author: 'Viet Thanh Nguyen',
    price: '$10.50',
    tag: 'Pulitzer Winner',
    description: 'A gripping spy novel and an exploration of identity and love.',
    coverImage: 'https://picsum.photos/seed/viet/400/600'
  },
  {
    id: '3',
    title: 'Crying in H Mart',
    author: 'Michelle Zauner',
    price: '$14.00',
    tag: 'Memoir',
    description: 'An unflinching, powerful memoir about growing up Korean American.',
    coverImage: 'https://picsum.photos/seed/mart/400/600'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Mei Chen',
    role: 'Founder & Head Curator',
    bio: 'Mei started Lotus & Ink to preserve the voices of the diaspora through tangible paper and ink.',
    imageUrl: 'https://picsum.photos/seed/mei/400/400'
  },
  {
    id: 't2',
    name: 'Siddharth Rao',
    role: 'Community Outreach',
    bio: 'Sid manages our monthly reading groups and local author events in Little Tokyo.',
    imageUrl: 'https://picsum.photos/seed/sid/400/400'
  },
  {
    id: 't3',
    name: 'Hana Tanaka',
    role: 'Rare Books Specialist',
    bio: 'Hana tracks down out-of-print first editions by early Asian American pioneers.',
    imageUrl: 'https://picsum.photos/seed/hana/400/400'
  }
];

export const STORE_HOURS: Hours[] = [
  { day: 'Monday - Thursday', time: '10:00 AM - 7:00 PM' },
  { day: 'Friday - Saturday', time: '10:00 AM - 9:00 PM' },
  { day: 'Sunday', time: '11:00 AM - 6:00 PM' }
];
