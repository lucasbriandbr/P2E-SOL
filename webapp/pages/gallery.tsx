// pages/gallery.tsx

import Layout from "../pages/components/Layout";

//import de la database

import { useEffect } from "react";
import { useState } from "react";

function GalleryView() {

    const [OS, setOS] = useState("OS INCONNU")

    useEffect(() => {
        if (navigator.userAgent.indexOf("Win") != -1) setOS("Windows"); 
        if (navigator.userAgent.indexOf("Mac") != -1) setOS("Macintosh"); 
        if (navigator.userAgent.indexOf("Linux") != -1) setOS("Linux"); 
        if (navigator.userAgent.indexOf("Android") != -1) setOS("Android"); 
        if (navigator.userAgent.indexOf("like Mac") != -1) setOS("IOS");
    },[])

    return (

        <Layout hello="Gallery">

            <div>
                
                <p>Hello World !!! Here is the Gallery Page.</p>

                <p>{OS}</p>

            </div>
            
        </Layout>

    )

};

export default GalleryView;