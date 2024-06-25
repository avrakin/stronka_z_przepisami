import { Button, TextField } from "@mui/material";

const SearchBar = ({ search, setSearch, onEnterClick, onClickSearch }) => {
    return (
        <>
            <TextField
                id="outlined-basic"
                label="Search recipe"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={onEnterClick}
                fullWidth
            />
            <Button
                variant="contained"
                onClick={onClickSearch}
                sx={{ whiteSpace: 'nowrap' }}
            >
                Search
            </Button>
        </>
    );
}

export default SearchBar;