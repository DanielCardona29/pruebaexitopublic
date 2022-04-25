import './styles/albumsHeader.scss';
import React from 'react';

const AlbumsHeader: React.FC<any> = ({ artistName, artistsRate, artistImage }) => {
    return (
        <div className="albums-header">
            <div className="image">
                <img src={artistImage} alt="album" />
            </div>

            <div className="name">
                <span className='artistName'>{artistName}.</span>
                <span className='artistRate'> <span className='start'>★</span>{artistsRate}</span>
            </div>
        </div>
    );
}

export default AlbumsHeader;