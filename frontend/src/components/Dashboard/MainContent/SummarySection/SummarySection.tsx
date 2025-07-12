import React from 'react';
import ColorCodedCard from './ColorCodedCard';
import { MdFolder, MdFileCopy, MdSecurity, MdListAlt } from 'react-icons/md';

function SummarySection() {
  return (
    <section>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <ColorCodedCard icon={<MdListAlt />} title="Permissions" color="bg-red-500" />
        <ColorCodedCard icon={<MdFileCopy />} title="Storage" color="bg-blue-500" />
        <ColorCodedCard icon={<MdSecurity />} title="Cookies" color="bg-yellow-500" />
        <ColorCodedCard icon={<MdFolder />} title="Downloads" color="bg-teal-500" />
      </div>
    </section>
  );
}

export default SummarySection;