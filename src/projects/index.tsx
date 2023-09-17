import { IProjects } from "../assets/interface/projects";
import Forest from "./../images/cover/foresttravel.png"
import ForestWebp from "./../images/cover/foresttravel.webp"
import Junit from "./../images/cover/junit.jpg"
import JunitWebp from "./../images/cover/junit.webp"
import Nvidea from "./../images/cover/nvidea.png"
import NvideaWebp from "./../images/cover/nvidea.webp"
import Dikom from "./../images/cover/dikom.png"
import DikomWebp from "./../images/cover/dikom.png"
import Dobro from "./../images/cover/dobro.png"
import DobroWebp from "./../images/cover/dobro.png"
import Vilm from "./../images/cover/cinema.png"
import VilmWebp from "./../images/cover/cinema.png"
import Delta from "./../images/cover/delta.png"
import DeltaWebp from "./../images/cover/delta.png"
import Wikipage from "./../images/cover/wikiage.png"
import WikipageWebp from "./../images/cover/wikiage.png"
import Keyboard from "./../images/cover/keyboard.png"
import KeyboardWebp from "./../images/cover/keyboard.png"
import MiShop from "./../images/cover/mi-shop.png"
import MiShopWebp from "./../images/cover/mi-shop.png"
import YandexMap from "./../images/cover/yandex-map.png"
import YandexMapWebp from "./../images/cover/yandex-map.webp"
import AgroScout from "./../images/cover/agroscout.jpg"
import AgroScoutWebp from "./../images/cover/agroscout.webp"
import Burger from "./../images/cover/burger.png"
import BurgerWebp from "./../images/cover/burger.png"
import Filmateka from "./../images/cover/filmateka.png"
import FilmatekaWebp from "./../images/cover/filmateka.png"
import Hipsum from "./../images/cover/hipsum.png"
import HipsumWebp from "./../images/cover/hipsum.png"
import Portfolio1 from "./../images/cover/portfolio-1.png"
import Portfolio1Webp from "./../images/cover/portfolio-1.png"
import Solaris from "./../images/cover/solaris.png"
import SolarisWebp from "./../images/cover/solaris.png"
import Anime from "./../images/cover/anime.png"
import AnimeWebp from "./../images/cover/anime.png"
import Ozon from "./../images/cover/ozon.png"
import OzonWebp from "./../images/cover/ozon.webp"

