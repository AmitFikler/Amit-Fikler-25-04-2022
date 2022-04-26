import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function SearchCity() {
  return (
    <div className='search-city'>
      <FormControl variant='standard'>
        <InputLabel htmlFor='input-with-icon-adornment'>
          Search a city..
        </InputLabel>
        <Input
          id='search-a-city'
          startAdornment={
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Button variant='contained' endIcon={<SearchIcon />}>
          Search
        </Button>
      </FormControl>
    </div>
  );
}

export default SearchCity;
