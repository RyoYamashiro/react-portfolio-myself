import React from 'react';
import SecondTitle from './SecondTitle';
import InterviewAccordion from './InterviewAccordion';
import interviewData from '../data/interviewData';


function Interview(){

  return(
    <div>
      <SecondTitle title="Interview" subtitle="リョウヤマの性格や考え方についてQ&A形式でお伝えします。" />



        {interviewData.map((data, index) => (
          <InterviewAccordion data={data} key={index} />
        ))}
    </div>
  );
}
export default Interview;
