/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from '../../components/Loader';
import AlbumsHeader from '../../components/AlbumsHeader';
import AlbumList from '../../components/AlbumList';

import { AppContext } from '../../aplication/provider';
import { InAlbumResponse, InArtist } from "../../hooks/types/artist";

const AlbumPage = () => {
    const [albumList, setAlbumList] = useState<InAlbumResponse>();
    const [artistSelected, setArtistSelected] = useState<InArtist>();

    const { id } = useParams();
    const { albums, albumsLoading, artistList } = useContext(AppContext);

    useMemo(() => {
        if (id && albums) {
            let artisAlbum = albums.find((item: InAlbumResponse) => item.artist === parseInt(id));
            setAlbumList(artisAlbum);
        }
    }, [albums, id]);

    useMemo(() => {
        if (id && artistList) {
            let artist = artistList.find((item: InArtist) => item.id === parseInt(id));
            setArtistSelected(artist);
        }
    }, [artistList, id]);

    const loader = (
        <div className="loader">
            <Loader />
        </div>
    )


    const AlbumsList = (

        <>
            <AlbumsHeader artistName={artistSelected?.name} artistsRate={artistSelected?.popularity} artistImage={artistSelected?.image} />
            <AlbumList albums={albumList?.albums} artistId={albumList?.artist} albumsLoading={albumsLoading} />
        </>

    )
    return albumsLoading ? loader : AlbumsList
}

export default AlbumPage;