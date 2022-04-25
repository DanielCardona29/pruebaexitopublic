/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Swal from 'sweetalert2'

import Loader from '../../components/Loader';
import SongsHeader from '../../components/SongsHeader';
import SongsList from '../../components/SongList';

import { AppContext } from '../../aplication/provider';
import { SongList, InAlbum, InAlbumResponse, InArtist, Song } from "../../hooks/types/artist";

const SongsPage = () => {

    const [songsList, setSongsList] = useState<SongList>();
    const [albumSelected, setAlbumSelected] = useState<InAlbum>();
    const [artistSelected, setArtistSelected] = useState<InArtist>();

    const { albumid, artistid } = useParams();
    const { songs,
        songsLoading,
        albums,
        artistList,
        setReproducedArtist,
        setReproducedAlbum,
        setReproducedSong } = useContext(AppContext);


    useMemo(() => {
        if (albumid && albums && artistid) {
            let artisAlbum = albums.find((item: InAlbumResponse) => item.artist === parseInt(artistid));
            let albumSelect = artisAlbum.albums.find((item: InAlbum) => item.id === parseInt(albumid));
            setAlbumSelected(albumSelect);
        }
    }, [albums, albumid, artistid]);

    useMemo(() => {
        if (albumid && songs) {
            let songsList = songs.find((item: SongList) => item.album === parseInt(albumid));
            setSongsList(songsList);
        }
    }, [songs, albumid]);

    useMemo(() => {
        if (artistid && artistList) {
            let artist = artistList.find((item: InArtist) => item.id === parseInt(artistid));
            setArtistSelected(artist);
        }
    }, [artistList, artistid]);


    const ReproduceSong = (song: Song) => {
        if (!song?.preview_url) {
            Swal.fire({
                icon: 'error',
                titleText: 'No se puede reproducir',
                text: 'No hay preview para esta canción',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#2C3E50',
            });
            return;
        }
        setReproducedArtist(artistSelected);
        setReproducedAlbum(albumSelected);
        setReproducedSong(song);
    }

    const loader = (
        <div className="loader">
            <Loader />
        </div>
    )

    const songsListRender = (
        <>
            <SongsHeader albumSelected={albumSelected} songsList={songsList?.songs} />
            <SongsList songsList={songsList?.songs} ReproduceSong={ReproduceSong} />
        </>
    )

    return songsLoading ? loader : songsListRender
}


export default SongsPage;