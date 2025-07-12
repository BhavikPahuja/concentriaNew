import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

type ActivityEventItemProps = {
  type: string;
  url?: string;
};

const ActivityEventItem: React.FC<ActivityEventItemProps> = ({ type, url = '' }) => (
  <div className="flex justify-between items-center pb-3 border-b border-cyan-700 last:border-b-0">
    <div className="flex items-center gap-3">
      <span className="text-cyan-100 font-medium">{type}</span>
      <span className="text-cyan-400 text-sm">{url}</span>
    </div>
  </div>
);

export default ActivityEventItem;