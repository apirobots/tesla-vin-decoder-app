'use client';

import { useEffect } from 'react';
import ForkMe from 'fork-me-github';

export function GitHubRibbon() {
  useEffect(() => {
    ForkMe('https://github.com/apirobots/tesla-vin-decoder-app');
  }, []);

  return null;
} 