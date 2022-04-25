
import './styles/artisCard.scss';
import React from 'react'

import { Link } from 'react-router-dom'

const ArtistCard: React.FC<any> = (props) => {
    const { artist, key } = props;
    const variableBackground = {
        backgroundImage: `url(${artist.image})`
    }

    return (
        <Link key={key} className='linkPage' to={`/artist/${artist.id}`}>
            <div className="artisCard .tooltip" style={variableBackground}>
                <div className="relaviteBackground"></div>
                <div className="name">{artist.name}</div>
            </div>
        </Link>
    )
}

export default ArtistCard;