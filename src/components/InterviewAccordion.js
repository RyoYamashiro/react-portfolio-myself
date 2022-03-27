import {useState} from 'react';

import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panelSummary: {
      width: '100%',
      paddingRight: '8px'
    }
  })
);

function InterviewAccordion(props){
  const classes = useStyles();

  return(

  <Accordion sx={{border: '4px solid #c7ffea', borderRadius: '10px', boxShadow: 'none'}}>
    <AccordionSummary
      className={classes.panelSummary}
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography sx={{flexShrink: 0, color: '#ff8af2', marginRight: '8px', marginLeft: '8px' }}>{'Q'+ props.data.number}</Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        {props.data.question}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {props.data.answer}
      </Typography>
    </AccordionDetails>
  </Accordion>
);
}
export default InterviewAccordion;
