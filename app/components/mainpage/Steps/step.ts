import app from '../../../img/app.png';
import scooter from '../../../img/scooter.png';
import ride from '../../../img/ride.png';

export type TypeStep = {
    id: number;
    image: string;
    title: string;
    description: string;
};

export const steps: TypeStep[] = [
    {
        id: 1,
        image: app.src,
        title: 'Locate with app',
        description: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
    },
    {
        id: 2,
        image: scooter.src,
        title: 'Pick your scooter',
        description: 'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.'
    },
    {
        id: 3,
        image: ride.src,
        title: 'Enjoy the ride',
        description: 'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you are off! Always lock bikes away from walkways and accessibility ramps.'
    }
];
