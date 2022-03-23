import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function InterviewAccordion(props){

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return(

  <Accordion sx={{border: '3px solid #c7ffea', borderRadius: '10px'}} expanded={expanded === 'panel'+ props.data.number} onChange={handleChange('panel'+ props.data.number)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2bh-content"
      id="panel2bh-header"
    >
      <Typography sx={{flexShrink: 0, color: '#ff8af2', marginRight: '8px' }}>{'Q'+ props.data.number}</Typography>
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
