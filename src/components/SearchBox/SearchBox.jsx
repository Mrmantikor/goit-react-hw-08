import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { TextField, Box, Typography } from '@mui/material';
import s from './SearchBox.module.scss';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box className={s['search-box']}>
      <Typography className={s['search-box__title']}>
        Find contacts by name
      </Typography>
      <TextField
        value={filter}
        onChange={handleChange}
        label="Search by name"
        variant="outlined"
        placeholder="Search by name..."
        className={s['search-box__input']}
      />
    </Box>
  );
};

export default SearchBox;
