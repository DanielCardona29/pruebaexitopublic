import React from 'react';
import { Link } from 'react-router-dom';
import './styles/albumsHeader.scss';

import Loader from '../../components/Loader';

const AlbumList: React.FC<any> = (props) => {

    const { albums, albumsLoading, artistId } = props;

    const loader = (
        <div className="loader">
            <Loader />
        </div>
    )
    const AlbumsList = (
        <div className="albumList">
            <div className="title">Álbumes</div>
            {
                albums?.map((item: any) => {
                    return (
                        <Link className='linkPage' to={`/artist/${artistId}/album/${item.id}`} key={item.id}>
                            <div className="album">
                                <div className="info">
                                    <div className="image">
                                        <img src={item.image} alt="album" />
                                    </div>
                                    <div className="name">
                                        <span className='albumName'>{item.name}</span>
                                        <span className='totalTraks'>canciones: {item.total_tracks}</span>
                                    </div>
                                </div>

                                <div className="play">▶</div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );

    return albumsLoading ? loader : AlbumsList
}

export default AlbumList;