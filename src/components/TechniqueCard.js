import React from 'react';
import {Button, Modal, Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '4px solid #c7ffea',
  boxShadow: 24,
  p: 8,
};
const useStyles = makeStyles ({
  technique_button: {
    background: '#c7ffea',
    color: '#ff8af2',
    fontSize: '20px',
    fontFamily: 'Hubballi',
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

function TechniqueCard(props){
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pageData = props.page;
  return(
    <div className="technique-card">
      <Button className={classes.technique_button} onClick={handleOpen}>{pageData.pageName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="technique-modal">
          <h2 className="modal-technique-title">{pageData.pageName}</h2>
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
        </Box>
      </Modal>
    </div>
  );
}
export default TechniqueCard;
