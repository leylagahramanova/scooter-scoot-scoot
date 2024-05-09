export type TypeQuestion = {
    id: number;
    question: string;
    answer: string;
    position: string;
};

export type TypeCategory = {
    id: number;
    category: string;
    questions: TypeQuestion[];
};

export const categories: TypeCategory[] = [
    {
        id: 1,
        category: 'How it works',
        questions: [
            {
                id: 1,
                question: 'How do I download the app?',
                answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you will be re-directed to the correct page.',
                position: 'open',
            },
            {
                id: 2,
                question: 'Can I find a nearby Scoots?',
                answer: 'Yes',
                position: 'close',
            },
            {
                id: 3,
                question: 'Do I need a license to ride?',
                answer: 'Yes',
                position: 'close',
            }
        ],
    },
    {
        id: 2,
        category: 'Safe driving',
        questions: [
            {
                id: 1,
                question: 'Should I wear a helmet?',
                answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.',
                position: 'open',
            },
            {
                id: 2,
                question: 'Can I find a nearby Scoots?',
                answer: 'Yes',
                position: 'close',
            },
            {
                id: 3,
                question: 'What if I damage my Scoot?',
                answer: 'Yes',
                position: 'close',
            },
            
        ],

    },
];
