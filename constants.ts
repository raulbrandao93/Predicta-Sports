
import { User, Game, RankingItem, FeedPost } from './types';

export const COLORS = {
  emerald: '#10B981',
  blue: '#1E40AF',
  orange: '#F59E0B',
  darkBg: '#0F172A',
  lightBg: '#1E293B',
};

export const mockUser: User = {
  name: 'Alex Silva',
  country: 'Brazil',
  favoriteTeam: 'Flamengo',
  level: 'Gold',
  totalScore: 12540,
  accuracy: 78.5,
  credits: 150,
  avatarUrl: 'https://picsum.photos/seed/alex/100/100',
};

export const mockGames: Game[] = [
  { id: '1', teamA: 'Flamengo', teamB: 'Palmeiras', teamALogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png', teamBLogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/7sp_mo-YoIcH2htTTi63pw_48x48.png', time: '21:30', championship: 'Brasileirão', maxPoints: 100, creditCost: 20, status: 'live' },
  { id: '2', teamA: 'Corinthians', teamB: 'São Paulo', teamALogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png', teamBLogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/VHdNOT6_2QO9esR-o-3CFw_48x48.png', time: '19:00', championship: 'Brasileirão', maxPoints: 40, creditCost: 10, status: 'upcoming' },
  { id: '3', teamA: 'Man City', teamB: 'Liverpool', teamALogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPzggilDQ_48x48.png', teamBLogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/0iZm6OOF1g_D5t3iPvA9qQ_48x48.png', time: '16:00', championship: 'Premier League', maxPoints: 100, creditCost: 20, status: 'upcoming' },
  { id: '4', teamA: 'Real Madrid', teamB: 'Barcelona', teamALogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7vAw_48x48.png', teamBLogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png', time: '22:00', championship: 'La Liga', maxPoints: 100, creditCost: 20, status: 'finished' },
];

export const mockRanking: RankingItem[] = [
  { rank: 1, user: { ...mockUser, name: 'Carlos Dias', avatarUrl: 'https://picsum.photos/seed/carlos/100/100' }, score: 890, progress: 95 },
  { rank: 2, user: { ...mockUser, name: 'Julia Reis', avatarUrl: 'https://picsum.photos/seed/julia/100/100' }, score: 850, progress: 90 },
  { rank: 3, user: { ...mockUser, name: 'Bruno Alves', avatarUrl: 'https://picsum.photos/seed/bruno/100/100' }, score: 810, progress: 85 },
  { rank: 4, user: { ...mockUser, name: 'Alex Silva', avatarUrl: 'https://picsum.photos/seed/alex/100/100' }, score: 795, progress: 82 },
  { rank: 5, user: { ...mockUser, name: 'Fernanda Lima', avatarUrl: 'https://picsum.photos/seed/fernanda/100/100' }, score: 750, progress: 78 },
];

export const mockAiSuggestions: Game[] = [
    mockGames[2], mockGames[3]
];

export const mockFeed: FeedPost[] = [
    { id: 'f1', user: mockRanking[0].user, content: 'apostou em Flamengo x Palmeiras', game: mockGames[0], points: 87, likes: 120, comments: 15, shares: 5, timestamp: '2h ago' },
    { id: 'f2', user: mockRanking[1].user, content: 'criou um tópico no Fórum', likes: 50, comments: 8, shares: 2, timestamp: '5h ago' },
    { id: 'f3', user: mockRanking[2].user, content: 'alcançou o nível Diamante!', likes: 250, comments: 32, shares: 10, timestamp: '1d ago' },
];
