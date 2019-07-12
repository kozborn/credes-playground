export const getUrl = req => {
  const host = req ? "backend" : window.location.hostname;
  return `http://${host}:1337`;
};
