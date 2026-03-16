export interface Project {
  slug: string;
  title: string;
  description: string;
  extendedDescription?: string;
  imageUrl: string;
  videoUrl?: string;
  link: string;
  externalLink?: string;
  highlight?: string;
  size: 'normal' | 'wide' | 'full';
  hoverStyle: 'half' | 'full';
  category: 'web' | 'game';
}

export const projects: Project[] = [
  {
    slug: 'spotcheck',
    title: 'spotcheck.lol',
    description: 'Daily TFT Puzzles',
    imageUrl: '/images/spotcheck.png',
    // videoUrl: '/videos/spotcheck.mp4',
    link: '/Projects/spotcheck',
    extendedDescription: 'Daily TFT Puzzles for players to improve their play. Reached 10000+ users and featured on prominent TFT streams.',
    externalLink: 'https://spotcheck.lol/',
    size: 'full',
    hoverStyle: 'half',
    category: 'web',
  },
  {
    slug: 'lyinjack',
    title: "Lyin' Jack",
    description: 'GCC Summer Jam Winner',
    imageUrl: '/images/lyinjack.png',
     videoUrl: '/videos/lyinjack.mp4',
    link: '/Projects/lyinjack',
    extendedDescription: "A blackjack-based game themed around betting with the devil who sets rules but is bound by a contract. Won the 2025 GCC Summer Jam.",
    externalLink: 'https://mcalmic.itch.io/lyin-jack',
    size: 'full',
    hoverStyle: 'half',
    category: 'game',
  },
  {
    slug: 'frostyfisher',
    title: 'Frosty Fisher',
    description: 'Ice Fish as a Stoat!',
    imageUrl: '/images/frostyfisher.png',
    videoUrl: '/videos/frostyfisher.mp4',
    link: '/Projects/frostyfisher',
    size: 'wide',
    hoverStyle: 'full',
    category: 'game',
  },

  {
    slug: '5secondrule',
    title: '5 Second Rule',
    description: 'Ludum Dare 58',
    imageUrl: '/images/5secondrule.png',
    videoUrl: '/videos/5secondrule.mp4',
    link: '/Projects/5secondrule',
    externalLink: 'https://mcalmic.itch.io/5-second-rule',
    size: 'full',
    hoverStyle: 'half',
    category: 'game',
  },
    {
    slug: "protecttheslime",
    title: "Protect the Slime",
    description: 'Physics-based Puzzles',
    imageUrl: '/images/protecttheslime.png',
    videoUrl: '/videos/protecttheslime.mp4',
    link: '/Projects/protecttheslime',
    size: 'normal',
    hoverStyle: 'full',
    category: 'game',
  },
      {
    slug: "monkeybusiness",
    title: "Monkey Business",
    description: 'Market Manipulation Board Game',
    imageUrl: '/images/monkeybusiness.png',
    //videoUrl: '/videos/monkeybusiness.mp4',
    link: '/Projects/monkeybusiness',
    size: 'normal',
    hoverStyle: 'full',
    category: 'game',
  },
  {
    slug: 'pokedrafter',
    title: 'Pokedrafter',
    description: 'Fantasy Sports for Pokemon TCG',
    imageUrl: '/images/pokedrafter.png',
    // videoUrl: '/videos/pokedrafter.mp4',
    link: '/Projects/pokedrafter',
    externalLink: 'https://pokedrafter.vercel.app/',
    size: 'wide',
    hoverStyle: 'full',
    category: 'web',
  },
  {
    slug: '',
    title: 'Limitlessdle',
    description: 'Guessing game for Pokemon TCG Cards',
    imageUrl: '/images/limitlessdle.png',
    // videoUrl: '/videos/limitlessdle.mp4',
    link: '/Projects/Limitlessdle',
    size: 'wide',
    hoverStyle: 'full',
    category: 'web',
  },

];
