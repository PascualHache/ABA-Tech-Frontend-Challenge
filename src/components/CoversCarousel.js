import React from 'react'

import ScrollMenu from 'react-horizontal-scrolling-menu';

// list of items
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
  // ,
  // { name: 'item10' },
  // { name: 'item20' },
  // { name: 'item30' },
  // { name: 'item40' },
  // { name: 'item50' },
  // { name: 'item60' },
  // { name: 'item70' },
  // { name: 'item80' },
  // { name: 'item90' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
const state = { selected: 0 };

export const CoversCarousel = () => {

  // const state = { selected: 0 };
  const onSelect = key => {
    // setState({ selected: key });
  }
  const { selected } = state;
  const menu = Menu(list, 0);

  return (
    // <div className="covers-carousel">
    <ScrollMenu
      data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
    />
   
  );

}
export default CoversCarousel;
