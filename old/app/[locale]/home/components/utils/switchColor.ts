import { targetLetter } from '../types';

const switchColor = (letter: string, targetLetters: Array<targetLetter>) => {
    for(let i = 0; i < targetLetters.length; i++){
        if (letter === targetLetters[i].letter) {
            return targetLetters[i].style
        }
    };
    return ''
};

export default switchColor;