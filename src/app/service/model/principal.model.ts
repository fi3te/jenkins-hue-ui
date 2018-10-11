import { Authority } from './authority.model';

export interface Principal {
  username: string;
  authorities: Authority[];
  userId: string;
  teamId: number;
}
