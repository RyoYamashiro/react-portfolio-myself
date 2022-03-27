import React from 'react';
import {Button, Modal, Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@mui/icons-material/Close';

import styled from 'styled-components';
import { media, font_size_xxl, font_family_corp, space_s, space_m, space_l, space_xl, space_3l, green, pink } from '../utils/styledComponents';



const TechniqueCardContanier = styled.div`
  width: calc(50% - ${space_m});
  margin-right: ${space_m};
  margin-bottom: ${space_m};
  float: left;
  ${media.handheld`
    width: 100%;
    margin-right: 0;
  `}
  &:nth-child(even){
    margin-right: 0;
  }
`;
const StyledBox = styled(Box)`
  padding: ${space_xl};
  border-radius: ${space_m};
  width: 600px;
  border: 4px solid ${green};
  ${media.handheld`
    padding: ${space_m};
    box-sizing: border-box;
    width: 90%;
  `}
  .technique{
    margin-bottom: ${space_m};
  }
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
};
const useStyles = makeStyles ({
  technique_button: {
    background: green,
    color: pink,
    fontSize: '20px',
    fontFamily: font_family_corp,
    display: 'block',
    width: '100%',
    transition: '.3s',
    minHeight: '60px',
    '&:hover': {
      background: '#bff2e0',
      transform: 'translateY(-3px)',
      transition: '.3s'

    }
  }
});


const ModalTitle = styled.div`
  text-align: center;
  color: ${pink};
  font-size: ${font_size_xxl};
  font-family: ${font_family_corp};
`;
const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 15px;
  top: 15px;
  padding: ${space_s};
  border-radius: 50%;
  color: ${pink};
  background: ${green};
  ${media.handheld`
    right: 10px;
    top: 10px;
  `}

`;

function TechniqueCard(props){
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pageData = props.page;
  return(
    <TechniqueCardContanier>
      <Button className={classes.technique_button} onClick={handleOpen}>{pageData.pageName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox sx={style}>
          <StyledCloseIcon onClick={handleClose} fontSize="large" />
          <ModalTitle>{pageData.pageName}</ModalTitle>
          {
            pageData.techniques.map((technique, index) => {
              return (
                <div className="technique" key={index}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {technique.usedTechnique}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {technique.info}
                  </Typography>
                </div>

              )
            })
          }
        </StyledBox>
      </Modal>
    </TechniqueCardContanier>
  );
}
export default TechniqueCard;
