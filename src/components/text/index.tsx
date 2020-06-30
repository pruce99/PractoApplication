import React from 'react';
import classnames from 'classnames';

import capitalizeWords from './capitialize-word';
import capitalizeFirstLetter from './capitialize-first-letter';

import './index.scss';

interface ITextProps {
  size?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'SUB_HEADING' | 'TEXT';
  capitalize?: 'WORDS' | 'FIRST_LETTER';
  className?: string;
  children: string;
}

const Text: React.FC<ITextProps> = ({
  size = 'TEXT', className, capitalize, children,
}) => {
  let text = children;
  if (capitalize) {
    if (capitalize === 'WORDS') text = capitalizeWords(text);
    else if (capitalize === 'FIRST_LETTER') text = capitalizeFirstLetter(text);
  }

  switch (size) {
    case 'H1': return (<h1 className={classnames(className)}>{text}</h1>);
    case 'H2': return (<h2 className={classnames(className)}>{text}</h2>);
    case 'H3': return (<h3 className={classnames(className)}>{text}</h3>);
    case 'H4': return (<h4 className={classnames(className)}>{text}</h4>);
    case 'H5': return (<h5 className={classnames(className)}>{text}</h5>);
    case 'H6': return (<h6 className={classnames(className)}>{text}</h6>);
    case 'SUB_HEADING': return (<h6 className={classnames({ 'text-subheading': true }, className)}>{text}</h6>);
    case 'TEXT': default: return (<span className={classnames({ text: true }, className)}>{text}</span>);
  }
};

export default Text;
