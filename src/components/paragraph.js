import React from 'react';
import { config, useTransition } from 'react-spring';
import { ParagraphText, ParagraphWrapper } from '../styles/components';


const Paragraphs = () => {
  const contents = [
    'I am living in Toronto, Ontario. I have been writing code for a couple of years and have gotten my hand dirty in various languages and frameworks. I love coding back-end development but also comfortable if I have to code in the front-end.',
    'Everything started with my love and passion for the technology, come from the old computer my dad bought for me back when I was a kid. Ever since then, I try to control it, to make friend with it and when the first time I knew about Pascal and what I could do, I realized I found the purpose of my life.',
    'I am responsible for my own project and take self-development seriously.I task and try to push myself to the limit every single day and enjoy every second of it. My goal is to work as a web developer in a team of passionate, amazing people and work hard to achieve it.',
    'If you are an employer looking to hire or a friend who just wanna talk, feel free to contact me',
  ];
  const spices = useTransition(contents, null, {
    config: config.wobbly,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
    trail: 600,
    unique: true,
  });
  const renderTexts = () =>
    spices.map(({ item, key, props }) => {
        return <ParagraphText key={key} style={{ ...props }}>
          {item}
        </ParagraphText>;
      },
    );

  return (
    <ParagraphWrapper>
      {renderTexts()}
    </ParagraphWrapper>
  );
};


export default Paragraphs;
