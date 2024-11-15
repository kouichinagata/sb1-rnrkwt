import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';
import remarkGfm from 'remark-gfm';
import { EditorToolbar } from './components/EditorToolbar';
import { PenLine } from 'lucide-react';

const initialMarkdown = `# Welcome to the Markdown Editor!

Start typing in the editor on the left to see the preview on the right.

## Features
- **Real-time** preview
- *Syntax* highlighting
- Support for tables and GFM
- Toolbar for quick formatting

### Example Table
| Feature | Status |
|---------|--------|
| Preview | ✅ |
| Syntax  | ✅ |
| Tables  | ✅ |
`;

function App() {
  const [markdownContent, setMarkdownContent] = useState(initialMarkdown);

  const handleFormat = useCallback((format: string) => {
    const formats: { [key: string]: { prefix: string; suffix: string } } = {
      bold: { prefix: '**', suffix: '**' },
      italic: { prefix: '*', suffix: '*' },
      bullet: { prefix: '- ', suffix: '' },
      number: { prefix: '1. ', suffix: '' },
      quote: { prefix: '> ', suffix: '' },
      code: { prefix: '```\n', suffix: '\n```' },
      link: { prefix: '[', suffix: '](url)' },
    };

    const { prefix, suffix } = formats[format];
    setMarkdownContent((prev) => prev + `\n${prefix}Your text here${suffix}`);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <PenLine className="text-indigo-600" size={24} />
          <h1 className="text-xl font-semibold text-gray-800">Markdown Editor</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex flex-col">
              <EditorToolbar onFormat={handleFormat} />
              <div className="h-[calc(100vh-12rem)]">
                <CodeMirror
                  value={markdownContent}
                  height="100%"
                  extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
                  theme={oneDark}
                  onChange={(value) => setMarkdownContent(value)}
                  className="h-full"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 overflow-auto h-[calc(100vh-8rem)]">
              <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {markdownContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;