interface Category {
    name: string,
    pathPhoto?: string,
    link?: string,
    price?: string
}

export const categories: Category[] = [
    {
        name: 'Профнастил',
        link: '/category/proflist',
        pathPhoto: '/images/proflist.png'
    },
    {
        name: 'Металочерепица',
        pathPhoto: '/images/metal-list.png'
    },
    {
        name: 'Гладкий лист',
        pathPhoto: '/images/smooth-list.png'
    },
    {
        name: 'Саморезы',
        pathPhoto: '/images/screw.png'
    },
];
