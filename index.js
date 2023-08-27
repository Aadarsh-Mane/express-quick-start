const express = require('express');
const open = require('open');

function quicklaunch(options = {}) {
  const { port = 3000 } = options; // Default to port 3000 if not specified

  const app = express();

  app.get("/", (req, res) => {
    res.json("Welcome to the football API");
  });

  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
    open(`http://localhost:${port}`, { wait: false })
      .then(() => {
        console.log('Web browser opened.');
      })
      .catch((err) => {
        console.error(`Error opening web browser: ${err}`);
      });
  });
}

module.exports = quicklaunch;
