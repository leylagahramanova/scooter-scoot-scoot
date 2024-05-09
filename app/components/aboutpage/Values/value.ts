// value.ts
import tech from '../../../img/tech.png';
import integrity from '../../../img/integrity.png';
import community from '../../../img/community.png';

export type TypeValues = {
    id: number;
    image: string;
    title: string;
    description: string;
    number:string;
};

export const values: TypeValues[] = [
    {
        id: 1,
        image: tech.src,
        title: 'Locate with tech',
        description: 'Use the tech to find the nearest integrity to you. We are continuously placing integritys in the areas with most demand, so one should never be too far away.',
        number:'01',
    },
    {
        id: 2,
        image: integrity.src,
        title: 'Pick your integrity',
        description: 'We show the most important info for the integritys closest to you. So you know how much charge they have left and can see roughly how much it will cost.',
        number:'02',
    },
    {
        id: 3,
        image: community.src,
        title: 'Enjoy the community',
        description: 'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you are off! Always lock bikes away from walkways and accessibility ramps.',
        number:'03',
    }
];
