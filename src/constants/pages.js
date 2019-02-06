import Introduction from '../components/Introduction';
import Introduction2 from '../components/Introduction2';
import Last from '../components/Last';
import { dark, red } from '../styles/themes';

export default {
    INTRODUCTION: {
        name: 'INTRODUCTION',
        component: Introduction,
        next: 'INTRODUCTION_2',
        theme: dark,
    },
    INTRODUCTION_2: {
        name: 'INTRODUCTION_2',
        component: Introduction2,
        next: 'undefined',
        theme: red,
    },
    LAST: {
        name: 'LAST',
        component: Last,
        theme: dark,
    }
}

