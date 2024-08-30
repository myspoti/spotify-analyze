export type GenreType =
  | "acoustic"
  | "afrobeat"
  | "alt-rock"
  | "alternative"
  | "ambient"
  | "anime"
  | "black-metal"
  | "bluegrass"
  | "blues"
  | "bossanova"
  | "brazil"
  | "breakbeat"
  | "british"
  | "cantopop"
  | "chicago-house"
  | "children"
  | "chill"
  | "classical"
  | "club"
  | "comedy"
  | "country"
  | "dance"
  | "dancehall"
  | "death-metal"
  | "deep-house"
  | "detroit-techno"
  | "disco"
  | "disney"
  | "drum-and-bass"
  | "dub"
  | "dubstep"
  | "edm"
  | "electro"
  | "electronic"
  | "emo"
  | "folk"
  | "forro"
  | "french"
  | "funk"
  | "garage"
  | "german"
  | "gospel"
  | "goth"
  | "grindcore"
  | "groove"
  | "grunge"
  | "guitar"
  | "happy"
  | "hard-rock"
  | "hardcore"
  | "hardstyle"
  | "heavy-metal"
  | "hip-hop"
  | "holidays"
  | "honky-tonk"
  | "house"
  | "idm"
  | "indian"
  | "indie"
  | "indie-pop"
  | "industrial"
  | "iranian"
  | "j-dance"
  | "j-idol"
  | "j-pop"
  | "j-rock"
  | "jazz"
  | "k-pop"
  | "kids"
  | "latin"
  | "latino"
  | "malay"
  | "mandopop"
  | "metal"
  | "metal-misc"
  | "metalcore"
  | "minimal-techno"
  | "movies"
  | "mpb"
  | "new-age"
  | "new-release"
  | "opera"
  | "pagode"
  | "party"
  | "philippines-opm"
  | "piano"
  | "pop"
  | "pop-film"
  | "post-dubstep"
  | "power-pop"
  | "progressive-house"
  | "psych-rock"
  | "punk"
  | "punk-rock"
  | "r-n-b"
  | "rainy-day"
  | "reggae"
  | "reggaeton"
  | "road-trip"
  | "rock"
  | "rock-n-roll"
  | "rockabilly"
  | "romance"
  | "sad"
  | "salsa"
  | "samba"
  | "sertanejo"
  | "show-tunes"
  | "singer-songwriter"
  | "ska"
  | "sleep"
  | "songwriter"
  | "soul"
  | "soundtracks"
  | "spanish"
  | "study"
  | "summer"
  | "swedish"
  | "synth-pop"
  | "tango"
  | "techno"
  | "trance"
  | "trip-hop"
  | "turkish"
  | "work-out"
  | "world-music";

export interface RecommendationsParamsType {
  limit?: number;
  merket?: "KR";
  seed_artists: string;
  seed_genres: string;
  seed_tracks: string;
  min_acousticness?: number; //반수 구간
  max_acousticness?: number;
  target_acousticness?: number;

  min_danceability?: number; //댄스성
  max_danceability?: number;
  target_danceability?: number;

  min_energy?: number; //에너지
  max_energy?: number;
  target_energy?: number;

  min_instrumentalness?: number; //기악성
  max_instrumentalness?: number;
  target_instrumentalness?: number;

  min_tempo?: number; //템포
  max_tempo?: number;
  target_tempo?: number;
}

export interface RecommendationsResponseType {
  seeds: [
    {
      afterFilteringSize: number; //필터링한 트랙 길이
      afterRelinkingSize: number;
      href: string;
      id: string;
      initialPoolSize: number; //이 시드에 사용할 수 있는 추천 트랙 수
      type: string; //이 시드유형. artist, track, genre 중 하나
    }
  ];
  tracks: [
    {
      album: {
        album_type: string; //앨범유형(앨범, 싱글, 컴필레이션) (허용값 : album, single, compilation)
        total_tracks: number; //앨범의 트랙수
        available_markets: string[]; // ex : [CA, BR, IT];
        external_urls: {
          spotify: string; //객체의 스포티파이 url
        };
        href: string; //앨범에 대한 전체 세부 정보를 제공하는 링크
        id: string; //앨범의 Spotify ID
        images: [
          {
            url: string; //이미지 url
            height: number;
            width: number;
          }
        ];
        name: string; //앨범 이름
        release_date: string; //앨범 처음출시 날짜
        release_date_precision: string; //출시일 정밀도 (허용값 : year, month, day)
        restrictions: {
          //콘텐츠 제한이 될때 포함됨
          reason: string; //콘텐츠가 특정시장에서 제공되지 않거나, 구독유형에서 제공되지 않거나, 사용자 계정이 노골적인 콘텐츠를 재생하기 않도록 설정(허용값 : market, product, explicit)
        };
        type: "album";
        uri: string; //앨범의 spotify url ex(spotify:album:2up3OPMp9Tb4dAKM2erWXQ)
        artists: ArtistType; //각 아티스트 개체에는 아티스트에 대한 자세한 정보에 대한 링크가 href에 포함되어 있습니다.
      };
      artists: ArtistType; //각 아티스트 개체에는 아티스트에 대한 자세한 정보에 대한 링크가 href에 포함되어 있습니다.
      available_markets: string[]; //이용 가능한시장
      disc_number: number;
      duration_ms: number; //지속시간(ms)
      explicit: boolean; //노골적인 가사가 있는지 여부
      external_ids: {
        isrc: string;
        ean: string;
        upc: string;
      };
      external_urls: {
        spotify: string; //spotify url
      };
      href: string; //트랙에 대한 전체 세부 정보를 제공하는 링크
      id: string; //트랙의 spotify url
      is_playable: boolean; // 재생가능여부
      linked_from: {};
      restrictions: {
        //콘텐츠 제한이 될때 포함됨
        reason: string; //콘텐츠가 특정시장에서 제공되지 않거나, 구독유형에서 제공되지 않거나, 사용자 계정이 노골적인 콘텐츠를 재생하기 않도록 설정(허용값 : market, product, explicit)
      };
      name: string; //트랙 이름
      popularity: number; //인기도(0~100)
      preview_url: string; //트랙의 30초 미리보기에 대한 링크
      track_number: number; //트랙번호
      type: "track";
      uri: string; //트랙 spotify url
      is_local: boolean; //로컬파일인지에 대한 여부
    }
  ];
}

interface ArtistType {
  external_urls: {
    spotify: string; //아티스트의 외부 url
  };
  href: string; //아티스트의 전체 세부정보를 제공하는 링크
  id: string; //아티스트 id
  name: string; //아티스트 이름
  type: "artist";
  uri: string; // 아티스트 spotify url
}
