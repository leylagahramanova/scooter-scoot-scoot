import mobility from '../../../img/mobility.png';
import urban from '../../../img/urban.png';

export type TypeProperties = {
    id: number;
    image: string;
    title: string;
    description: string;
};

export const properties: TypeProperties[] = [
    {
        id: 1,
        image: mobility.src,
        title: 'Mobility for the digital era',
        description: 'Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.'
    },
    {
        id: 2,
        image: urban.src,
        title: 'Better urban living',
        description: 'We are helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.'
    }
];
