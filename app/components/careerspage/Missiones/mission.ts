import missionImage from '../../../img/mis.png';

export type TypeMission = {
    id: number;
    image: string;
    title: string;
    description: string;
};

export const missiones: TypeMission[] = [
    {
        id: 1,
        image: missionImage.src,
        title: 'Care to join our mission?',
        description: 'Were always looking for ambitious individuals to help us on our journey. If you are passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!'
    }
];