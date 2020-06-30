import React from 'react';
import classnames from 'classnames';

import Text from '../text';

import './index.scss';

interface ISectionHeading {
  className?: string;
  text?: string;
}

interface ISectionProps {
  className?: string;
  leadingContent?: JSX.Element,
  heading?: ISectionHeading;
  subheading?: ISectionHeading;
}

const Section: React.FC<ISectionProps> = ({
  className, leadingContent, heading, subheading, children,
}) => (
  <section className={classnames({ 'layout-section': true }, className)}>
    <div className="wrapper">
      {leadingContent || <></>}
      {
          heading
            ? <Text size="H3" className={classnames({ heading: true }, heading.className)}>{heading.text || ''}</Text>
            : <></>
        }
      {
          subheading
            ? <Text size="SUB_HEADING" className={classnames({ subheading: true }, subheading.className)}>{subheading.text || ''}</Text>
            : <></>
        }
      { children }
    </div>
  </section>
);

export default Section;
