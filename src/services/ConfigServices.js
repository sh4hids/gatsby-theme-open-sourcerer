export const isBrowser = typeof window !== 'undefined';

export const setConfig = (data) => {
  if (isBrowser) {
    window.localStorage.setItem('config', JSON.stringify(data));
  }
};

export const getConfig = () => {
  if (isBrowser) {
    let config = JSON.parse(window.localStorage.getItem('config'));

    if (!config) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        config = { theme: 'dark' };
      } else {
        config = { theme: 'light' };
      }

      setConfig(config);
    }

    return config;
  }

  return {
    theme: 'light',
  };
};
