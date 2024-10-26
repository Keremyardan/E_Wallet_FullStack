import PropTypes from 'prop-types';
import {memo} from 'react';
import {Box} from '@mui/material';
import {StyledRootScrollbar, StyledScrollbar} from './styles';
import scrollbar from '.';

Scrollbar.PropTypes = {
    sx: PropTypes.object,
    children: PropTypes.node,
};

function Scrollbar({children,sx, ...other}) {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' :navigator.userAgent;
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|Blackberry|IEMobile|Opera Mini/i.test(userAgent);

    if(isMobile) {
        return (
            <Box sx={{overFlow:'auto',...sx}} {...other}>
                {children}
            </Box>
        );
    }
    
    return (
        <StyledRootScrollbar>
            <StyledScrollbar timeout={500} clickOnTrack={false} sx={sx} {...other}>
                {children}
            </StyledScrollbar>
        </StyledRootScrollbar>
    );
}

export default memo(Scrollbar);