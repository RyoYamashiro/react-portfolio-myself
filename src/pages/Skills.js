import Title from '../components/Title'
import LanguageList from '../components/LanguageList';
import TechniqueList from '../components/TechniqueList';


function Skills(){
  return (
    <>
      <Title title="Skills" subtitle="リョウヤマの使用可能技術を紹介するページです。" />
      <LanguageList />
      <TechniqueList />
    </>
  );
}
export default Skills;
