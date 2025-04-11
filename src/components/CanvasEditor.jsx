import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useNavigate } from 'react-router-dom';

const CanvasEditor = ({ image }) => {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null); 
  const navigate = useNavigate();

  useEffect(() => {
     const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 500,
      height: 400,
      preserveObjectStacking: true,
    });

    fabricRef.current = fabricCanvas;

    
    if (image && image.largeImageURL) {
      fabric.Image.fromURL(
        image.largeImageURL,
        (img) => {
          img.set({ crossOrigin: 'anonymous' });
          fabricCanvas.setBackgroundImage(
            img,
            fabricCanvas.renderAll.bind(fabricCanvas),
            {
              scaleX: fabricCanvas.width / img.width,
              scaleY: fabricCanvas.height / img.height,
            }
          );
        },
        { crossOrigin: 'anonymous' }
      );
    }

    
    return () => {
      fabricCanvas.dispose();
    };
  }, [image]);

  
  const addText = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    const text = new fabric.IText('Type here', {
      left: 100,
      top: 100,
      fill: 'black',
      fontSize: 20,
    });
    canvas.add(text);
    canvas.setActiveObject(text);
  };

  
  const addRectangle = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    const rect = new fabric.Rect({
      left: 150,
      top: 150,
      fill: 'rgba(0, 0, 255, 0.3)',
      width: 100,
      height: 100,
    });
    canvas.add(rect);
  };

  
  const addCircle = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    const circle = new fabric.Circle({
      left: 120,
      top: 120,
      radius: 50,
      fill: 'rgba(0, 255, 0, 0.3)',
    });
    canvas.add(circle);
  };

  
  const addTriangle = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    const triangle = new fabric.Triangle({
      left: 130,
      top: 130,
      width: 100,
      height: 100,
      fill: 'rgba(255, 165, 0, 0.3)',
    });
    canvas.add(triangle);
  };

  
  const downloadImage = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;

    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1.0,
    });

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'edited-image.png';

   
    setTimeout(() => {
      link.click();
    }, 100); 
  };

  
  const goBack = () => navigate('/');

  return (
    <div style={{ textAlign: 'center' }}>
      <canvas ref={canvasRef} style={{ border: '1px solid #ccc' }} />

      {/* Buttons placed below the image */}
      <div style={{ marginTop: '10px' }}>
        <button onClick={addText} style={{ marginRight: 8 }}>Add Text</button>
        <button onClick={addRectangle} style={{ marginRight: 8 }}>Rectangle</button>
        <button onClick={addCircle} style={{ marginRight: 8 }}>Circle</button>
        <button onClick={addTriangle} style={{ marginRight: 8 }}>Triangle</button>
        <button onClick={downloadImage} style={{ marginRight: 8 }}>Download</button>
        <button onClick={goBack} style={{ backgroundColor: '#f44336', color: 'white' }}>
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default CanvasEditor;
