import React from 'react';
import SummarySection from './SummarySection/SummarySection';
import ActivityLogSection from './ActivityLogSection/ActivityLogSection';

function MainContent() {
  return (
    <main className="flex-grow p-8 overflow-y-auto space-y-8 w-full">
      <SummarySection />
      <ActivityLogSection />
    </main>
  );
}

export default MainContent;