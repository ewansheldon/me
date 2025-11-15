import Modal from "../../components/Modal";
import { useEffect, useRef, useState } from "react";
const STORAGE_URL = 'https://storage.googleapis.com/archive-tv/'

type Film = {
  src: string;
  duration: number;
}

type ChannelProgramme = Film[];

const ArchiveTV = () => {
  const [ channel, setChannel ] = useState<number>(0);
  const [ muted, setMuted ] = useState<boolean>(true);
  const [ filmCue, setFilmCue ] = useState<number>(0);
  const [ toastMessage, setToastMessage ] = useState<string|null>(null);
  const [ modalOpen, setModalOpen ] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout|null>(null);

  const programme: ChannelProgramme[] = [
    [
      { 
        src: `${STORAGE_URL}lonely-water.mp4`,
        duration: 95
      },
      { 
        src: `${STORAGE_URL}watch-out-car-theft.mp4`,
        duration: 44
      }
    ],
    [
      {
        src: `${STORAGE_URL}charley-says-matches.mp4`,
        duration: 30
      },
      {
        src: `${STORAGE_URL}charley-says-strangers.mp4`,
        duration: 61
      },
      {
        src: `${STORAGE_URL}charley-says-mummy-should-know.mp4`,
        duration: 62
      }
    ]
  ];

  useEffect(() => {
    const getBroadcastMoment = () => {
      const channelProgramme = programme[channel];
      const channelProgrammeDuration = channelProgramme.reduce((duration, film) => duration + film.duration, 0);
      const now = Math.floor((new Date()).getTime() / 1000);
      const broadcastTS = now % channelProgrammeDuration;
      let src = '';
      let filmTS = 0;
      let elapsed = 0;
      for (let i = 0; i < channelProgramme.length; i++) {
        const film = channelProgramme[i];
        if (elapsed + film.duration > broadcastTS) {
          src = film.src;
          filmTS = broadcastTS - elapsed;
          break;
        }
        elapsed += film.duration;
      }
      return { src, filmTS };
    }

    const video = videoRef.current;
    if (!video) return;
    const { src, filmTS } = getBroadcastMoment();
    video.src = src;
    video.currentTime = filmTS;
  }, [ channel, filmCue ]);

  const addToast = (message: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToastMessage(message);
    timeoutRef.current = setTimeout(() => setToastMessage(null), 2000);
  }

  const handleChannelChange = (change: number) => {
    let newChannel = channel + change;
    if (newChannel < 0) newChannel = programme.length - 1;
    if (newChannel >= programme.length) newChannel = 0;
    addToast(`0${newChannel + 1}`);
    setChannel(newChannel);
  }

  const handleVolumeChange = (change: number) => {
    const video = videoRef.current;
    if (!video) return;
    let newVolume = video.volume + change;
    if (newVolume <= 0) {
      newVolume = 0;
    }
    if (newVolume > 1) {
      newVolume = 1;
    }
    newVolume = parseFloat(newVolume.toFixed(1));
    setMuted(newVolume === 0 ? true : false);
    video.volume = newVolume;
    addToast(`Vol ${newVolume * 10}`)
  }

  const cueNextFilm = () => {
    setFilmCue(filmCue + 1);
  }

  return (
    <>
      <div className="header-container">
        <h1>Archive TV</h1>
        <button className="info-button" onClick={() => setModalOpen(true)}>?</button>
      </div>
      <div className="tv-container">
        <div className="tv">
          <video 
            autoPlay={true}
            muted={muted}
            ref={videoRef}
            onEnded={cueNextFilm}
          />
          <div className="tv-label">
            { toastMessage && (
              <span>{toastMessage}</span>
            )}
            { muted && (
              <img src="/mute-icon.svg" />
            )}
          </div>
        </div>
        <div className="tv-remote">
          <div className="tv-remote-group">
            <button onClick={() => handleChannelChange(1)}>
              CH ▲
            </button>
            <button onClick={() => handleChannelChange(-1)}>
              CH ▼
            </button>
          </div>
          <div className="tv-remote-group">
            <button onClick={() => setMuted(!muted)}>
              { muted ? 'Unmute' : 'Mute' }
            </button>
          </div>
          <div className="tv-remote-group">
            <button onClick={() => handleVolumeChange(0.1)}>
              VOL +
            </button>
            <button onClick={() => handleVolumeChange(-0.1)}>
              VOL -
            </button>
          </div>
        </div>
      </div>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} content={
        <>
          <p>This is an archive TV project, broadcasting 1970s Public Information Films from the UK.</p>
          <p>It is rooted in real time, to replicate the feel of live television.</p>
          <p>The films are stored in Google Cloud storage.</p>
          <p>You can view the code <a href="https://github.com/ewansheldon/me/blob/main/client/pages/ArchiveTV/ArchiveTV.tsx" target="_blank">here</a>.</p>
        </>
      } />
    </>
  )
}

export default ArchiveTV;