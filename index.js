import  express  from 'express';

async function quicklaunch(options = {}) {
  const { port = 3000 } = options; // Default to port 3000 if not specified

  const app = express();

  app.get("/", (req, res) => {
    res.json("Welcome to the football API");
  });

  app.listen(port, async () => {
    console.log(`Listening on http://localhost:${port}`);

    try {
      const open = await import('open');
      await open.default(`http://localhost:${port}`, { wait: false });
      console.log('Web browser opened.');
    } catch (err) {
      console.error(`Error opening web browser: ${err}`);
    }
  });
}

module.exports = quicklaunch;
