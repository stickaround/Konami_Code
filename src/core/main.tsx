import React, { useState } from 'react';
import { Box } from '@mui/material';

import { Layout } from './components/Layout';
import { Konami } from './Konami';
import { IssueCard } from './IssueCard';

import { loadIssues } from '../services/api';
import { KONAMI_CODE } from '../utils/constants';
import { Issue } from '../utils/types';

function Main() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [showIssues, setShowIssues] = useState<boolean>(false);

  const handleLoadIssues = () => {
    setDisabled(true);
    setShowIssues(true);
    loadIssues().then(({ data: issues }) => {
      setIssues(
        issues
          .sort((a, b) =>
            new Date(a.created_at) > new Date(b.created_at) ? -1 : 1
          )
          .slice(0, 5)
      );
    });
  };

  const hideIssues = () => {
    setDisabled(false);
    setShowIssues(false);
    setIssues([]);
  };

  return (
    <Layout>
      <Box component='main'>
        <Konami
          action={handleLoadIssues}
          code={KONAMI_CODE}
          resetDelay={5000}
          timeout={5000}
          onTimeout={hideIssues}
          disabled={disabled}
        />
        {showIssues &&
          issues.map((issue) => (
            <IssueCard
              title={issue.title}
              author={issue.user.login}
              created_at={issue.created_at}
            />
          ))}
      </Box>
    </Layout>
  );
}

export default Main;
