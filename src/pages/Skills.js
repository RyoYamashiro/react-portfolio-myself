import Title from '../components/Title'
import LanguageList from '../components/LanguageList';
import TechniqueList from '../components/TechniqueList';


function Skills(){
  return (
    <>
      <Title title="Skills" subtitle="Here are the technologies I’m familiar with and use in my projects." />
      <LanguageList />
      <TechniqueList />
    </>
  );
}
export default Skills;
