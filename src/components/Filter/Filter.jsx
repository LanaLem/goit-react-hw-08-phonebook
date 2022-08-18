import PropTypes from 'prop-types';
import { Box } from '../../constants/Box';
import {
  InputFilter,
  LabelFilter,
  IconSearch,
  FilterWrap,
} from './Filter.styled';

export const Filter = ({ onFilterInput }) => {
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
            onChange={event => onFilterInput(event)}
          />
        </FilterWrap>
      </LabelFilter>
    </Box>
  );
};

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
};
