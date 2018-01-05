import { connect, Dispatch } from 'react-redux';
import { setVisibilityFilter, VisibilityAction } from '../actions/index';
import { RootState } from '../states/index';
import { VisibilityFilter } from '../states/VisibilityState';
import Link from '../components/Link';

interface FilterLinkProps {
  filter: VisibilityFilter;
}

const mapStateToProps = (state: RootState, ownProps: FilterLinkProps) => {
  return {
    active: state.visibilityFilter.filter === ownProps.filter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<VisibilityAction>, ownProps: FilterLinkProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
