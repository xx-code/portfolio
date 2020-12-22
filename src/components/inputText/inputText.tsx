import React from 'react';

import './index.scss';

interface Props {
    name: string,
    value?: string,
    type?: string,
    error?: string,
    placeholder: string,
    isTextarea?: boolean,
    rows?: number,
    onChange?: (event: any) => void 
}

const InputText: React.FC<Props> = ({name, value, type, error, placeholder, onChange, rows, isTextarea = false}) => {
    return(
        <div className="input-text-wrapper">
            {
                isTextarea  ? 
                                <textarea
                                    className="input input-textarea"
                                    style={{borderColor: error ? '#EA2D2E' : '#0C83FD'}}
                                    rows={rows}
                                    placeholder={placeholder} 
                                    onChange={onChange}
                                    name={name}
                                    value={value}>
                                </textarea>
                            :
                            <>
                                <input 
                                    className="input"
                                    name={name}
                                    value={value}
                                    type={type}
                                    placeholder={placeholder}
                                    onChange={onChange} />
                                <div className="input-indicator" style={{backgroundColor: error ? '#EA2D2E' : '#0C83FD'}}  ></div>
                                
                            </>
            }
            <small className="error">{error ? error : ''}</small>
        </div>
    );
};

export default InputText;