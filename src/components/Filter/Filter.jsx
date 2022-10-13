import { Box } from 'constants';
import * as SC from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      <SC.LabelFilter htmlFor="filter">
        Find contacts by name:
        <SC.FilterWrap display="flex">
          <SC.IconSearch />
          <SC.InputFilter
            type="text"
            name="filter"
            title="Filter contacts by name or by number"
            required
            onChange={event => dispatch(addFilter(event.target.value))}
          />
        </SC.FilterWrap>
      </SC.LabelFilter>
    </Box>
  );
};
