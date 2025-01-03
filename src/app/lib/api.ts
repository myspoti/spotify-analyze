import { GenreType, RecommendationsResponseType } from "@/types/recommend";
import {
  Album,
  Artist,
  AuthSession,
  Category,
  MyProfile,
  Playlist,
  Track,
  TrackAnalysis,
  TrackFeatures,
} from "@/types/types";
import { customGet } from "@/util/serverUtils";

export const getMyProfile = async ({
  session,
}: {
  session: AuthSession;
}): Promise<MyProfile> => {
  return customGet("https://api.spotify.com/v1/me", session).then(
    (data) => data
  );
};

export const getNewReleases = async (
  session: AuthSession
): Promise<Album[]> => {
  return customGet(
    "https://api.spotify.com/v1/browse/new-releases?country=IN&limit=15",
    session
  ).then((data) => data.albums.items);
};

export const getRecentlyPlayedTracks = async (
  session: AuthSession,
  limit = 50
) => {
  return customGet(
    `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
    session
  );
};

export const getTopItems = async ({
  session,
  timeRange = "short_term",
  limit = 50,
  type,
}: {
  session: AuthSession;
  timeRange?: string;
  limit?: number;
  type: "artists" | "tracks";
}) => {
  return customGet(
    `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}`,
    session
  ).then(data => data.items);
};

export const getAlbumById = async (
  session: AuthSession,
  albumId: string
): Promise<Album> => {
  return customGet(`https://api.spotify.com/v1/albums/${albumId}`, session);
};

export const getArtistById = async (
  session: AuthSession,
  artistId: string
): Promise<Artist> => {
  return customGet(`https://api.spotify.com/v1/artists/${artistId}`, session);
};

export const getArtistDiscography = async (
  session: AuthSession,
  artistId: string
) => {
  const baseUrl = `https://api.spotify.com/v1/artists/${artistId}`;

  const urls = [
    "",
    "/top-tracks?market=from_token",
    "/albums?include_groups=album",
    "/albums?include_groups=single",
    "/albums?include_groups=appears_on",
    "/albums?include_groups=compilation",
    "/related-artists",
  ];

  const promises = urls.map((url) => customGet(`${baseUrl}${url}`, session));
  return Promise.all(promises);
};

export const getCategoryById = async (
  session: AuthSession,
  categoryId: string
): Promise<Category> => {
  return customGet(
    `https://api.spotify.com/v1/browse/categories/${categoryId}`,
    session
  );
};

export const getPlaylistsByCategory = async (
  session: AuthSession,
  categoryId: string
): Promise<Playlist[]> => {
  const data = await customGet(
    `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?country=IN&limit=50`,
    session
  );
  return data.playlists.items;
};

export const getUserLikedAlbums = async (
  session: AuthSession
): Promise<Album[]> => {
  const data = await customGet(
    `https://api.spotify.com/v1/me/albums?market=from_token&limit=50`,
    session
  );
  return data.items.map((item: any) => item.album);
};

export const getUserLikedArtists = async (
  session: AuthSession
): Promise<Artist[]> => {
  const data = await customGet(
    `https://api.spotify.com/v1/me/following?type=artist&limit=50`,
    session
  );
  return data.artists.items;
};

type LikedSongs = { total: number; items: Track[] };

export const getUserLikedSongs = async (
  session: AuthSession
): Promise<LikedSongs> => {
  const data = await customGet(
    `https://api.spotify.com/v1/me/tracks?limit=50`,
    session
  );

  const finalData = { total: data.total, items: data.items };
  let limit = 50;
  let currUrl = data.next;

  while (currUrl !== null) {
    const nextData = await customGet(currUrl, session);
    finalData.items.push(...nextData.items);
    limit += 50;
    currUrl = nextData.next;
  }

  return {
    total: data.total,
    items: data.items.map((item: any) => item.track),
  };
};

export const getUserLikedPlaylists = async (
  session: AuthSession
): Promise<Playlist[]> => {
  const data = await customGet(
    "https://api.spotify.com/v1/me/playlists",
    session
  );
  return data.items;
};

export const getPlaylistById = async (
  session: AuthSession,
  playlistId: string
): Promise<Playlist> => {
  const data = await customGet(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    session
  );
  const playlist = data;

  let limit = 50;
  let currUrl = data.tracks.next;

  while (currUrl !== null) {
    const nextData = await customGet(currUrl, session);
    playlist.tracks.items.push(...nextData.items);
    limit += 50;
    currUrl = nextData.next;
  }

  return playlist;
};

export const getCategories = async (
  session: AuthSession
): Promise<Category[]> => {
  const data = await customGet(
    `https://api.spotify.com/v1/browse/categories?limit=50&country=IN`,
    session
  );
  return data.categories.items;
};

export const getSearchItems = async (
  session: AuthSession,
  type: "artist" | "album" | "track" | "playlist" | "all",
  query: string,
  limit = 5
) => {
  let searchType: string;
  if (type === "all") {
    searchType = "album,artist,track,playlist";
  } else {
    searchType = type;
  }

  return customGet(
    `https://api.spotify.com/v1/search?q=${query}&market=from_token&type=${searchType}&limit=${limit}`,
    session
  );
};

export const getTrackById = async (
  session: AuthSession,
  trackId: string
): Promise<Track> => {
  return customGet(`https://api.spotify.com/v1/tracks/${trackId}`, session);
};

export const getTrackFeatures = async (
  session: AuthSession,
  trackId: string
): Promise<TrackFeatures> => {
  return customGet(
    `https://api.spotify.com/v1/audio-features/${trackId}`,
    session
  );
};

export const getTrackRecommendations = async (
  session: AuthSession,
  trackId: string,
  trackFeatures?: TrackFeatures
): Promise<Track[]> => {
  const trackAnalysis = await getTrackFeatures(session, trackId);

  const detault_trackFeatures = {
    // trackFeature 을 조절할 수 있게(아래 카테코리 조사 후 params 로 넘겨받을 수 있게 변경) 오늘의 기분 상태의 따라서
    acousticness: 1,
    danceability: 1,
    energy: 1,
    instrumentalness: 1,
    key: 1,
    liveness: 1,
    loudness: 1,
    mode: 1,
    speechiness: 1,
    tempo: 1,
    valence: 1,
  };

  const trackFeaturesParams = trackFeatures ?? detault_trackFeatures;

  const track = await getTrackById(session, trackId);
  const artist = await getArtistById(session, track.artists[0].id);

  let endpoint = `https://api.spotify.com/v1/recommendations?limit=30&seed_artists=${artist.id}&seed_tracks=${trackId}`;

  Object.entries(trackAnalysis).forEach(([key, value]) => {
    if (trackFeaturesParams.hasOwnProperty(key)) {
      endpoint += `&target_${key}=${value}`;
    }
  });

return customGet(endpoint, session).then((data) => data);
};

export const getTrackAudioAnalysis = async (
  session: AuthSession,
  trackId: string
): Promise<TrackAnalysis> => {
  return customGet(
    `https://api.spotify.com/v1/audio-analysis/${trackId}`,
    session
  );
};

export const getGenreSeeds = async (
  session: AuthSession
): Promise<GenreType[]> => {
  return customGet(
    "https://api.spotify.com/recommendations/available-genre-seeds",
    session
  );
};

export const getGetRecommendations = async (
  session: AuthSession
): Promise<RecommendationsResponseType> => {
  //params 추가
  return customGet("https://api.spotify.com/recommendations", session);
};
