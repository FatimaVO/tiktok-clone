import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'

const VideoPlayer = ({ src }) => {

    const [playing, setPlaying] = useState(false)

    const video = useRef(null)

    const handlePlay = () => {
        const { current: videoEl } = video

        playing ? videoEl.pause() : videoEl.play()

        setPlaying(!playing)

    }

    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing,
    })

    return (
        <div>
            <video loop className={styles.video} src={src} controls={false} ref={video} onClick={handlePlay}></video>
            <i className={playerClassName} onClick={handlePlay}></i>
        </div>
    );
};

export default VideoPlayer;