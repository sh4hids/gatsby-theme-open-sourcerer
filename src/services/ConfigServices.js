export const isBrowser = typeof window !== 'undefined';

export const setConfig = data => {
  if (isBrowser) {
    window.localStorage.setItem("config", JSON.stringify(data))
  }
}

export const getConfig = () => {
  if (isBrowser) {
    return (
      JSON.parse(window.localStorage.getItem("config")) || {
        theme: "light",
      }
    )
  }

  return {
    theme: "light",
  }
}