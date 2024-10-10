import React from 'react';

interface ToolCardProps {
  tool: string;
  imageSrc: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, imageSrc }) => {
  return (
    <div className=" p-4 bg-gray-800 rounded-lg shadow-md text-white flex flex-col items-center justify-center space-y-6">
      <img src={imageSrc} alt={tool} className="w-16 h-16" />
      <p className="text-xl font-bold">{tool}</p>
    </div>
  );
};

export default ToolCard;
