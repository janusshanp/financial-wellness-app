import "./Camera.css"
import {useRef, useState} from 'react'
import { Camera } from "react-camera-pro";

export default function CameraPage(props){

    const camera = useRef(null)
    const [image, setImage] = useState(null);


    return(
        <div className="home">
            {image ? 
            <img src={image} alt='Taken photo'/> : 
            <div className="camera">
                <Camera ref={camera} />
            </div>}
            <button className="test" onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
        </div>
    )
}