import { Box, Typography } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';

const Header = () => {
    return (
        <Box sx={ 
            {
                p: 2,
                width: '100%',
                height: 80,
                borderBottom: 1,
                borderColor: 'primary.main'
            } 
        }>
            <Typography variant="h3" component="h1" align="center">
                Pergaminho 
                <CreateIcon fontSize="large"/>
            </Typography>
            
        </Box>
    );
}

export default Header;