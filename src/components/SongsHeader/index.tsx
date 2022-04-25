import './styles/songsHeader.scss'
import React from 'react';

import { InAlbum, Song } from "../../hooks/types/artist";

interface IntSongsHeader {
    albumSelected: InAlbum | undefined;
    songsList: Song[] | undefined;
}

const SongsHeader: React.FC<IntSongsHeader> = (props) => {
    const { albumSelected, songsList } = props;
    let totalTime = 0;

    function msToTime(duration: any) {
        var seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        let newhours = (hours < 10) ? "0" + hours : hours;
        let newminutes = (minutes < 10) ? "0" + minutes : minutes;
        let newseconds = (seconds < 10) ? "0" + seconds : seconds;

        return newhours + ":" + newminutes + ":" + newseconds;
    }

    songsList?.map((item: Song) => {
        item.duration_ms ? totalTime += parseInt(item.duration_ms) : totalTime += 0;
        return totalTime;
    })

    return (
        <div className="container-song">
            <div className="infor">
                <div className="image">
                    <img src={albumSelected?.image} alt={albumSelected?.name} />
                </div>

                <div className="infotext">
                    <div className="name">{albumSelected?.name}</div>
                    <div className="albumname">Album •{albumSelected?.name}</div>
                    <div className="songs">{albumSelected?.total_tracks} canciones • {msToTime(totalTime)} </div>
                </div>
            </div>
        </div>
    )
}

export default SongsHeader;
