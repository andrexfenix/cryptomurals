/* eslint-disable react/jsx-key */
import React from 'react';

function CustomViewer({
  onClick,
  top,
  left,
  width = 300,
  height = 400,
  viewH = 200,
  viewW = 200,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        color: 'white',
        position: 'absolute',
        top: top,
        left: left,
        zIndex: 999,
      }}
    >
      <div
        style={{
          height: height,
          width: width,
          backgroundImage:
            'linear-gradient(90deg, rgba(11,185,225,0.8) 0%, rgba(109,220,155,0.8) 45%, rgba(109,220,155,0.8) 100%)',
          border: '1px solid white',
          padding: 'auto',
          display: 'flex',
          margin: 'auto',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            height: viewH,
            width: viewW,
            margin: 'auto',
          }}
        ></div>
        <div
          style={{
            fontFamily: 'Monoton',
            fontSize: 30,
            color: '#000000',
            textAlign: 'center',
            border: '5px solid #000000',
            borderRadius: 20,
            width: viewW,
            margin: 'auto',
          }}
        >
          VIEW
        </div>
      </div>
    </div>
  );
}

export default CustomViewer;