export const Projects: Array<IProjects> = [
    {
        id: 1,
        image: Forest,
        imageWebp: ForestWebp,
        technologies: [`HTML`, `CSS`, `Pixel-Purfect`, `Figma`],
        title: "ForestTravel",
        description: "Multi-page site for tours",
        liveLink: "http://foresttravel.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/ForestTravel/",
        repositoryName: "ForestTravel",
        category: "small"
    },

    {
        id: 2,
        image: Junit,
        imageWebp: JunitWebp,
        technologies: [`HTML`, `CSS`, `Pixel-Purfect`, `Sass`, `JavaScript`, `Figma`],
        title: "Unit",
        description: "Landing page for advertising pages",
        liveLink: "http://junit.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Junit/",
        repositoryName: "Junit",
        category: "big"
    },
    {
        id: 3,
        image: Nvidea,
        imageWebp: NvideaWebp,
        technologies: [`Pug`, `Sass`, `Pixel-Purfect`, `Gulp (plugins)`, `Figma`],
        title: "Nvidea",
        description: "Test tasks from companies",
        liveLink: "http://nvidea.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Nvidea-Test",
        repositoryName: "Nvidea-Test",
        category: "small"
    },
    {
        id: 4,
        image: Dikom,
        imageWebp: DikomWebp,
        technologies: [`HTML`, `Sass`, `Pixel-Purfect`, `PHP`, `ReactJS`, `Figma`],
        title: "Dikom",
        description: "DiKom is a company where sons work side by side with their parents. (Teamwork)",
        liveLink: "https://www.dikom.ru/",
        repository: undefined,
        repositoryName: undefined,
        category: "big"
    },
    {
        id: 5,
        image: Dobro,
        imageWebp: DobroWebp,
        technologies: [`HTML`, `Sass`, `Pixel-Purfect`, `ReactJS`, `Figma`],
        title: "Dobro",
        description: "We make dobro furniture to make the working environment more comfortable, the home more comfortable, and people happier. (Teamwork)",
        liveLink: "https://dobro.io/",
        repository: undefined,
        repositoryName: undefined,
        category: "big"
    },
    {
        id: 6,
        image: Vilm,
        imageWebp: VilmWebp,
        technologies: [`HTML`, `Sass`, `Figma`, `JavaScript`],
        title: "Vilm (Cinema)",
        description: "Vilm - movie site to watch your favorite movies.",
        liveLink: "http://cinema.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Cinema",
        repositoryName: "Cinema",
        category: "small"
    },
    {
        id: 7,
        image: Delta,
        imageWebp: DeltaWebp,
        technologies: [`HTML`, `CSS`, `Pixel-Purfect`, `Figma`, `PHP`],
        title: "ENERGON",
        description: "ENERGON is a developer and supplier of energy storage and generation solutions. (Teamwork)",
        liveLink: "https://delta-solar.ru/product/solnechnye-moduli/delta-nxt/delta-nxt-200-39-m12-hc/",
        repository: undefined,
        repositoryName: undefined,
        category: "big"
    },
    {
        id: 8,
        image: Wikipage,
        imageWebp: WikipageWebp,
        technologies: [`JavaScript (Markdown.js)`, `HTML`, `CSS`],
        title: "WikiPages",
        description: "WikiPages is a cloned version of Wikipedia that uses markdown",
        liveLink: "http://wikipage.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Wikipage",
        repositoryName: "WikiPages",
        category: "small"
    },
    {
        id: 9,
        image: Keyboard,
        imageWebp: KeyboardWebp,
        technologies: [`HTML`, `CSS`, `JavaScript`],
        title: "Keyboard Trainer",
        description: "Keyboard Trainer who types slowly",
        liveLink: "http://keyboard.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Keyboard",
        repositoryName: "Keyboard",
        category: "small"
    },
    {
        id: 10,
        image: MiShop,
        imageWebp: MiShopWebp,
        technologies: [`HTML`, `CSS`, `JavaScript`, `Webpack.JS`, `Json-Server`, `Bootstrap`],
        title: "mi-shop.com",
        description: "Mi-shop is an online store for mi-brand products. With admin panel.",
        liveLink: "http://mi-shop.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Mi-Shop",
        repositoryName: "mi-shop",
        category: "big"
    },
    {
        id: 11,
        image: YandexMap,
        imageWebp: YandexMapWebp,
        technologies: [`HTML`, `CSS`, `JavaScript`, `Yandex-API`, `Figma`],
        title: "Yandex API",
        description: "Find a geolocation using the Yandex API",
        liveLink: "http://yandex-map.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Yandex-map",
        repositoryName: "Yandex-map",
        category: "small"
    },
    {
        id: 12,
        image: AgroScout,
        imageWebp: AgroScoutWebp,
        technologies: [`ReactJS (Hooks)`, `Scss`, `JavaScript`, `Figma`, `Pixel-Purfect`],
        title: "AgroScout",
        description: "AgroScout - unmanned technologies for agriculture and industry.",
        liveLink: "https://agroscout.vercel.app/",
        repository: "https://github.com/KhaetbekIT/AgroScout",
        repositoryName: "AgroScout",
        category: "big"
    },
    {
        id: 13,
        image: Burger,
        imageWebp: BurgerWebp,
        technologies: [`Angular`, `CSS`, `TypeScript`, `Figma`],
        title: "Burgers",
        description: "Site for ordering burgers that was created with the help of Angular and TopeScript.",
        liveLink: "https://burgers-chedder.netlify.app/",
        repository: "https://github.com/KhaetbekIT/Burgers",
        repositoryName: "Burgers",
        category: "small"
    },
    {
        id: 14,
        image: Filmateka,
        imageWebp: FilmatekaWebp,
        technologies: [`HTML`, `CSS`, `Bootstrap v4.1`, `JS`],
        title: "Filmateka",
        description: "Film library - list of adding a movie to the site.",
        liveLink: "http://filmateka.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Filmateka",
        repositoryName: "Filmateka",
        category: "small"
    },
    {
        id: 15,
        image: Hipsum,
        imageWebp: HipsumWebp,
        technologies: [`Pug`, `Scss`, `JavaScript`, `Gulp (plugins)`, `Node_modules`],
        title: "Hipsum",
        description: "Hipsum blog post for news.",
        liveLink: "http://hipsum-blog.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Hipsum-Blog",
        repositoryName: "Hipsum Blog",
        category: "small"
    },
    {
        id: 16,
        image: Portfolio1,
        imageWebp: Portfolio1Webp,
        technologies: [`HTML`, `Scss`, `JavaScript (AOS.js)`, `Pixel-Purfect`],
        title: "Portfolio",
        description: "First portfolio.",
        liveLink: "http://portfolio.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Portfolio",
        repositoryName: "Portfolio",
        category: "small"
    },
    {
        id: 17,
        image: Solaris,
        imageWebp: SolarisWebp,
        technologies: [`HTML`, `CSS`, `JavaScript (JQuery.js)`],
        title: "Solaris",
        description: "Online calculator for calculating money at a given dollar rate using JQuery.js",
        liveLink: "http://solaris.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Solaris",
        repositoryName: "Solaris",
        category: "small"
    },
    {
        id: 18,
        image: Anime,
        imageWebp: AnimeWebp,
        technologies: [`HTML`, `SCSS`, `JavaScript`, `Firebase`, `CSS`, `Webpack.JS`],
        title: "Anime",
        description: "Who loves anime?",
        liveLink: "http://anime.whpchust.ru",
        repository: "https://github.com/KhaetbekIT/Anime",
        repositoryName: "Anime",
        category: "big"
    },
    {
        id: 19,
        image: Ozon,
        imageWebp: OzonWebp,
        technologies: [`HTML`, `SCSS`, `JavaScript`, `Firebase`, `CSS`, `Webpack.JS`],
        title: "Ozon",
        description: "Online store Ozon",
        liveLink: "http://ozon.whpchust.ru/",
        repository: "https://github.com/KhaetbekIT/ozon",
        repositoryName: "OZON",
        category: "small"
    }
]