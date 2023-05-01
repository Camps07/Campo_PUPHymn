// Get the lyrics container element and the audio player element
const lyricsContainer = document.getElementById('lyrics-container');
const audioPlayer = document.getElementsByTagName('audio')[0];

// Initialize variables for keeping track of playing status, current index, and current time
let isPlaying = false;
let currentIndex = 0;
let currentTime = 0;
let timerId = null;

// Define the lyrics as an array of strings
const lyrics = [
  'Sintang Paaralan',
  'Tanglaw ka ng bayan',
  'Pandayan ng isip ng kabataan',
  'Kami ay dumating nang salat sa yaman',
  'Hanap na dunong ay iyong alay',
  'Ang layunin mong makatao',
  'Dinarangal ang Pilipino',
  'Ang iyong aral, diwa, adhikang taglay',
  'PUP, aming gabay',
  'Paaralang dakila',
  'PUP, pinagpala',
  'Gagamitin ang karunungan',
  'Mula sa iyo, para sa bayan',
  'Ang iyong aral, diwa, adhikang taglay',
  'PUP, aming gabay',
  'Paaralang dakila',
  'PUP, pinagpala'
];

// Define a function to reset the styling of the lyrics lines
const resetLyrics = () => {
  for (let i = 0; i < lyricsContainer.children.length; i++) {
    lyricsContainer.children[i].style.color = '#000';
    lyricsContainer.children[i].style.fontWeight = 'normal';
    }
  };

// Define a function to update the styling of the current lyrics line
const updateLyrics = () => {
  lyricsContainer.scrollTo(0, currentIndex * 52);
  resetLyrics();
  const currentLine = lyricsContainer.children[currentIndex];
  currentLine.style.color = '#7b1113e5';
  currentLine.style.fontWeight = 'bold';
  currentIndex++;
  };

// Define a function to start the timer and update the lyrics based on the current time
const startTimer = () => {
    if (isPlaying) {
        currentTime = audioPlayer.currentTime;
        // Determine which line of lyrics corresponds to the current time in the audio track
        if (currentTime >= 0 && currentTime < 15) {
        currentIndex = 0; // Sintang Paaralan
        } else if (currentTime >= 15 && currentTime < 18) {
        currentIndex = 1; // Tanglaw ka ng bayan
        } else if (currentTime >= 18 && currentTime < 24) {
        currentIndex = 2; // Pandayan ng isip ng kabataan
        } else if (currentTime >= 24 && currentTime < 30) {
        currentIndex = 3; // Kami ay dumating nang salat sa yaman
        }else if (currentTime >= 30 && currentTime < 35) {
        currentIndex = 4; // Hanap na dunong ay iyong alay
        } else if (currentTime >= 35 && currentTime < 41) {
        currentIndex = 5; // Ang layunin mong makatao
        } else if (currentTime >= 41 && currentTime < 47) {
        currentIndex = 6; // Dinarangal ang Pilipino
        }else if (currentTime >= 47 && currentTime < 53) {
        currentIndex = 7; // Ang iyong aral, diwa, adhikang taglay
        } else if (currentTime >= 53 && currentTime < 56) {
        currentIndex = 8; // PUP, aming gabay
        } else if (currentTime >= 56 && currentTime < 63) {
        currentIndex = 9; // Paaralang dakila
        }else if (currentTime >= 63 && currentTime < 68) {
        currentIndex = 10; // PUP, pinagpala
        } else if (currentTime >= 68 && currentTime < 74) {
        currentIndex = 11; // Gagamitin ang karunungan
        } else if (currentTime >= 74 && currentTime < 80) {
        currentIndex = 12; // Mula sa iyo, para sa bayan
        } else if (currentTime >= 80 && currentTime < 86) {
        currentIndex = 13; // Ang iyong aral, diwa, adhikang taglay
        } else if (currentTime >= 86 && currentTime < 90) {
        currentIndex = 14; // PUP, aming gabay
        }else if (currentTime >= 91 && currentTime < 98) {
        currentIndex = 15; // Paaralang dakila
        } else if (currentTime >= 99 && currentTime < 106) {
        currentIndex = 16; // PUP, pinagpala
        } 
        if (currentIndex >= lyrics.length) {
        currentIndex = lyrics.length - 1;
        }
        updateLyrics();
        timerId = setTimeout(startTimer, 250);
    }
    };


audioPlayer.addEventListener('play', () => {
  isPlaying = true;
  startTimer();
});

audioPlayer.addEventListener('pause', () => {
  isPlaying = false;
  clearTimeout(timerId);
});
