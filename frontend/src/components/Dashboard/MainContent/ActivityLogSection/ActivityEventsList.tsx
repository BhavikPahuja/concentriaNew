import React from 'react';
import ActivityEventItem from './ActivityEventItem';

type Event = {
  type: string;
  value: string;
  details?: string;
};

type ActivityEventsListProps = {
  events: Event[];
};

const ActivityEventsList: React.FC<ActivityEventsListProps> = ({ events }) => (
  <div className="bg-cyan-950/80 text-cyan-100 p-6 rounded-xl shadow-lg border border-cyan-700 font-orbitron max-h-full">
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-xl font-semibold text-cyan-200">Activity Events</h2>
    </div>
    <div className="space-y-4 overflow-y-auto hide-scrollbar" style={{ maxHeight: '21rem' }}>
      {events.map((event, index) => (
        <ActivityEventItem key={index} type={event.type} url={event.details} />
      ))}
    </div>
  </div>
);

export default ActivityEventsList;