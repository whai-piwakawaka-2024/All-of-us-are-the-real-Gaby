interface soundFiles {
  id: number
  name: string
  path: string
}

export type soundFilesData = Record<string, soundFiles>

const data = [
  { id: 1, name: 'Ba dum tss!', path: 'sound-files/ba-dum-tss.wav' },
  { id: 2, name: 'Carnival', path: 'sound-files/carnival.wav' },
  { id: 3, name: 'Country vibe', path: 'sound-files/country-vibes.wav' },
  { id: 4, name: 'FBI open up', path: 'sound-files/fbi-open-up.mp3' },
  {
    id: 5,
    name: 'It is an avocado thanks',
    path: 'sound-files/its-an-avocado-thanks.mp3',
  },
  {
    id: 6,
    name: 'Look at this distinguished gentleman',
    path: 'sound-files/look-at-this-distinguished-gentleman-meme.wav',
  },
  {
    id: 7,
    name: 'Oh my god',
    path: 'sound-files/ratatouille-oh-my-god-meme-sound.mp3',
  },
  {
    id: 8,
    name: 'Something tells me that is not funny',
    path: 'sound-files/something-tells-me-thats-not-funny.mp3',
  },
  {
    id: 9,
    name: 'Taste like chicken remix',
    path: 'sound-files/taste-like-chicken-remix.mp3',
  },
  {
    id: 10,
    name: 'Your worst nightmare',
    path: 'sound-files/your-worst-night-mare.mp3',
  },
]

export default data
