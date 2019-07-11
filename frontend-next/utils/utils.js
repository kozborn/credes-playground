export const getUrl = req => {
  const host = req ? "backend" : "localhost";
  return `http://${host}:1337`;
};
