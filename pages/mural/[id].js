import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Mural.module.css';

export default function Mural() {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener('resize', () => {
      console.log(window);
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  return (
    <Layout>
      {dimensions.width < 768 ? (
        <div style={{ padding: 20 }}>
          <div
            style={{
              aspectRatio: '1',
              position: 'relative',
              width: '100%',
              margin: '0 auto',
            }}
            className={styles['circle-grad']}
          >
            <div
              style={{
                position: 'absolute',
                color: '#01deb5',
                fontFamily: 'Monoton',
                fontSize: 60,
                top: 20,
              }}
            >
              D*FACE
            </div>
          </div>
          <div
            style={{
              flex: 1,
              marginTop: 20,
              alignItems: 'flex-end',
              justifyItems: 'flex-end',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <button
              style={{
                border: 'none',
                fontFamily: 'Monoton',
                fontSize: 23,
                color: 'white',
                background: '#ffffff00',
                alignSelf: 'flex-end',
              }}
              className={styles['btn-buy-grad']}
            >
              BUY / BID
            </button>
            <div
              style={{
                fontFamily: 'Monda',
                color: 'white',
                fontSize: 20,
                backgroundColor: '#767676',
                borderRadius: '10px',
                textAlign: 'center',
                width: 100,
                marginTop: 20,
              }}
            >
              _ Share
            </div>
          </div>
          <div>
            <p style={{ color: 'white', fontSize: 17, fontFamily: 'Monda' }}>
              When you buy this NFT you support 4 parts: The artist, motion
              designer, a cause and the murals project
            </p>
          </div>
          <div>
            <p
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'Monda',
                margin: 0,
              }}
            >
              NAME OF THE PAINT
            </p>
            <p
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'Monda',
                margin: 0,
              }}
            >
              Motion design by @serial_looper
            </p>
            <p
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'Monda',
                margin: 0,
              }}
            >
              Ed. 1/1
            </p>
          </div>
          <div>
            <p style={{ fontFamily: 'Monda', color: 'white', fontSize: 14 }}>
              {' '}
              Owner: {}
            </p>
            <p style={{ fontFamily: 'Monda', color: 'white', fontSize: 14 }}>
              {' '}
              Coord: {}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Monda',
                  fontSize: 23,
                  color: 'white',
                  margin: 0,
                }}
              >
                Reserve price
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Monda',
                  fontSize: 23,
                  color: 'white',
                  margin: 0,
                }}
              >
                1 ETH
              </p>
            </div>
            <div
              style={{
                color: '#000000',
                fontFamily: 'Monoton',
                fontSize: 20,
                background:
                  'linear-gradient(to right, rgba(121, 245, 173, 1), rgba(11, 205, 247, 1))',
                width: 200,
                height: 50,
                borderRadius: 20,
                textAlign: 'center',
                margin: 10,
                display: 'flex',
              }}
            >
              <div style={{ margin: 'auto' }}>DISCOVER +</div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flex: 1, margin: 'auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(350px, 1fr) 1fr',
                gap: 0,
              }}
            >
              <div style={{ margin: '0 auto', width: '100%', height: '100%' }}>
                <div
                  style={{
                    aspectRatio: '1',
                    position: 'relative',
                    width: '100%',
                    margin: '0 auto',
                  }}
                  className={styles['circle-grad']}
                >
                  <div
                    style={{
                      position: 'absolute',
                      color: '#01deb5',
                      fontFamily: 'Monoton',
                      fontSize: 45,
                      top: 20,
                    }}
                  >
                    D*FACE
                  </div>
                </div>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <p
                  style={{ color: 'white', fontSize: 17, fontFamily: 'Monda' }}
                >
                  When you buy this NFT you support 4 parts: The artist, motion
                  designer, a cause and the murals project
                </p>
                <div>
                  <p
                    style={{
                      color: 'white',
                      fontSize: 23,
                      fontFamily: 'Monda',
                      margin: 0,
                    }}
                  >
                    NAME OF THE PAINT
                  </p>
                  <p
                    style={{
                      color: 'white',
                      fontSize: 23,
                      fontFamily: 'Monda',
                      margin: 0,
                    }}
                  >
                    Motion design by @serial_looper
                  </p>
                  <p
                    style={{
                      color: 'white',
                      fontSize: 23,
                      fontFamily: 'Monda',
                      margin: 0,
                    }}
                  >
                    Ed. 1/1
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: 'Monda', color: 'white' }}>
                    {' '}
                    Owner: {}
                  </p>
                  <p style={{ fontFamily: 'Monda', color: 'white' }}>
                    {' '}
                    Coord: {}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Monda',
                      fontSize: 23,
                      color: 'white',
                      margin: 0,
                    }}
                  >
                    Reserve price
                  </p>
                  <p
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Monda',
                      fontSize: 23,
                      color: 'white',
                      margin: 0,
                    }}
                  >
                    1 ETH
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ flex: 1, marginTop: 20 }}>
                    <button
                      style={{
                        border: 'none',
                        fontFamily: 'Monoton',
                        fontSize: 23,
                        color: 'white',
                        background: '#ffffff00',
                      }}
                      className={styles['btn-buy-grad']}
                    >
                      BUY / BID
                    </button>
                    <div
                      style={{
                        fontFamily: 'Monda',
                        color: 'white',
                        fontSize: 20,
                        backgroundColor: '#767676',
                        borderRadius: '10px',
                        textAlign: 'center',
                        width: 100,
                        marginTop: 20,
                      }}
                    >
                      _ Share
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      margin: 10,
                      marginRight: 0,
                    }}
                  >
                    <a
                      style={{
                        color: 'white',
                        fontFamily: 'Monda',
                        fontSize: 20,
                        textDecorationLine: 'underline',
                      }}
                    >
                      View on etherscan
                    </a>
                    <a
                      style={{
                        color: 'white',
                        fontFamily: 'Monda',
                        fontSize: 20,
                        textDecorationLine: 'underline',
                      }}
                    >
                      View on Rarible.com
                    </a>
                    <a
                      style={{
                        color: 'white',
                        fontFamily: 'Monda',
                        fontSize: 20,
                        textDecorationLine: 'underline',
                      }}
                    >
                      View on IPFS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              color: '#000000',
              fontFamily: 'Monoton',
              fontSize: 20,
              background:
                'linear-gradient(to right, rgba(121, 245, 173, 1), rgba(11, 205, 247, 1))',
              width: 200,
              height: 50,
              borderRadius: 20,
              textAlign: 'center',
              margin: 10,
              marginLeft: 100,
              display: 'flex',
            }}
          >
            <div style={{ margin: 'auto' }}>DISCOVER+</div>
          </div>
        </>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {}, // will be passed to the page component as props
  };
}
