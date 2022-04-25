import { useState, useEffect } from "react"


import { SongList } from './types/artist';


const Songs = () => {

    const [songs, setSongs] = useState<SongList[]>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        setLoading(true);
        fetch(`https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists/1/songs`)
            .then(response => response.json())
            .then(data => {
                setSongs(data);
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

    return { songs, loading }
}

export default Songs;
