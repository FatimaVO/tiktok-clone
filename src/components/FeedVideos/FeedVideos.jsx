import VideoPlayer from "../VideoPlayer/VideoPlayer";
import React from 'react';

const FeedVideos = () => {
  const VIDEOS = [
    {
      id: 1,
      author: "kaelimaee",
      description:
        "time for another office refresh 🖥️☁️🎧 ft my fav @simplehuman products! #simplehumanpartner #fyp #foryoupage #officerefresh #cleantok #cleaning #organize",
      likes: 123,
      shares: 539,
      comments: 320,
      songTitle: "original sound- kaeli mae",
      albumCover:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/726ae7be561d107d567c330645126ed6~c5_100x100.jpeg?x-expires=1665874800&amp;x-signature=8unod0idZF9sqF6JQcATS0ebDCQ%3D",
      src: "https://v16-webapp.tiktok.com/978507b50af61dc332adc283dd5148ab/6348f781/video/tos/maliva/tos-maliva-ve-0068c799-us/43f50e7cd8c04b5d82dbef739b0e6640/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=2680&amp;bt=1340&amp;cs=0&amp;ds=3&amp;ft=nFApP0EU12NvjY5lRmnRf5L4HcEbIxVvYcAi9tU&amp;mime_type=video_mp4&amp;qs=0&amp;rc=O2ZnMzpkMzk1OWY4ZzhmPEBpam9vZ2c6Zmc8ZTMzZzczNEAzYGJgMDUyXy0xNDBeYjMtYSMxZmpjcjRfNnFgLS1kMS9zcw%3D%3D&amp;l=20221013234408010214029051272705BB&amp;btag=80000",
    },
    {
      id: 2,
      author: "kaelimaee",
      description:
        "time for another office refresh 🖥️☁️🎧 ft my fav @simplehuman products! #simplehumanpartner #fyp #foryoupage #officerefresh #cleantok #cleaning #organize",
      likes: 123,
      shares: 539,
      comments: 320,
      songTitle: "original sound- kaeli mae",
      albumCover:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/726ae7be561d107d567c330645126ed6~c5_100x100.jpeg?x-expires=1665874800&amp;x-signature=8unod0idZF9sqF6JQcATS0ebDCQ%3D",
      src: "https://v16-webapp.tiktok.com/43c85bf6bd50b036500e3dd9372ebabe/634911ad/video/tos/useast2a/tos-useast2a-pve-0068/175c015bd67c4420b436f29dba870f45/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=4562&amp;bt=2281&amp;cs=0&amp;ds=3&amp;ft=nFApP0EU12Nvj8hSRmnRfdVYKcEbIxVvYdIi9tU&amp;mime_type=video_mp4&amp;qs=0&amp;rc=PDxlOGhkODk1ZDk1NTZmNkBpanN2OzU6ZnU8ZjMzNzczM0BhYGMvNS0yX2ExMTY0MV4yYSMtYF9wcjRnNDBgLS1kMTZzcw%3D%3D&amp;l=202210140136150101902091980E2D33DB&amp;btag=80000",
    },
  ];
  return (
    VIDEOS.map((video) => {
      return <VideoPlayer key={video.id} {...video} />
    })
  )
}

export default FeedVideos;