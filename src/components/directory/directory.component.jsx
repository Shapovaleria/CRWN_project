import React from "react";
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss'

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className='directory-menu'>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </div>
  )
};

export default Directory;