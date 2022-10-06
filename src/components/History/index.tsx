import HistoryProjectLayout from '@/layout/HistoryProjectLayout';
import HistoryVideoLayout from '@/layout/HistoryVideoLayout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetProjectHistoyQuery } from '@/api/useApi';

function History() {
  const { data: project } = useGetProjectHistoyQuery(null);
  const [projectList, setProjectList] = useState([
    {
      projectId: 0,
      title: '',
      thumbnail: null,
      createDate: '',
      modifiedDate: '',
    },
  ]);
  useEffect(() => {
    if (project) setProjectList(project.data);
  }, [project]);
  return (
    <Container>
      <Header></Header>
      <div style={{ height: 'calc(100vh - 10.06rem)' }}>
        <HistoryProjectLayout projectList={projectList} />
        {/* <HistoryVideoLayout /> */}
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  height: 4.5rem;
`;

export default History;
