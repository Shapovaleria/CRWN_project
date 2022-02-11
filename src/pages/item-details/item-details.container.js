import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import ItemDetailsPage from './item-details.component';


const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const ItemDetailsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ItemDetailsPage);

export default ItemDetailsContainer;