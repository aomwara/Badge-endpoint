// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const App = require("../../app/app.json");

export default function handler(req, res) {
  const { label, icon, color } = req.query;

  fetch(icon).then((r) => {
    r.text().then((svg) => {
      res.status(200).json({
        schemaVersion: 1,
        label: " ",
        message: label,
        color: "#" + color,
        logoSvg: svg,
      });
    });
  });
}
