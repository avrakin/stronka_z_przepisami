import { Box, Typography, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    color: 'silver',
    padding: '10px 0',
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.light} 100%)`,
}));

const Footer = () => {
    return (
        <header>
            <StyledBox position="static">
                <Typography variant="body1" component="div">
                    Tomasz Kowalewski 156719
                </Typography>
            </StyledBox>
        </header>
    );
}

export default Footer;