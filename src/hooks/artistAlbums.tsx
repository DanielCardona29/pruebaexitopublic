import { useState, useEffect } from "react"


import { InAlbumResponse } from './types/artist';


const ArtistAlbums = () => {

    const [albums, setAlbums] = useState<InAlbumResponse[]>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        setLoading(true);
        fetch(`https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists/1/albums`)
            .then(response => response.json())
            .then(data => {
                setAlbums(data);
                setLoading(false);
            })
            .catch(error => {
                //TODO: Poner la pantalla de error
                console.error(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchData();

    }, [])

    return { albums, loading }
}

export default ArtistAlbums;
