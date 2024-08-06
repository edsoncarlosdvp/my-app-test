import TextField from '@mui/material/TextField';

interface ISearchInput {
    searchTerm: any,
    setSearchTerm: any
}

const SearchInput = ({ searchTerm, setSearchTerm }: ISearchInput) => {
  return (
    <TextField
      label="Digite a matrícula"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth
    />
  );
};

export default SearchInput;
