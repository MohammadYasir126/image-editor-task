import React, { useRef } from 'react';
import CanvasEditor from '../components/CanvasEditor';
import ToolsPanel from '../components/ToolsPanel';

function AddCaptionPage({ selectedImage }) {
  const canvasRef = useRef(null);

  const addText = () => {
    const canvas = window._canvas;
    const text = new window.fabric.Textbox('Edit me', {
      left: 50,
      top: 50,
      fontSize: 20,
      fill: 'black',
    });
    canvas.add(text);
  };

  const addShape = (shape) => {
    const canvas = window._canvas;
    let shapeObj;
    switch (shape) {
      case 'rect':
        shapeObj = new window.fabric.Rect({ left: 50, top: 50, fill: 'blue', width: 100, height: 60 }); break;
      case 'circle':
        shapeObj = new window.fabric.Circle({ left: 50, top: 50, fill: 'green', radius: 40 }); break;
      case 'triangle':
        shapeObj = new window.fabric.Triangle({ left: 50, top: 50, fill: 'red', width: 80, height: 80 }); break;
      default: return;
    }
    canvas.add(shapeObj);
  };

  const download = () => {
    const canvas = window._canvas;
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={{ display: 'flex', padding: '1rem' }}>
      <CanvasEditor image={selectedImage} ref={canvasRef} />
      <ToolsPanel addText={addText} addShape={addShape} download={download} />
    </div>
  );
}

export default AddCaptionPage;
