export const isBrowser = typeof window !== 'undefined';

export const setConfig = (data) => {
  if (isBrowser) {
    window.localStorage.setItem('config', JSON.stringify(data));
  }
};

export const getConfig = () => {
  if (isBrowser) {
    let systemTheme = 'light';

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      systemTheme = 'dark';
    }

    return (
      JSON.parse(window.localStorage.getItem('config')) || {
        theme: systemTheme,
      }
    );
  }

  return {
    theme: 'light',
  };
};
