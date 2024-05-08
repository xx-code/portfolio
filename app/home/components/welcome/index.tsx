import React from 'react';
import { targetLetter } from '../types';
import switchColor from '../utils/switchColor';

interface Props {
    letters: Array<string>,
    highLetters: Array<targetLetter>
};


const LettersDisplaying: React.FC<Props> = ({letters, highLetters}) => {
    return(
        <>
            {
                letters.map((letter, index) => {
                    return <span 
                                key={`${index}`}
                                className={`letter ${switchColor(letter, highLetters)}`}>{letter}</span>
                })
            }
        </>
    );
};

const Welcome: React.FC = () => {
    // const { t } = useTranslation();

    const paragraph1 = 'hello'.split(""); //t('hello').split("");
    const paragraph2 = 'my_name'.split(""); //t('my_name').split("");
    const paragraph3 = 'name_job'.split(""); //t('name_job').split("");
    const paragraph4 = 'job'.split(""); //t('job').split("");

    return (
        <div className="welcome">
            <div className="welcome-wrapper">
                <div className="para">
                   {
                       <LettersDisplaying 
                            letters={paragraph1} 
                            highLetters={[]} />
                   }
                   <span className="letter">,</span>
                </div>
                <div className="para">
                    {
                        <LettersDisplaying 
                            letters={paragraph2}
                            highLetters={[{letter: 'A', style: 'blue-letter'}]} />
                    }
                </div>
                <div className="para">
                    {
                        <LettersDisplaying 
                            letters={paragraph3} 
                            highLetters={[{letter: 'T', style: 'pink-letter'}, {letter: 'F', style: 'blue-letter'}]} />
                    }
                </div>
                <div className="para">
                    {
                        <LettersDisplaying 
                            letters={paragraph4}
                            highLetters={[{letter: 'D', style: 'pink-letter'}]} />
                    }
                    <span className="letter">.</span>
                </div>
            </div>
            <p className="job-info">
                {'job_info'}
            </p>
        </div>
    );
};

export default Welcome;