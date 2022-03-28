/* eslint-disable react/jsx-key */
import React, { useState, useContext } from 'react';
import Layout from '../components/Layout';
import CustomSelect from '../components/CustomSelect';
import stylesLayout from '../styles/Layout.module.css';
import CityContext from '../context/CityContext';

export default function Home() {
  const options = ['THE WORLD', 'ROMA', 'LONDRES'];
  const { city, setCity } = useContext(CityContext);

  return (
    <Layout>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ margin: 'auto' }}>
          <div
            className={`white-grad ${
              city !== 'THE WORLD' ? 'white-grad-select' : ''
            }`}
          >
            <div
              style={{
                margin: '0px auto',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                height: '100%',
                alignItems: 'center',
                color: 'white',
                fontSize: 30,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {city === 'THE WORLD' ? (
                <>
                  <div
                    style={{
                      fontFamily: 'Monoton',
                      display: 'flex',
                      wordSpacing: 10,
                    }}
                    className={stylesLayout['circle-main']}
                  >
                    DISCOVER THE
                    <br />
                    MURALS OF
                  </div>
                  <CustomSelect
                    options={options}
                    option={city}
                    selectOption={setCity}
                  />
                  <div
                    style={{
                      fontFamily: 'Monoton',
                      wordSpacing: 10,
                    }}
                    className={stylesLayout['circle-main']}
                  >
                    {`\&`} COLLECT THEM
                  </div>
                </>
              ) : (
                <div
                  style={{
                    fontFamily: 'Monoton',
                    display: 'flex',
                    flexDirection: 'column',
                    wordSpacing: 10,
                  }}
                  className={stylesLayout['circle-main']}
                >
                  WELCOME TO
                  <br />
                  {city}!
                  <br />
                  <a
                    style={{
                      fontFamily: 'Monda',
                      letterSpacing: 3,
                    }}
                    className={stylesLayout['link-city']}
                    href="/gallery"
                  >
                    Click to discover the MURALS
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          margin: 20,
          flex: 1,
        }}
        className={
          city === 'THE WORLD'
            ? stylesLayout['content-unlock']
            : stylesLayout['content-unlock-hidden']
        }
      >
        <div
          style={{
            borderRadius: '50%',
            width: 100,
            height: 100,
            backgroundImage:
              'linear-gradient( 90deg, rgba(79, 143, 106, 1) 0%, rgba(55, 135, 127, 1) 26%, rgba(30, 127, 147, 1) 100%)',
            color: 'white',
            textAlign: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              flex: 1,
              justifySelf: 'center',
              alignSelf: 'center',
              fontFamily: 'Monda',
              fontSize: 18,
            }}
          >
            community unlockable content
          </div>
        </div>
      </div>

      <div className={stylesLayout['container-icon-social-networks']}>
        <div>
          <img
            width={48}
            height={48}
            color="white"
            src={'/twitter-brands.svg'}
            style={{ margin: 10, left: 0 }}
            className={stylesLayout['icon-social-networks']}
          />
          <img
            width={48}
            height={48}
            color="white"
            src={'/discord-brands.svg'}
            style={{ margin: 10, left: 58 }}
            className={stylesLayout['icon-social-networks']}
          />
          <img
            width={48}
            height={48}
            color="white"
            src={'/instagram-brands.svg'}
            style={{ margin: 10, left: 116 }}
            className={stylesLayout['icon-social-networks']}
          />
          <img
            width={48}
            height={48}
            color="white"
            src={'/youtube-brands.svg'}
            style={{ margin: 10, left: 174 }}
            className={stylesLayout['icon-social-networks']}
          />
        </div>
      </div>
    </Layout>
  );
}
