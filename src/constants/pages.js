import { dark, red, white } from '../styles/themes';
import Introduction1 from '../components/Introduction1';
import Introduction2 from '../components/Introduction2';
import Introduction3 from '../components/Introduction3';
import Last from '../components/Last';
import Menu from '../components/Menu';

export default {
    INTRODUCTION_1: {
        name: 'INTRODUCTION_1',
        component: Introduction1,
        next: 'INTRODUCTION_2',
        theme: dark,
    },
    INTRODUCTION_2: {
        name: 'INTRODUCTION_2',
        component: Introduction2,
        next: 'INTRODUCTION_3',
        theme: red,
    },
    INTRODUCTION_3: {
        name: 'INTRODUCTION_3',
        component: Introduction3,
        next: 'MENU',
        theme: white,
    },
    MENU: {
        name: 'MENU',
        component: Menu,
        next: 'undefined',
        paths: {
            causes: 'CAUSES',
            symptoms: 'SYMPTOMS',
            categories: 'CATEGORIES',
        },
        theme: dark,
    },
    LAST: {
        name: 'LAST',
        component: Last,
        theme: dark,
    }
}

