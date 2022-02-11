import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollections, selectCollection } from '../../redux/shop/shop.selectors';
import './collection.style.scss';


const CollectionPage = ({ collections } ) => {
  const paramsId = useParams().collectionId;
  const collection = useSelector(selectCollection(paramsId));
  const {title, items} = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
};

export default CollectionPage;
