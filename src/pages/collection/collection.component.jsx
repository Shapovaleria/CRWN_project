import React from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './collection.style.scss';


const CollectionPage = ({ collections } ) => {
  const paramsId = useParams().collectionId;
  const collection = collections ? collections[paramsId] : null;
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

const mapStateToProps = (state) => ({
  collections: selectCollections(state)
})

export default connect(mapStateToProps)(CollectionPage);
