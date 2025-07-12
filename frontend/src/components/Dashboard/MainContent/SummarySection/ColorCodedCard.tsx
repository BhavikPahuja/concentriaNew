import React, { type ReactElement } from "react";

type ColorCodedCardProps = {
  icon: ReactElement;
  title: string;
  color: string;
};

const ColorCodedCard: React.FC<ColorCodedCardProps> = ({
  icon,
  title,
  color,
}) => (
  <div
    className={`flex flex-col items-start p-6 rounded-xl text-white shadow-lg transform hover:-translate-y-2 transition-transform duration-200 ease-in-out ${color} font-orbitron`}
  >
    <div className="flex mb-4">
      <div className="text-5xl mb-4 opacity-80">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
  </div>
);

export default ColorCodedCard;
