export interface IMovie {
  _id: number;
  title: string;
  director: string;
  duration: number;
  price: number;
  description: string;
  featured: boolean;
  img: string
}

export interface IUser {
  firstName: string | null;
  lastName: string | null;
  id: number;
  email: string | null;
  password: string | null;
}
