import { DefaultSession } from "next-auth";

interface AuthUser {
  name: string;
  email: string;
  picture?: string | null;
  image?: string | null;
  accessToken: string;
  sub: string;
  expires_at: number;
}

export interface AuthSession extends Omit<DefaultSession, "user"> {
  user: AuthUser;
}

export interface MyProfile {
  country: "string"; // 국가
  display_name: "string"; //이름
  email: "string";
  followers: {
    href: "string";
    total: 0;
  };
  href: "string";
  id: "string";
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  product: "string"; //구독 종류
  type: "string";
  uri: "string"; // 사용자 스포티파이 url
}

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

export interface Category {
  id: string;
  name: string;
  icons: Image[];
}

export interface Album {
  id: string;
  name: string;
  artists: Artist[];
  images: Image[];
  album_type?: string;
  release_date: string;
  tracks: {
    total: number;
    items: Track[];
  };
}

export interface Artist {
  id: string;
  name: string;
  images: Image[];
  followers?: {
    total: number;
  };
  genres?: string[];
}

export interface Track {
  id: string;
  name: string;
  album: Album;
  artists: Artist[];
  duration_ms: number;
  preview_url: string;
}

export interface Playlist {
  description?: string;
  id: string;
  followers: {
    total: number;
  };
  images: Image[];
  name: string;
  owner: {
    id: string;
    display_name?: string;
  };
  items?: [{ added_at: string; track: Track }];
  tracks: {
    items: [{ added_at: string; track: Track }];
    total: number;
  };
  type: string;
  total?: number;
}

export interface SearchResults {
  albums?: {
    items: Album[];
  };
  artists?: {
    items: Artist[];
  };
  playlists?: {
    items: Playlist[];
  };
  tracks?: {
    items: Track[];
  };
}

export interface TrackAnalysis {
  acousticness: number;
  danceability: number;
  energy: number;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number; //0 | 1
  speechiness: number;
  tempo: number;
  valence: number;
}
