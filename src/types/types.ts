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

export interface TrackFeatures {
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

export interface TrackAnalysis {
  meta: {
    analyzer_version: string;
    platform: string;
    detailed_status: string;
    status_code: number;
    timestamp: number;
    analysis_time: number; //분석하는데 걸린 시간
    input_process: string;
  };
  track: {
    num_samples: number;
    duration: number;
    sample_md5: string;
    offset_seconds: number;
    window_seconds: number;
    analysis_sample_rate: number;
    analysis_channels: number;
    end_of_fade_in: number;
    start_of_fade_out: number;
    loudness: number; // 소리 크기
    tempo: number; // 분당 비트수(BPM)
    tempo_confidence: number;
    time_signature: number;
    time_signature_confidence: number;
    key: number;
    key_confidence: number;
    mode: number;
    mode_confidence: number;
    codestring: string;
    code_version: number;
    echoprintstring: string;
    echoprint_version: number;
    synchstring: string;
    synch_version: number;
    rhythmstring: string;
    rhythm_version: number;
  };
  bars: [
    {
      start: number;
      duration: number;
      confidence: number;
    }
  ];
  beats: [
    {
      start: number;
      duration: number;
      confidence: number;
    }
  ];
  sections: [
    {
      start: number;
      duration: number;
      confidence: number;
      loudness: number; //소리크기
      tempo: number;
      tempo_confidence: number;
      key: number;
      key_confidence: number;
      mode: number;
      mode_confidence: number;
      time_signature: number;
      time_signature_confidence: number;
    }
  ];
  segments: [
    {
      start: number;
      duration: number;
      confidence: number;
      loudness_start: number;
      loudness_max: number;
      loudness_max_time: number;
      loudness_end: number;
      pitches: number[];
      timbre: number[];
    }
  ];
  tatums: [
    {
      start: number;
      duration: number;
      confidence: number;
    }
  ];
}
