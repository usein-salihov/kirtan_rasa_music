export const ALBUMS = [
  { id: 1, title: 'Govinda', year: '2026', type: 'Album · Latest', emoji: '🕉', spotifyUrl: 'https://open.spotify.com/album/1AHvvhInzAbGAAY6dgrkUr', gradient: 'from-[#3D2B0F] via-[#7B5520] to-[#C9A84C]' },
  { id: 2, title: 'Songs of Devotion 2', year: '2022', type: 'Album', emoji: '🙏', spotifyUrl: 'https://open.spotify.com/album/3TjwtBp7eAIZBxg8FCAQpE', gradient: 'from-[#0F1F3D] via-[#203560] to-[#4A7BC8]' },
  { id: 3, title: 'Songs of Devotion', year: '2022', type: 'Album', emoji: '✨', spotifyUrl: 'https://open.spotify.com/album/6PszgVA7nlJhivgfGAwqb8', gradient: 'from-[#1F0F3D] via-[#5A2080] to-[#C84A9A]' },
  { id: 4, title: 'Divine Nectar', year: '2022', type: 'Album', emoji: '🌸', spotifyUrl: 'https://open.spotify.com/album/7u3ZR3wfQnDLZk46AcV1uk', gradient: 'from-[#0F3D1F] via-[#207B45] to-[#4AC880]' },
  { id: 5, title: 'Golden Tears', year: '2022', type: 'Album', emoji: '💫', spotifyUrl: 'https://open.spotify.com/album/3kpK3njkxtcQKKPD7BNNH9', gradient: 'from-[#3D0F0F] via-[#7B2020] to-[#C84A4A]' },
];

export const TOP_TRACKS = [
  { rank: 1, title: 'KAJI KAJI', album: 'Songs of Devotion', plays: '350,182', gradient: 'from-[#3D2B0F] to-[#C9A84C]' },
  { rank: 2, title: 'Maha Mantra', album: 'Songs of Devotion', plays: '25,798', gradient: 'from-[#0F3D1F] to-[#4AC880]' },
  { rank: 3, title: 'Stay High Forever', album: 'Songs of Devotion', plays: '18,170', gradient: 'from-[#1F0F3D] to-[#C84A9A]' },
  { rank: 4, title: 'Harmony', album: 'Divine Nectar', plays: '17,794', gradient: 'from-[#3D1F0F] to-[#C84A4A]' },
  { rank: 5, title: 'Govinda Jaya Jaya', album: 'Govinda', plays: '13,645', gradient: 'from-[#0F1F3D] to-[#4A7BC8]' },
];

export const EVENTS = [
  { id: 1, day: '21', month: 'Jun', name: 'Summer Kirtan Festival', location: 'Sofia, Bulgaria · Borisova Gradina', tag: 'Free Entry', tagColor: 'teal' as const },
  { id: 2, day: '05', month: 'Jul', name: 'Evening Mantra Session', location: 'Plovdiv, Bulgaria · Yoga Center', tag: 'Register', tagColor: 'saffron' as const },
  { id: 3, day: '19', month: 'Jul', name: 'Sacred Sound Journey', location: 'Varna, Bulgaria · Beach Stage', tag: 'Free Entry', tagColor: 'teal' as const },
];

export const SOCIAL_LINKS = {
  spotify: 'https://open.spotify.com/artist/56PBBitNh1m3LpEvcFFzRt',
  instagram: 'https://www.instagram.com/kirtanrasamusic/',
  facebook: 'https://www.facebook.com/kirtanrasamusic/',
};

export const STATS = [
  { num: '7.5K', label: 'Monthly Listeners' },
  { num: '5', label: 'Albums' },
  { num: '350K', label: 'Top Track Plays' },
  { num: '718', label: 'Followers' },
];
