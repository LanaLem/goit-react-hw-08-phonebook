import { Box } from '../../constants/Box';
import {
  InputFilter,
  LabelFilter,
  IconSearch,
  FilterWrap,
} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      <LabelFilter htmlFor="filter">
        Find contacts by name:
        <FilterWrap display="flex">
          <IconSearch />
          <InputFilter
            type="text"
            name="filter"
            title="Filter contacts by name or by number"
            required
            onChange={event => dispatch(addFilter(event.target.value))}
          />
        </FilterWrap>
      </LabelFilter>
    </Box>
  );
};
