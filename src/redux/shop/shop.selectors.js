import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections 
  ? Object.keys(collections).map(key => collections[key]) 
  : []
);

export const selectCollection = (collectionId) => createSelector(
  [selectCollections],
  collections => collections ? collections[collectionId] : null
);

export const selectItem = (itemId) => createSelector(
  [selectCollectionsForPreview],
  collections => {
    for (let collection of collections) {
      for (let item of collection.items) {
        if (+item.id === +itemId) return item
      }
    }
  }
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);

