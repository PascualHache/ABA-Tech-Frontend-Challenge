import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import CoverItem from './CoverItem';

export const Menu = (list, type) => list.map(el => {
  
  const { name, images, icons } = el;
  return (
    <CoverItem
      text={name}
      key={name}
      images={type==="releases"?images[1].url:(type==="categories"?icons[0].url:images[0].url)}
    />
  );
});

export const CoversCarousel = (props) => {
  const { data, type } = props;
  
  const menu = Menu(data, type);

  return (
    <div className="covers-carousel">
      <div className="title-line-text">
        {props.title}<hr className="title-line" />
      </div>
      <ScrollMenu
        data={menu}
        arrowLeft={<IoIosArrowBack />}
        arrowRight={<IoIosArrowForward />}
        wheel={false}
        alignCenter={false}
      />
    </div>
  );
}

CoversCarousel.defaultProps = {
  data: []
}

export default CoversCarousel;
