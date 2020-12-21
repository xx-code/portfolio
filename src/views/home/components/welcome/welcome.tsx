import React from 'react';
import { useTranslation } from 'react-i18next';
import { targetLetter } from '../types';
import switchColor from '../utils/switchColor';

interface Props {
    letters: [string],
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

const Welcome = () => {
    const { t } = useTranslation();

    const paragraph1 = t('hello').split("");
    const paragraph2 = t('my_name').split("");
    const paragraph3 = t('name_job').split("");
    const paragraph4 = t('job').split("");

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
                {t('job_info')}
            </p>
        </div>
    );
};

export default Welcome;