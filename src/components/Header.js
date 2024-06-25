import { AppBar, styled, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    textAlign: 'center',
    color: 'silver',
    background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
  }));

const Header = () => {
    return (
        <header>
            <StyledAppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <img src={"/recipes.svg"} alt="Recipe Finder Logo" style={{ height: '50px' }} />
                        <Typography variant="h6" component="div">
                            Recipe Finder
                        </Typography>
                    </Box>
                    <Box>
                        <Link to="/" style={{
                            color: 'silver', textDecoration: 'none'
                        }}>
                            <Typography variant="h6" component="div" sx={{
                                '&:hover': {
                                    textDecoration: 'underline'
                                }
                            }}>
                                Home
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </StyledAppBar>
        </header>
    );
}

export default Header;