import { darkTheme, redTheme, whiteTheme } from '../styles/themes';
import Introduction1 from '../components/Introduction1';
import Introduction2 from '../components/Introduction2';
import Introduction3 from '../components/Introduction3';
import Last from '../components/Last';
import Menu from '../components/Menu';
import Categories1 from '../components/Categories1';

export default {
    INTRODUCTION_1: {
        name: 'INTRODUCTION_1',
        component: Introduction1,
        next: 'INTRODUCTION_2',
        theme: darkTheme,
    },
    INTRODUCTION_2: {
        name: 'INTRODUCTION_2',
        component: Introduction2,
        next: 'INTRODUCTION_3',
        theme: redTheme,
    },
    INTRODUCTION_3: {
        name: 'INTRODUCTION_3',
        component: Introduction3,
        next: 'MENU',
        theme: whiteTheme,
    },
    MENU: {
        name: 'MENU',
        component: Menu,
        next: 'undefined',
        paths: {
            causes: 'CAUSES_1',
            symptoms: 'SYMPTOMS_1',
            categories: 'CATEGORIES_1',
        },
        theme: darkTheme,
    },
    CATEGORIES_1: {
        name: 'CATEGORIES_1',
        component: Categories1,
        next: 'undefined',
        theme: redTheme,
    },
    LAST: {
        name: 'LAST',
        component: Last,
        theme: darkTheme,
    }
}

