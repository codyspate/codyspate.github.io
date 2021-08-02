import { ButtonHTMLAttributes, MouseEventHandler, useState } from "react"

export const PlayPause = () => {
    const [isPlaying, setIsPlaying]  = useState(false)   
    const onClick = (e: any) => {
        setIsPlaying(!isPlaying)
    }
    return (
        <div><button onClick={onClick}>{isPlaying ? 'Pause' : 'Play'}</button></div>
    );
}