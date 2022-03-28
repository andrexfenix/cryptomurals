import React, { useState } from 'react';

const ConnectContext = React.createContext();

const ConnectProvider = ({ children }) => {
  const [wallet, setWallet] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const connectWallet = () => {
    console.log('connect');
    setWallet('0x34de23dw2142ce21d7gf4f6ewd');
    setLoading(false);
  };

  const disconnectWallet = () => {
    console.log('disconnect');
    setWallet('');
  };

  const data = {
    error,
    loading,
    wallet,
    connectWallet,
    disconnectWallet,
  };

  return (
    <ConnectContext.Provider value={data}>{children}</ConnectContext.Provider>
  );
};

export { ConnectProvider };
export default ConnectContext;
