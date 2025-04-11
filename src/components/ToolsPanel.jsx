import React from 'react';

const ToolsPanel = ({ addText, addShape, download }) => (
  <div className="tools-panel">
    <button onClick={addText}>Add Text</button>
    <button onClick={() => addShape('rect')}>Rectangle</button>
    <button onClick={() => addShape('circle')}>Circle</button>
    <button onClick={() => addShape('triangle')}>Triangle</button>
    <button onClick={download}>Download</button>
  </div>
);

export default ToolsPanel;
