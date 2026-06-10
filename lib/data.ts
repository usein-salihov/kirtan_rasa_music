export const ALBUMS = [
  { id: 1, title: 'Govinda', year: '2026', type: 'Album · Latest', image: '/images/albums/govinda.png', spotifyUrl: 'https://open.spotify.com/album/1AHvvhInzAbGAAY6dgrkUr' },
  { id: 2, title: 'Songs of Devotion 2', year: '2022', type: 'Album', image: '/images/albums/songs_of_devotion_2.jpg', spotifyUrl: 'https://open.spotify.com/album/3TjwtBp7eAIZBxg8FCAQpE' },
  { id: 3, title: 'Songs of Devotion', year: '2022', type: 'Album', image: '/images/albums/songs_of_devotion.jpg', spotifyUrl: 'https://open.spotify.com/album/6PszgVA7nlJhivgfGAwqb8' },
  { id: 4, title: 'Divine Nectar', year: '2022', type: 'Album', image: '/images/albums/divine_nectar.png', spotifyUrl: 'https://open.spotify.com/album/7u3ZR3wfQnDLZk46AcV1uk' },
  { id: 5, title: 'Golden Tears', year: '2022', type: 'Album', image: '/images/albums/golden_tears.jpg', spotifyUrl: 'https://open.spotify.com/album/3kpK3njkxtcQKKPD7BNNH9' },
];

export const TOP_TRACKS = [
  { rank: 1, title: 'KAJI KAJI', album: 'Songs of Devotion', plays: '350,182', gradient: 'from-[#3D2B0F] to-[#C9A84C]' },
  { rank: 2, title: 'Maha Mantra', album: 'Songs of Devotion', plays: '25,798', gradient: 'from-[#0F3D1F] to-[#4AC880]' },
  { rank: 3, title: 'Stay High Forever', album: 'Songs of Devotion', plays: '18,170', gradient: 'from-[#1F0F3D] to-[#C84A9A]' },
  { rank: 4, title: 'Harmony', album: 'Divine Nectar', plays: '17,794', gradient: 'from-[#3D1F0F] to-[#C84A4A]' },
  { rank: 5, title: 'Govinda Jaya Jaya', album: 'Govinda', plays: '13,645', gradient: 'from-[#0F1F3D] to-[#4A7BC8]' },
];

export type EventTag = 'freeEntry' | 'register';

export const EVENTS = [
  {
    id: 1,
    day: '21',
    month: 'Jun',
    monthBg: 'Юни',
    name: 'Day of yoga in Varna',
    nameBg: 'Ден на йогата Варна',
    location: 'Varna, Bulgaria · hotel Black sea',
    locationBg: 'Варна, България · хотел Черно море',
    tag: 'freeEntry' as EventTag,
    tagColor: 'teal' as const,
    link: ''
  }
];

export const SOCIAL_LINKS = {
  spotify: 'https://open.spotify.com/artist/56PBBitNh1m3LpEvcFFzRt',
  instagram: 'https://www.instagram.com/kirtanrasamusic/',
  facebook: 'https://www.facebook.com/kirtanrasamusic/',
  youtube: 'https://www.youtube.com/channel/UCLIBrNmb8UEYV4zw55v5HIg',
};

export const STATS = [
  { num: '7.5K', label: 'Monthly Listeners' },
  { num: '5', label: 'Albums' },
  { num: '350K', label: 'Top Track Plays' },
  { num: '718', label: 'Followers' },
];
