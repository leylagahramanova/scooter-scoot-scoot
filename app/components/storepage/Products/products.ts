import scooter from '../../../img/scooterself.png';

export type TypeProduct = {
  id: number;
  image: string;
  title: string; // Changed from 'name' to 'title'
  price: number;
};

export const products: TypeProduct[] = [
  {
    id: 1,
    image: scooter.src,
    title: 'Easy to use riding telemetry', // Changed from 'name' to 'title'
    price: 499,
  },
  {
    id: 2,
    image: scooter.src,
    title: 'Blue Scooter',
    price: 499,
  },
  {
    id: 3,
    image: scooter.src,
    title: 'Green Scooter',
    price: 499,
  },
  {
    id: 4,
    image: scooter.src,
    title: 'Yellow Scooter',
    price: 499,
  },
  {
    id: 5,
    image: scooter.src,
    title: 'Purple Scooter',
    price: 499,
  },
  {
    id: 6,
    image: scooter.src,
    title: 'Red Scooter',
    price: 499,
  }
];