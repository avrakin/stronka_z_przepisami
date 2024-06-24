import { AppBar, styled, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  text-align: center;
  color: silver;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,84,255,1) 100%);
`;

const Header = () => {
    return (
        <header>
            <StyledAppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        Recipe Finder
                    </Typography>
                    <Box>
                        <Link to="/" style={{ color: 'silver', textDecoration: 'none' }}>
                            Home
                        </Link>
                    </Box>
                </Toolbar>
            </StyledAppBar>
        </header>
    );
}

export default Header;