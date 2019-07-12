export const getUrl = req => {
  const host = req
    ? "backend"
    : process.browser
    ? window.location.hostname
    : "localhost";
  return `http://${host}:1337`;
};
