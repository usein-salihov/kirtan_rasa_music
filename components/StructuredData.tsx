export default function StructuredData() {
  const musicGroup = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Kirtan Rasa Music',
    description: 'A Bulgarian devotional music collective performing sacred kirtan music.',
    url: 'https://kirtanrasamusic.com',
    image: 'https://kirtanrasamusic.com/images/hero-performance.jpg',
    logo: 'https://kirtanrasamusic.com/images/logo.png',
    genre: ['Devotional', 'Kirtan', 'World Music', 'Sacred Music', 'Mantra'],
    foundingLocation: {
      '@type': 'Place',
      name: 'Bulgaria',
    },
    sameAs: [
      'https://open.spotify.com/artist/56PBBitNh1m3LpEvcFFzRt',
      'https://www.instagram.com/kirtanrasamusic/',
      'https://www.facebook.com/kirtanrasamusic/',
      'https://www.youtube.com/channel/UCLIBrNmb8UEYV4zw55v5HIg',
    ],
    album: [
      {
        '@type': 'MusicAlbum',
        name: 'Govinda',
        datePublished: '2026',
        url: 'https://open.spotify.com/album/1AHvvhInzAbGAAY6dgrkUr',
        image: 'https://kirtanrasamusic.com/images/albums/govinda.png',
      },
      {
        '@type': 'MusicAlbum',
        name: 'Songs of Devotion 2',
        datePublished: '2022',
        url: 'https://open.spotify.com/album/3TjwtBp7eAIZBxg8FCAQpE',
        image: 'https://kirtanrasamusic.com/images/albums/songs_of_devotion_2.jpg',
      },
      {
        '@type': 'MusicAlbum',
        name: 'Songs of Devotion',
        datePublished: '2022',
        url: 'https://open.spotify.com/album/6PszgVA7nlJhivgfGAwqb8',
        image: 'https://kirtanrasamusic.com/images/albums/songs_of_devotion.jpg',
      },
      {
        '@type': 'MusicAlbum',
        name: 'Divine Nectar',
        datePublished: '2022',
        url: 'https://open.spotify.com/album/7u3ZR3wfQnDLZk46AcV1uk',
        image: 'https://kirtanrasamusic.com/images/albums/divine_nectar.png',
      },
      {
        '@type': 'MusicAlbum',
        name: 'Golden Tears',
        datePublished: '2022',
        url: 'https://open.spotify.com/album/3kpK3njkxtcQKKPD7BNNH9',
        image: 'https://kirtanrasamusic.com/images/albums/golden_tears.jpg',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroup) }}
    />
  );
}
