interface soundFiles {
  id: number
  name: string
  path: string
}

export type soundFilesData = Record<string, soundFiles>

const data = [
  { id: 1, name: 'Ba dum tss!', src: '../../sound-files/ba-dum-tss.wav' },
  { id: 2, name: 'Carnival', src: '../../sound-files/carnival.wav' },
  { id: 3, name: 'Country vibe', src: '../../sound-files/country-vibes.wav' },
  { id: 4, name: 'FBI open up', src: '../../sound-files/fbi-open-up.mp3' },
  {
    id: 5,
    name: 'It is an avocado thanks',
    src: '../../sound-files/its-an-avocado-thanks.mp3',
  },
  {
    id: 6,
    name: 'Look at this distinguished gentleman',
    src: '../../sound-files/look-at-this-distinguished-gentleman-meme.wav',
  },
  {
    id: 7,
    name: 'Oh my god',
    src: '../../sound-files/ratatouille-oh-my-god-meme-sound.mp3',
  },
  {
    id: 8,
    name: 'Something tells me that is not funny',
    src: '../../sound-files/something-tells-me-thats-not-funny.mp3',
  },
  {
    id: 9,
    name: 'Taste like chicken remix',
    src: '../../sound-files/taste-like-chicken-remix.mp3',
  },
  {
    id: 10,
    name: 'Your worst nightmare',
    src: '../../sound-files/your-worst-night-mare.mp3',
  },
]

export default data
