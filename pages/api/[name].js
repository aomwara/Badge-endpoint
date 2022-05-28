// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const App = require("../../app/app.json");

export default function handler(req, res) {
  const { name } = req.query;
  const _app = App.find((app) => app.name === name);

  fetch("https://badge-endpoint.vercel.app/images/truffle.svg").then((r) => {
    r.text().then((d) => {
      res.status(200).json({
        schemaVersion: 1,
        label: _app.name,
        message: _app.message,
        color: _app.color,
        logoSvg: d,
      });
    });
  });
}
