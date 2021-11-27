import { useEffect, useMemo, useState } from 'react';
import audio from './assets/music2.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  let song = useMemo(() => {
    return new Audio(audio);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      song.play();
    } else {
      song.pause();
    }
  }, [song, isPlaying]);

  useEffect(() => {
    song.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      song.removeEventListener('ended', () => setIsPlaying(false))
    };
  }, [song]);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

export default App;