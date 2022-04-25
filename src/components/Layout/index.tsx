import React from "react";


//Header
import Hader from '../Header';
import Footer from '../Footer';
import MusicReproductor from '../MusicReproductor';

const Layout: React.FC<any> = props => {

    return (
        <div>
            <div>
                <Hader />
            </div>

            <div className="container-home">
                {props.children}
            </div>
            <div className="reproductor">
                <MusicReproductor />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;