const server = require("./api/server.js");

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(
    `\n ${Date(
      Date.now
    ).toString()}\n Server listening on https://localhost:${PORT} \n`
  );
});
