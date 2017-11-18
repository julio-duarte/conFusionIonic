import { Comment } from './comment';

export interface Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: string;
    description: string;
    comments: Comment[];
}