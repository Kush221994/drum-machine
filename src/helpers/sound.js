import Piano1 from "../assets/piano/piano-1.wav";
import Piano2 from "../assets/piano/piano-2.mp3";
import Piano3 from "../assets/piano/piano-3.wav";
import Piano4 from "../assets/piano/piano-4.wav";
import Piano5 from "../assets/piano/piano-5.wav";
import Piano6 from "../assets/piano/piano-6.wav";
import Piano7 from "../assets/piano/piano-7.wav";
import Piano8 from "../assets/piano/piano-8.wav";
import Drum1 from "../assets/drum/drum-1.mp3";
import Drum2 from "../assets/drum/drum-2.wav";
import Drum3 from "../assets/drum/drum-3.wav";
import Drum4 from "../assets/drum/drum-4.wav";
import Drum5 from "../assets/drum/drum-5.wav";
import Drum6 from "../assets/drum/drum-6.wav";
import Drum7 from "../assets/drum/drum-7.wav";

export const playAudio = (sound) => {
  new Audio(sound).play();
};

export const SOUNDS = {
  sound1: { piano: Piano1, drum: Drum1 },
  sound2: { piano: Piano2, drum: Drum2 },
  sound3: { piano: Piano3, drum: Drum3 },
  sound4: { piano: Piano4, drum: Drum4 },
  sound5: { piano: Piano5, drum: Drum5 },
  sound6: { piano: Piano6, drum: Drum6 },
  sound7: { piano: Piano7, drum: Drum7 },
  sound8: { piano: Piano8 },
};
