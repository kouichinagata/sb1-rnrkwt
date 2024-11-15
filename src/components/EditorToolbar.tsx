import React from 'react';
import { Bold, Italic, List, ListOrdered, Quote, Code, Link } from 'lucide-react';
import { ToolbarButton } from './ToolbarButton';

interface EditorToolbarProps {
  onFormat: (format: string) => void;
}

export const EditorToolbar: React.FC<EditorToolbarProps> = ({ onFormat }) => {
  return (
    <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-white">
      <ToolbarButton onClick={() => onFormat('bold')} title="Bold">
        <Bold size={18} />
      </ToolbarButton>
      <ToolbarButton onClick={() => onFormat('italic')} title="Italic">
        <Italic size={18} />
      </ToolbarButton>
      <div className="w-px h-6 bg-gray-200 mx-2" />
      <ToolbarButton onClick={() => onFormat('bullet')} title="Bullet List">
        <List size={18} />
      </ToolbarButton>
      <ToolbarButton onClick={() => onFormat('number')} title="Numbered List">
        <ListOrdered size={18} />
      </ToolbarButton>
      <div className="w-px h-6 bg-gray-200 mx-2" />
      <ToolbarButton onClick={() => onFormat('quote')} title="Quote">
        <Quote size={18} />
      </ToolbarButton>
      <ToolbarButton onClick={() => onFormat('code')} title="Code">
        <Code size={18} />
      </ToolbarButton>
      <ToolbarButton onClick={() => onFormat('link')} title="Link">
        <Link size={18} />
      </ToolbarButton>
    </div>
  );
};