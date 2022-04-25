
import { useState, useEffect } from "react"


import { InArtist } from './types/artist';


const ArtistList = () => {

    const [artistList, setArtistList] = useState<InArtist[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        setLoading(true);
        fetch('https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api/artists')
            .then(response => response.json())
            .then(data => {
                setArtistList(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchData();

    }, [])

    return { artistList, loading }
}

export default ArtistList;
