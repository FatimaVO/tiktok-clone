import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'

const VideoPlayer = () => {

    const SRC = 'https://v16-webapp.tiktok.com/fb6303e4be60380ae9e9b2200931c02a/6346397e/video/tos/maliva/tos-maliva-ve-0068c799-us/c3d5607f987c437287b81288577c8b4e/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=3080&amp;bt=1540&amp;cs=0&amp;ds=3&amp;ft=nFApP0EU12NvjfUp2mnRfyKVlcEbIxVvY~6i9tU&amp;mime_type=video_mp4&amp;qs=0&amp;rc=NzpnNDc7Zjw5O2U8N2k7OUBpanlnaWg6Znl1ZjMzZzczNEA2M2FiMjY2NS4xL2NfNDA1YSMtLmVocjQwbGxgLS1kMS9zcw%3D%3D&amp;l=20221011214743010223098151124E35BF&amp;btag=80000'

    const [playing, setPlaying] = useState(false)

    const video = useRef()
    const handlePlay = () => {

        if (playing) {
            video.current.pause()
        } else {
            video.current.play()
        }

        setPlaying(!playing)
    }

    const playerClassName = clsx(styles.player, {
        [styles.videoPlayer]: true,
    })

    return (
        <div>
            <video className={styles.video} src={SRC} controls={false} ref={video}></video>
            <button className={styles.player} onClick={handlePlay}></button>
        </div>
    );
};

export default VideoPlayer;