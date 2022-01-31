import React from "react";
import { Route, Routes, useParams } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


const ShopPage = () => {
  // передаю как проп параметр из адресной cтроки (тут пустой, на кождой коллекции будет свой )
  const params = useParams();
  return (
    <div className='shop-page'>
      <Routes>
        <Route path='/' element={<CollectionsOverview />} />
        <Route path={`/:collectionId/*`} element={<CollectionPage params={params}/>} >
     </Route>
      </Routes>
    </div>
  )
};

export default ShopPage;