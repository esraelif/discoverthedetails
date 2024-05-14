import Ist from '../src/images/main.jpg'
import efes from '../src/images/efes.jpg'
import antalya from '../src/images/antalya.jpg'
import sumela from '../src/images/sumela.jpg'
import gaziantep from '../src/images/gaziantep.jpg'
import pamukkale from '../src/images/pamukkale.jpg'
export const pageLinks = [
    {
        id: 1,
        href: '#home',
        text: 'Home'
    },
    {
        id: 2,
        href: '#about',
        text: 'About'
    }, {
        id: 3,
        href: '#services',
        text: 'Services'
    },
    {
        id: 4,
        href: '#tours',
        text: 'Tours'
    }
]

export const socialLinks = [
    {
        id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook'
    },
    {
        id: 2, href: 'https://www.twitter.com', icon: 'fab fa-x-twitter'
    },
    {
        id: 3, href: 'https://www.squarespace.com', icon: 'fa-brands fa-instagram'
    }

]
export const services = [
    {
        id: 1, icon: 'fas fa-wallet fa-fw', title: 'Saving Money', text: 'Explore the world affordably with our tour company, where we offer budget-friendly packages without compromising on quality or experiences.'
    },
    {
        id: 2, icon: 'fas fa-tree fa-fw', title: 'Endless Hiking', text: 'Embark on endless hiking adventures with our diverse range of trails and destinations, catering to all levels of experience and preferences.'
    },
    {
        id: 3, icon: 'fas fa-socks fa-fw', title: 'Amazing Comfort', text: 'Indulge in amazing comfort as you journey through breathtaking landscapes and cultural wonders with our luxurious tour accommodations and personalized service.'
    },
]



export const tours = [
    {
        id: 1, image: Ist, date: 'August 26th, 2024', title: 'Istanbul Adventure',
        info: 'Immerse yourself in the vibrant blend of East and West in Istanbul, where ancient landmarks like the Hagia Sophia and the Blue Mosque stand alongside modern delights such as bustling bazaars and trendy cafes. Experience rich history, diverse culture, and stunning views straddling two continents.',
        location: 'Istanbul',
        duration: '6',
        price: '$2,500',

    },
    {
        id: 2, image: efes, date: 'October 1th, 2024', title: 'City of Ephesus',
        info: 'Step back in time as you explore the ancient city of Ephesus, where remnants of grandeur such as the Library of Celsus and the Great Theatre transport you to the heart of classical civilization. Wander through marble streets lined with historical marvels and marvel at the architectural brilliance of this UNESCO World Heritage Site.',
        location: 'Izmir',
        duration: '11',
        price: '$1,400',

    },
    {
        id: 3, image: antalya, date: 'September 15th, 2024', title: 'Explore Antalya',
        info: 'Experience the epitome of sun, sea, and history in Antalya, where pristine beaches meet ancient ruins. From the stunning landscapes of the Turquoise Coast to the captivating history of sites like Perge and Aspendos, Antalya offers a perfect blend of relaxation and cultural exploration.',
        location: 'Antalya',
        duration: '8',
        price: '$5,000',

    },
    {
        id: 4, image: sumela, date: 'December 5th, 2024', title: 'Sumela highlights',
        info: 'Embark on an unforgettable journey through the enchanting Black Sea region, where lush green landscapes, charming villages, and warm hospitality await. Explore the historic cities of Trabzon, Rize, and Samsun, immerse yourself in the regions unique culture, and savor the flavors of traditional Black Sea cuisine.With breathtaking scenery and rich heritage, this tour promises an authentic and memorable adventure.',
        location: 'Trabzon',
        duration: '10',
        price: '$2,800',

    },
    {
        id: 5, image: pamukkale, date: 'June 5th, 2024', title: 'Pamukkale Travertine',
        info: 'Discover the surreal beauty of Pamukkale, where cascading terraces of calcium-rich waters create a mesmerizing natural wonderland. Marvel at the gleaming white travertine pools, explore the ancient ruins of Hierapolis, and rejuvenate in the soothing thermal springs. Pamukkale promises a unique blend of history, nature, and relaxation, making it a must-visit destination in Turkey.',
        location: 'Denizli',
        duration: '8',
        price: '$1,800',

    },
    {
        id: 6, image: gaziantep, date: 'May 15th, 2024', title: 'Gaziantep Khan',
        info: '  Explore the culinary capital of Turkey in Gaziantep, where centuries-old recipes and vibrant spices create a gastronomic paradise. Wander through bustling bazaars, admire the citys rich history reflected in its ancient architecture, and indulge in mouthwatering dishes like baklava, kebabs, and Turkish delight.Gaziantep offers a sensory journey like no other, captivating visitors with its flavors, culture, and hospitality.',
        location: 'Gaziantep',
        duration: '4',
        price: '$800',

    },
]