import human from '../../../img/human.png';
import city from '../../../img/city.png';
import money from '../../../img/money.png';

export type TypePlus = {
    id: number;
    image: string;
    title: string;
    description: string;
};

export const pluses: TypePlus[] = [
    {
        id: 1,
        image: human.src,
        title: 'Easy to use riding telemetry',
        description: 'The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you have been using the scooter, your traveling distance, and many more things all in an easy to use app.'
    },
    {
        id: 2,
        image: city.src,
        title: 'Coming to a city near you',
        description: 'Scoot is available in 4 major cities so far. We are expanding rapidly, so be sure to let us know if you want to see us in your hometown. We are aiming to let our scooters loose on 23 cities over the coming year.'
    },
    {
        id: 3,
        image: money.src,
        title: 'Zero hassle payments',
        description: 'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.'
    }
];
