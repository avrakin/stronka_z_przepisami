import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)`
    text-align: center;
    color: silver;
    padding: 10px 0 10px 0;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,84,255,1) 100%);
`;

const Footer = () => {
    return (
        <header>
            <StyledBox position="static">
                Tomasz Kowalewski 156719
            </StyledBox>
        </header>
    );
}

export default Footer;