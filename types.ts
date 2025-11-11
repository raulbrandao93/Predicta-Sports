
export enum Screen {
  Home = 'Home',
  Predictions = 'Predictions',
  Ranking = 'Ranking',
  Feed = 'Feed',
  Profile = 'Profile',
  Forum = 'Forum',
  Academy = 'Academy',
  Store = 'Store',
}

export interface User {
  name: string;
  country: string;
  favoriteTeam: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
  totalScore: number;
  accuracy: number;
  credits: number;
  avatarUrl: string;
}

export interface Game {
  id: string;
  teamA: string;
  teamB: string;
  teamALogo: string;
  teamBLogo: string;
  time: string;
  championship: string;
  maxPoints: number;
  creditCost: number;
  status: 'upcoming' | 'live' | 'finished';
}

export interface RankingItem {
  rank: number;
  user: User;
  score: number;
  progress: number;
}

export interface FeedPost {
  id: string;
  user: User;
  content: string;
  game?: Game;
  points?: number;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

export enum PredictionMode {
    Quick = 'Quick',
    Full = 'Full',
}
