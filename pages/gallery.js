/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CustomSelect from '../components/CustomSelect';
import CustomViewer from '../components/CustomViewer';
import styles from '../styles/Gallery.module.css';
import { useRouter } from 'next/router';
import LinesSVG from '../components/LinesSVG';
import LinesMobileSVG from '../components/LinesMobileSVG';

export default function Gallery() {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  const [arrayIndexes, setIndex] = useState(Array(6).fill(false));
  const router = useRouter();

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    window.addEventListener('resize', () => {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });
  }, []);

  const handlerClick = (e, index, value) => {
    unselect(e);
    setIndex((prevArrayIndexes) => {
      return prevArrayIndexes.map((el, i) => (i == index ? value : false));
    });
  };

  const unselect = (e) => {
    e.stopPropagation();

    var index = arrayIndexes.findIndex((el) => el === true);

    if (index >= 0) {
      setIndex((prevArrayIndexes) => {
        return prevArrayIndexes.map(() => false);
      });
    }
  };

  const handlerClickViewer = (e, url) => {
    e.stopPropagation();
    router.push(url);
  };

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
        }}
        onClick={(e) => unselect(e)}
      >
        {dimensions.width < 768 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              gridTemplateRows: '1fr',
              gridTemplateAreas: "'zone1 zone2 zone3 zone4'",
              width: '100vw',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div style={{ gridArea: 'zone1', color: 'white' }}>
              {!arrayIndexes[0] ? (
                <>
                  <div
                    style={{
                      margin: '0 auto',
                      marginTop: 400,
                      background:
                        'radial-gradient(circle, rgba(109, 220, 155, 0.8) 30%, rgba(11, 185, 225, 0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      height: 'auto',
                      width: dimensions.width < 768 ? 80 : 100,
                      height: dimensions.width < 768 ? 80 : 100,
                      borderRadius: '50%',
                      position: arrayIndexes[0] ? 'relative' : 'initial',
                      display: 'flex',
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 0, true)}
                  >
                    <div
                      style={{
                        fontFamily: 'Monda',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                        margin: 'auto',
                      }}
                    >
                      OBEY GIANT
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      margin: '0 auto',
                      marginTop: 400,
                      position: 'relative',
                    }}
                    onClick={(e) => handlerClick(e, 0, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 30,
                        textAlign: 'center',
                      }}
                    >
                      OBEY GIANT
                    </div>
                    <CustomViewer
                      onClick={(e) =>
                        handlerClickViewer(e, '/mural/obey-giant')
                      }
                      top={-80}
                      left={120}
                      width={250}
                      height={350}
                      viewH={210}
                      viewW={200}
                    />
                  </div>
                </div>
              )}
            </div>
            <div style={{ gridArea: 'zone2', color: 'white', width: '100%' }}>
              {!arrayIndexes[1] ? (
                <>
                  <div
                    style={{
                      margin: '0px auto',
                      marginTop: 175,
                      background:
                        'radial-gradient(circle, rgba(109, 220, 155, 0.8) 30%, rgba(11, 185, 225, 0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      width: dimensions.width < 768 ? 70 : 100,
                      height: dimensions.width < 768 ? 70 : 100,
                      borderRadius: '50%',
                      display: 'flex',
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 1, true)}
                  >
                    <div
                      style={{
                        fontFamily: 'Monda',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                        margin: 'auto',
                      }}
                    >
                      INTI
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      margin: '0 auto',
                      marginTop: 195,
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      position: 'relative',
                    }}
                    onClick={(e) => handlerClick(e, 1, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 30,
                        textAlign: 'center',
                      }}
                    >
                      INTI
                    </div>
                    <CustomViewer
                      onClick={(e) => handlerClickViewer(e, '/mural/inti')}
                      top={45}
                      left={-80}
                      width={250}
                      height={350}
                      viewH={210}
                      viewW={200}
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                gridArea: 'zone3',
                color: 'white',
                width: '100%',
                zIndex: 2,
              }}
            >
              {!arrayIndexes[3] ? (
                <>
                  <div
                    style={{
                      margin: 'auto',
                      marginTop: 20,
                      background:
                        'radial-gradient(circle, rgba(109,220,155,0.8) 30%, rgba(11,185,225,0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      height: 'auto',
                      width: dimensions.width < 768 ? 70 : 120,
                      height: dimensions.width < 768 ? 70 : 120,
                      borderRadius: '50%',
                      display: 'flex',
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 3, true)}
                  >
                    <div
                      style={{
                        fontFamily: 'Monda',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                        margin: 'auto',
                      }}
                    >
                      SETH
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      margin: '0 auto',
                      marginTop: 20,
                      position: 'relative',
                    }}
                    onClick={(e) => handlerClick(e, 3, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 30,
                        textAlign: 'center',
                        fontFamily: 'Monda',
                        color: 'white',
                      }}
                    >
                      SETH
                    </div>
                    <CustomViewer
                      onClick={(e) => handlerClickViewer(e, '/mural/seth')}
                      top={45}
                      left={-80}
                      width={250}
                      height={350}
                      viewH={210}
                      viewW={200}
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                gridArea: 'zone4',
                color: 'white',
                width: '100%',
                position: 'relative',
              }}
            >
              {!arrayIndexes[4] ? (
                <>
                  <div
                    style={{
                      margin: 'auto',
                      marginTop: 120,
                      background:
                        'radial-gradient(circle, rgba(109, 220, 155, 0.8) 30%, rgb(11, 185, 225, 0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      height: 'auto',
                      width: dimensions.width < 768 ? 70 : 100,
                      height: dimensions.width < 768 ? 70 : 100,
                      borderRadius: '50%',
                      display: 'flex',
                      position: 'absolute',
                      left: '-30px',
                      zIndex: 1,
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 4, true)}
                  >
                    <div
                      style={{
                        fontFamily: 'Monda',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                        margin: 'auto',
                      }}
                    >
                      ADD FUEL
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      marginTop: 120,
                      position: 'absolute',
                      left: '-30px',
                    }}
                    onClick={(e) => handlerClick(e, 4, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 30,
                        textAlign: 'center',
                        position: 'absolute',
                      }}
                    >
                      ADD FUEL
                    </div>
                    <CustomViewer
                      onClick={(e) => handlerClickViewer(e, '/mural/add-fuel')}
                      top={95}
                      left={-160}
                      width={250}
                      height={350}
                      viewH={210}
                      viewW={200}
                    />
                  </div>
                </div>
              )}
              {!arrayIndexes[5] ? (
                <>
                  <div
                    style={{
                      background:
                        'radial-gradient(circle, rgba(109, 220, 155, 0.8) 30%, rgba(11, 185, 225, 0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      height: 'auto',
                      width: dimensions.width < 768 ? 70 : 100,
                      height: dimensions.width < 768 ? 70 : 100,
                      borderRadius: '50%',
                      margin: '0 auto',
                      marginTop: 240,
                      display: 'flex',
                      position: 'absolute',
                      left: -10,
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 5, true)}
                  >
                    <div
                      style={{
                        fontFamily: 'Monda',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                        margin: 'auto',
                      }}
                    >
                      D*FACE
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      margin: '0 auto',
                      marginTop: 240,
                      position: arrayIndexes[5] ? 'relative' : 'initial',
                    }}
                    onClick={(e) => handlerClick(e, 5, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 30,
                        textAlign: 'center',
                      }}
                    >
                      D*FACE
                    </div>
                    <CustomViewer
                      onClick={(e) => handlerClickViewer(e, '/mural/d*face')}
                      top={60}
                      left={-160}
                      width={250}
                      height={350}
                      viewH={210}
                      viewW={200}
                    />
                  </div>
                </div>
              )}
            </div>
            {/*<img
              width={'100%'}
              height={600}
              src={'/lines_mobile.svg'}
              alt={''}
              style={{ position: 'absolute', zIndex: -2 }}
            />*/}
            <div
              style={{
                position: 'absolute',
                zIndex: -1,
                width: '100%',
                height: '100%',
              }}
            >
              <LinesMobileSVG />
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                '1fr 1fr 1fr minmax(150px, 400px) 200px minmax(150px, 400px)',
              gridTemplateRows: '1fr',
              gridTemplateAreas: "'zone1 zone2 zone3 zone4 zone5'",
              width: '100vw',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div style={{ gridArea: 'zone1', color: 'white', zIndex: 3 }}>
              {!arrayIndexes[0] ? (
                <>
                  <div
                    style={{
                      margin: '300px 0px auto',
                      background:
                        'radial-gradient(circle, rgba(109, 220, 155, 0.8) 30%, rgba(11, 185, 225, 0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      height: 'auto',
                      width: dimensions.width < 768 ? 50 : 100,
                      height: dimensions.width < 768 ? 50 : 100,
                      borderRadius: '50%',
                      position: arrayIndexes[0] ? 'relative' : 'initial',
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 0, true)}
                  ></div>
                  <div
                    style={{
                      fontFamily: 'Monda',
                      fontSize: 25,
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    OBEY GIANT
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      margin: '270px 0px auto',
                    }}
                    onClick={(e) => handlerClick(e, 0, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 24,
                        textAlign: 'center',
                      }}
                    >
                      OBEY GIANT
                    </div>
                    <CustomViewer
                      onClick={(e) =>
                        handlerClickViewer(e, `/mural/obey-giant`)
                      }
                      top={80}
                      left={170}
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                gridArea: 'zone2',
                color: 'white',
                width: '100%',
                zIndex: 2,
              }}
            >
              {!arrayIndexes[1] ? (
                <>
                  <div
                    style={{
                      margin: '175px 0px auto',
                      fontFamily: 'Monda',
                      fontSize: 25,
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    INTI
                  </div>
                  <div
                    style={{
                      background:
                        'radial-gradient(circle, rgba(109, 220, 155, 0.8) 30%, rgba(11, 185, 225, 0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      width: dimensions.width < 768 ? 50 : 100,
                      height: dimensions.width < 768 ? 50 : 100,
                      borderRadius: '50%',
                      margin: '0px auto',
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 1, true)}
                  ></div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      margin: '195px 0px auto',
                      position: 'relative',
                    }}
                    className={styles['balloon-select']}
                    onClick={(e) => handlerClick(e, 1, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 24,
                        textAlign: 'center',
                      }}
                    >
                      INTI
                    </div>
                    <CustomViewer
                      onClick={(e) => handlerClickViewer(e, `/mural/inti`)}
                      top={0}
                      left={160}
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                gridArea: 'zone3',
                color: 'white',
                width: '100%',
              }}
            >
              <div
                style={{
                  marginTop: 130,
                  background:
                    'radial-gradient(circle, rgba(109, 220, 155, 0.8) 30%, rgba(11, 185, 225, 0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                  width: dimensions.width < 768 ? 50 : 100,
                  height: dimensions.width < 768 ? 50 : 100,
                  borderRadius: '50%',
                }}
                className={styles['balloon']}
              ></div>

              {!arrayIndexes[3] ? (
                <>
                  <div
                    style={{
                      margin: '70px 0px auto',
                      background:
                        'radial-gradient(circle, rgba(109,220,155,0.8) 30%, rgba(11,185,225,0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      height: 'auto',
                      width: dimensions.width < 768 ? 50 : 120,
                      height: dimensions.width < 768 ? 50 : 120,
                      borderRadius: '50%',
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 3, true)}
                  ></div>
                  <div
                    style={{
                      fontFamily: 'Monda',
                      fontSize: 25,
                      color: 'white',
                      textAlign: 'center',
                    }}
                    onClick={(e) => handlerClick(e, 3, false)}
                  >
                    SETH
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      margin: '80px 0px auto',
                      position: 'relative',
                    }}
                    onClick={(e) => handlerClick(e, 3, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 24,
                        textAlign: 'center',
                      }}
                    >
                      SETH
                    </div>
                    <CustomViewer
                      onClick={(e) => handlerClickViewer(e, '/mural/seth')}
                      top={-100}
                      left={160}
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                gridArea: 'zone4',
                color: 'white',
                width: '100%',
                zIndex: 2,
              }}
            >
              {!arrayIndexes[4] ? (
                <>
                  <div
                    style={{
                      margin: 'auto',
                      marginTop: 70,
                      background:
                        'radial-gradient(circle, rgba(109, 220, 155, 0.8) 30%, rgb(11, 185, 225, 0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      height: 'auto',
                      width: dimensions.width < 768 ? 50 : 100,
                      height: dimensions.width < 768 ? 50 : 100,
                      borderRadius: '50%',
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 4, true)}
                  ></div>
                  <div
                    style={{
                      fontFamily: 'Monda',
                      fontSize: 25,
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    ADD FUEL
                  </div>
                </>
              ) : (
                <div
                  style={{ display: 'flex', flexDirection: 'row', zIndex: 2 }}
                >
                  <div
                    style={{
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      margin: '0 auto',
                      marginTop: 50,
                      position: 'relative',
                    }}
                    onClick={(e) => handlerClick(e, 4, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 24,
                        textAlign: 'center',
                      }}
                    >
                      ADD FUEL
                    </div>
                    <CustomViewer
                      onClick={(e) => handlerClickViewer(e, '/mural/add-fuel')}
                      top={0}
                      left={160}
                    />
                  </div>
                </div>
              )}
            </div>
            <div style={{ gridArea: 'zone5', color: 'white', zIndex: 1 }}>
              {!arrayIndexes[5] ? (
                <>
                  <div
                    style={{
                      marginTop: 0,
                      fontFamily: 'Monda',
                      fontSize: 25,
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    D*FACE
                  </div>
                  <div
                    style={{
                      background:
                        'radial-gradient(circle, rgba(109, 220, 155, 0.8) 30%, rgba(11, 185, 225, 0.8) 80%, rgba(9, 204, 249, 0.8) 100%)',
                      height: 'auto',
                      width: dimensions.width < 768 ? 50 : 100,
                      height: dimensions.width < 768 ? 50 : 100,
                      borderRadius: '50%',
                      margin: '0 auto',
                    }}
                    className={styles['balloon']}
                    onClick={(e) => handlerClick(e, 5, true)}
                  ></div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      color: 'white',
                      fontFamily: 'Monda',
                      display: 'flex',
                      margin: '0 auto',
                      marginTop: 0,
                      position: arrayIndexes[5] ? 'relative' : 'initial',
                    }}
                    onClick={(e) => handlerClick(e, 5, false)}
                  >
                    <div
                      style={{
                        margin: 'auto',
                        fontSize: 24,
                        textAlign: 'center',
                      }}
                    >
                      D*FACE
                    </div>
                    <CustomViewer
                      onClick={(e) => handlerClickViewer(e, '/mural/d*face')}
                      top={0}
                      left={160}
                    />
                  </div>
                </div>
              )}
            </div>
            {/*<img
              width={'100%'}
              height={'100%'}
              src={'/lines_new.svg'}
              alt={''}
              style={{ position: 'absolute', zIndex: -1 }}
            />*/}
            <div
              style={{
                position: 'absolute',
                zIndex: -1,
                width: '100%',
                height: '100%',
              }}
            >
              <LinesSVG />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
