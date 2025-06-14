const techniqueData = [
  {
    pageName: 'All Pages',
    techniques: [
      {
        usedTechnique: 'React',
        info: 'I built the project with Create React App and mainly used core React features across the site.'
      },
      {
        usedTechnique: 'react-dom-router',
        info: 'I used fundamental React features to implement this site as a Single Page Application (SPA).'
      },
      {
        usedTechnique: 'Responsive Design',
        info: 'Each page includes styles optimized for mobile display to ensure a smooth user experience across devices.'
      },
      {
        usedTechnique: 'MUI',
        info: 'For components like buttons and modals, I used the MUI (Material-UI) library to ensure consistency and accessibility.'
      },
      {
        usedTechnique: 'styled-components',
        info: 'I use it to apply styles directly within each component for better modularity and maintainability.'
      }
    ]
  },
  {
    pageName: 'Skills',
    techniques: [
      {
        usedTechnique: 'GithubAPI',
        info: 'In order to numerically represent my familiarity with each language, I collect the number of file extensions uploaded in my GitHub repositories and use them as the basis for percentage estimates.'
      },
      {
        usedTechnique: 'useEffect',
        info: 'Because the GitHub API is asynchronous, I handle the data after it has been fetched to trigger rendering and other related processes.'
      }
    ]
  },
  {
    pageName: 'Bio',
    techniques: [
      {
        usedTechnique: 'This page doesn’t use any unique technologies.',
        info: 'MUI, which is used site-wide, is the primary library used on this page as well.'
      }
    ]
  },
  {
    pageName: 'Contact',
    techniques: [
      {
        usedTechnique: 'React Hook form',
        info: 'This is used to perform validation on the input fields in the contact form to ensure correct data is submitted.'
      },
      {
        usedTechnique: 'EmailJS',
        info: 'When a message is submitted through the contact form, a notification is sent to me in real time.'
      }
    ]
  },

];

export default techniqueData;
