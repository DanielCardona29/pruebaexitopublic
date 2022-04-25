import { deflate } from "zlib";

export interface InArtist {
    id: number;
    name: string;
    image: string;
    genres: string[];
    popularity: string;
    spotify_url: string;
    spotify_id: string;
    created_at: string | Date;
    updated_at: string | Date;
}

export interface SongList {
    album: number,
    songs: Song[]

}
export interface Song {
    id: number;
    name: string;
    spotify_url: string;
    preview_url: string;
    duration_ms: string;
    explicit: string;
};
export interface InAlbumResponse {
    artist: number;
    albums: Album[];
}

export interface InAlbum {
    id: number;
    name: string;
    image: string;
    spotify_url: string;
    total_tracks: number
}
