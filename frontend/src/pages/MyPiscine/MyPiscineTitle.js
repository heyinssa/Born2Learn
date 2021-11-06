import React from 'react';

const giscineTitle = 'Git Branch Piscine';
const giscineSubtitle = 'Git Branch에 대해 배워봅시다!';

const MyPiscineTitle = () => {
  return (
    <div className="mypiscine-box">
      <h1 className="title">{giscineTitle}</h1>
      <h2 className="subtitle">{giscineSubtitle}</h2>
    </div>
  );
};

export default MyPiscineTitle;
