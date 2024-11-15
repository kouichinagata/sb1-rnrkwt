import React from 'react';

interface ToolbarButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  title: string;
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({ onClick, children, title }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
      title={title}
    >
      {children}
    </button>
  );
};