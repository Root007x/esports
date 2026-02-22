/** Inner Peace Esports - shared types */

export interface Game {
  name: string;
  status: "Primary" | "Casual";
  rank: string;
  color: string;
  icon: string;
}

export interface PlayerStats {
  kd: string;
  hs: string;
  winRate: string;
}

export interface PlayerSocial {
  twitter?: string;
  twitch?: string;
  youtube?: string;
}

export interface RosterMember {
  id: number;
  username: string;
  realName: string;
  role: string;
  game: string;
  rank: string;
  country: string;
  bio: string;
  agents?: string[];
  stats: PlayerStats;
  social: PlayerSocial;
  avatar: string;
  isCaptain: boolean;
}

export interface Match {
  id: number;
  opponent: string;
  game: string;
  result: "WIN" | "LOSS";
  score: string;
  map: string;
  date: string;
  tournament: string;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  game: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface TeamData {
  name: string;
  tagline: string;
  founded: string;
  region: string;
  discord: string;
  twitter: string;
  instagram: string;
  youtube: string;
  facebook: string;
  email: string;
  games: Game[];
  stats: StatItem[];
  roster: RosterMember[];
  matches: Match[];
  achievements: Achievement[];
}

export type GameFilter = "All" | "Valorant" | "CS2";
