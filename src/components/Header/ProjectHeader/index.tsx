import React from 'react';
import ProjectVoiceHeader from './ProjectVoiceHeader';
import ProjectVideoHeader from './ProjectVideoHeader';

function ProjectHeader({ localstate }: any) {
  return <>{localstate === '/video' ? <ProjectVoiceHeader /> : <ProjectVideoHeader />}</>;
}

export default ProjectHeader;
