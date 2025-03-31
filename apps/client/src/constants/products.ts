export type Product = {
  id: string;
  image: string;
  name: string;
  description: string;
  amount: number;
};

export const products: Product[] = [
  {
    id: '1',
    image: 'https://cozy-threads-henry.s3.us-east-1.amazonaws.com/organic-cotton-beanie.png',
    name: 'Organic Cotton Beanie',
    description:
      'The item that started it all after going viral on TikTok: Soft and breathable, made from 100% organic cotton.',
    amount: 26.99,
  },
  {
    id: '2',
    image: 'https://cozy-threads-henry.s3.us-east-1.amazonaws.com/cozy-knit-scarf.png',
    name: 'Cozy Knit Scarf',
    description:
      'Chunky knit scarf, perfect for chilly days. Please be aware these will take longer to ship as they are made by order.',
    amount: 35.99,
  },
  {
    id: '3',
    image: 'https://cozy-threads-henry.s3.us-east-1.amazonaws.com/recycled-wool-cardigan.png',
    name: 'Recycled Wool Cardigan',
    description:
      'Cozy, sustainable cardigan made from recycled wool. Every purchase will go torwards maintaining the lifestyle of at least 5 sheep!',
    amount: 74.99,
  },
  {
    id: '4',
    image: 'https://cozy-threads-henry.s3.us-east-1.amazonaws.com/eco-friendly-tote.png',
    name: 'Eco-Friendly Tote',
    description:
      'Durable tote bag crafted from sustainable materials. Contains 3 separate pockets for organization.',
    amount: 99.99,
  },
  {
    id: '5',
    image: 'https://cozy-threads-henry.s3.us-east-1.amazonaws.com/recycled-wool-cardigan.png',
    name: '(Repeat) Recycled Wool Cardigan',
    description:
      'Cozy, sustainable cardigan made from recycled wool. Every purchase will go torwards maintaining the lifestyle of at least 5 sheep!',
    amount: 74.99,
  },
  {
    id: '6',
    image: 'https://cozy-threads-henry.s3.us-east-1.amazonaws.com/eco-friendly-tote.png',
    name: '(Repeat) Eco-Friendly Tote',
    description:
      'Durable tote bag crafted from sustainable materials. Contains 3 separate pockets for organization.',
    amount: 99.99,
  },
  {
    id: '7',
    image: 'https://cozy-threads-henry.s3.us-east-1.amazonaws.com/cozy-knit-scarf.png',
    name: '(Repeat) Cozy Knit Scarf',
    description:
      'Chunky knit scarf, perfect for chilly days. Please be aware these will take longer to ship as they are made by order.',
    amount: 35.99,
  },
  {
    id: '8',
    image: 'https://cozy-threads-henry.s3.us-east-1.amazonaws.com/organic-cotton-beanie.png',
    name: '(Repeat) Organic Cotton Beanie',
    description:
      'The item that started it all after going viral on TikTok: Soft and breathable, made from 100% organic cotton.',
    amount: 26.99,
  },
];
