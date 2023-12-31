import express from 'express';
import open from 'open';

async function quicklaunch(options = {}) {
  const { port = 3000 } = options; // Default to port 3000 if not specified

  const app = express();

  app.get("/", (req, res) => {
    res.json("Welcome to the football API");
  });

  app.listen(port, async () => {
    console.log(`Listening on http://localhost:${port}`);

    try {
      await open(`http://localhost:${port}`, { wait: false });
      console.log('Web browser opened.');
    } catch (err) {
      console.error(`Error opening web browser: ${err}`);
    }
  });

  return app; // Return the Express app
}

export default quicklaunch;
