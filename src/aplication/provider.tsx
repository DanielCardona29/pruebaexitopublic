import React, { createContext, useState, useEffect } from 'react';



import ArtistAlbums from '../hooks/artistAlbums';
import ArtistList from '../hooks/ArtistList';
import Songs from '../hooks/songsList';

import { Song, InArtist, InAlbum, SongList } from "../hooks/types/artist";

const MyProvider: React.FC<any> = (props) => {

    const [reproducedArtist, setReproducedArtist] = useState<InAlbum>();
    const [reproducedAlbum, setReproducedAlbum] = useState<InArtist>();
    const [reproducedSong, setReproducedSong] = useState<Song>();

    const { artistList, loading: ArtistLoading } = ArtistList();
    const { albums, loading: albumsLoading } = ArtistAlbums();
    const { songs, loading: songsLoading } = Songs();

    const NextSong = () => {
        let SongList = songs?.find((item: SongList) => item.album === reproducedAlbum?.id);
        let index = SongList?.songs.findIndex((item: Song) => item.id === reproducedSong?.id);
        if (index !== undefined && SongList?.songs[index + 1]) {
            setReproducedSong(SongList?.songs[index + 1]);
        } else {
            setReproducedSong(SongList?.songs[0]);
        }
    }

    const prevSong = () => {
        let SongList = songs?.find((item: SongList) => item.album === reproducedAlbum?.id);
        let index = SongList?.songs.findIndex((item: Song) => item.id === reproducedSong?.id);

        if (index !== undefined && SongList?.songs[index - 1]) {
            setReproducedSong(SongList?.songs[index - 1]);
        } else {
            setReproducedSong(SongList?.songs[SongList?.songs.length - 1]);
        }
    }

    const ramdomSong = () => {
        let SongList = songs?.find((item: SongList) => item.album === reproducedAlbum?.id);
        let index = SongList?.songs.findIndex((item: Song) => item.id === reproducedSong?.id);
        if (index !== undefined) {
            let ramdom = Math.floor(Math.random() * SongList?.songs?.length!);
            setReproducedSong(SongList?.songs[ramdom]);
        }
    }

    useEffect(() => {
        
    }, [artistList, albums, songs]);

    return (
        <AppContext.Provider value={{
            artistList,
            albums,
            albumsLoading,
            ArtistLoading,
            songs,
            songsLoading,
            reproducedArtist,
            reproducedSong,
            reproducedAlbum,
            setReproducedArtist,
            setReproducedAlbum,
            setReproducedSong,
            NextSong,
            prevSong,
            ramdomSong
        }}>
            {props.children}
        </AppContext.Provider>
    )
};

export default MyProvider;


export const AppContext = createContext<any>({});