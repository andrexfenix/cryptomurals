import React, { useState } from 'react';
import style from '../styles/CustomSelect.module.css';
import stylesLayout from '../styles/Layout.module.css';

function CustomSelect({ options, option, selectOption }) {
  const [showOptions, setShowOptions] = useState(false);
  const refSelect = React.useRef(null);

  return (
    <div style={{ position: 'relative', minWidth: 240 }}>
      <div
        ref={refSelect}
        style={{
          border: '2px solid #c2c2c2',
          backgroundColor: '#525252',
          borderRadius: 25,
          paddingRight: 10,
          paddingLeft: 10,
          display: 'flex',
          flexDirection: 'row',
        }}
        onClick={() => setShowOptions(!showOptions)}
      >
        <div
          style={{
            flex: 1,
            fontFamily: 'Monoton',
            color: '#1ae2bd',
          }}
          className={stylesLayout['circle-select']}
        >
          {option}
        </div>
        <div style={{ fontSize: 14, alignSelf: 'center' }}>&#9660;</div>
      </div>
      {showOptions && (
        <div
          style={{
            position: 'absolute',
            top: refSelect.current.offsetHeight,
            right: 0,
            width: refSelect.current.offsetWidth,
            backgroundColor: '#525252',
          }}
        >
          {options.map((optionNext) => {
            return (
              <div
                style={{ fontFamily: 'Monoton' }}
                className={stylesLayout['circle-select']}
                onClick={() => {
                  selectOption(optionNext);
                  setShowOptions(false);
                }}
              >
                {optionNext}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
