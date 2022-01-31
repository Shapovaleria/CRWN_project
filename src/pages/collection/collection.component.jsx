import React from 'react';
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './collection.style.scss';


// получаю коллекцию из параметра адресной строки (из Shop) и ищу по всем коллекциям по этому ключу
const CollectionPage = ({ params, collections} ) => {
  const collection = collections[params["*"]];
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
