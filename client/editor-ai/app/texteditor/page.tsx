import React from 'react';
import TextEditor from './TextEditor';
import Header from '../Header';

const homepage = () => {
  const priorityProjects = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects = [{ name: 'Project 3' }, { name: 'Project 4' }];

  return (
    
    <div className = "homepage"> 
        <Header />
        <TextEditor />
        
    </div>
    
  );
};

export default homepage;