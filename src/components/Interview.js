import React from 'react';
import SecondTitle from './SecondTitle';
import InterviewAccordion from './InterviewAccordion';
import interviewData from '../data/interviewData';


function Interview(){

  return(
    <div>
      <SecondTitle title="Interview" subtitle="リョウヤマの性格や考え方についてQ&A形式でお伝えします。少しひねくれた内容もありますが、等身大をお伝えしたくそのような内容になっております。どうしても不快に思う箇所がありましたら、ご指摘いただけるとありがたいです。" />



        {interviewData.map((data, index) => (
          <InterviewAccordion data={data} key={index} />
        ))}
    </div>
  );
}
export default Interview;
