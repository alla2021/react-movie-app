import {IMovie, IUser} from '../types'

export interface RootState{
  movies: IMovie[];
  users: IUser[];
}