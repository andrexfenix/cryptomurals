import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/hamburgers.module.css';
import stylesLayout from '../styles/Layout.module.css';
import ConnectContext from '../context/connectContext';
import CityContext from '../context/CityContext';

function Layout({ children }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [navPosition, setNavPosition] = useState(false);
  const { loading, error, wallet, connectWallet, disconnectWallet } =
    useContext(ConnectContext);
  const { city } = useContext(CityContext);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setNavPosition(true);
    } else {
      setNavPosition(false);
    }
  }, []);

  useEffect(() => {
    const resize = window.addEventListener('resize', (e) => {
      //console.log(e.target.parent.innerWidth);
      if (e.target.parent.innerWidth <= 768) {
        setNavPosition(true);
      } else {
        setNavPosition(false);
      }
    });
    return () => {
      return window.removeEventListener('resize', resize);
    };
  });

  return (
    <>
      <Head>
        <title>cryptomurals</title>
        <meta name="description" content="cryptomurals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          height: '100vh',
          backgroundImage:
            'linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(38,38,38,1) 44%, rgba(0,0,0,1) 100%)',
        }}
      >
        <div
          key={'nav-bar'}
          style={{
            marginLeft: 30,
            marginRight: 30,
            flexDirection:
              navPosition && city === 'THE WORLD' ? 'column' : 'row',
            //flexDirection: city !== 'THE WORLD' ? 'row' : 'column',
          }}
          className={stylesLayout['nav-layout']}
        >
          <div
            style={{
              display: 'flex',
              flex: 1,
            }}
          >
            <div
              style={{ display: 'flex' }}
              className={styles['hamburguer-menu-container']}
            >
              <div
                style={{ alignSelf: 'center' }}
                className={[
                  styles['hamburger'],
                  styles['hamburger--vortex-r'],
                  stylesLayout['hamburguer-menu'],
                  showDropDown ? styles['is-active'] : null,
                ].join(' ')}
                onClick={() => {
                  setShowDropDown(!showDropDown);
                }}
              >
                <div className={styles['hamburger-box']}>
                  <div className={styles['hamburger-inner']}></div>
                </div>
              </div>
              <div
                style={{
                  margin: 'auto',
                  color: 'white',
                  textDecoration: 'underline',
                  fontFamily: 'Monoton',
                }}
                className={stylesLayout['city-layout']}
              >
                {city !== 'THE WORLD' ? 'BY CITY' : ''}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
              <div
                style={{
                  justifyContent: 'center',
                }}
              >
                {city === 'THE WORLD' ? (
                  <img
                    className={stylesLayout['logo-cryptomurals']}
                    width={'100%'}
                    height={100}
                    src="/logo_cryptomurals.svg"
                    alt="logo cryptomurals"
                  />
                ) : null}
              </div>
            </div>
          </div>
          {showDropDown && (
            <div
              style={{
                position: 'fixed',
                top: 90,
                left: 0,
                width: 600,
                zIndex: 999,
              }}
              className="menu-main"
            >
              <div className={stylesLayout['options-menu']}>Home</div>
              <div className={stylesLayout['options-menu']}>Scan QR CODE</div>
              <div className={stylesLayout['options-menu']}>About</div>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: '0 auto',
              justifyContent: 'flex-end',
              textAlign: 'center',
              width: 200,
            }}
          >
            <div
              style={{
                alignSelf: 'center',
                width: navPosition && city === 'THE WORLD' ? 200 : 'auto',
              }}
              className={stylesLayout['btn-connect-container']}
            >
              {wallet ? (
                <div
                  style={{
                    width: navPosition && city === 'THE WORLD' ? 200 : 'auto',
                    height: 50,
                  }}
                >
                  <div
                    style={{
                      borderRadius: '50%',
                      backgroundImage:
                        'linear-gradient(90deg, rgba(46,167,227, 1) 0%, rgba(46, 167,227,1) 10%, rgba(250,4,254,1) 90%)',
                      color: 'white',
                    }}
                    className={stylesLayout['btn-connected']}
                    onClick={disconnectWallet}
                  ></div>
                  <div style={{ fontFamily: 'Monda', color: 'white' }}>
                    X 04 ...bD
                  </div>
                </div>
              ) : (
                <button
                  style={{
                    borderRadius: 25,
                    border: 'none',
                    fontFamily: 'Monda',
                    backgroundImage:
                      'linear-gradient(90deg, rgba(46,167,227, 1) 0%, rgba(46, 167,227,1) 10%, rgba(250,4,254,1) 90%)',
                    color: 'white',
                    wordSpacing: 5,
                  }}
                  className={stylesLayout['btn-connect-wallet']}
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>

        <main
          style={{
            height: '100%',
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          {children}
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default Layout;
