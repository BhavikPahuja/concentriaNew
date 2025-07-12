import React from 'react';
import ActivityGraphCard from './ActivityGraphCard';
import ActivityEventsList from './ActivityEventsList';

function ActivityLogSection() {
  const events = [
    { type: 'Clipboard', value: '99+', details: 'Unsafe' },
    { type: 'Orientation', value: '23', details: 'Safe' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
    { type: 'Cookies', value: '68', details: 'High Risk' },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2"> 
        <ActivityGraphCard />
      </div>
      <div>
        <ActivityEventsList events={events} />
      </div>
    </section>
  );
}

export default ActivityLogSection;