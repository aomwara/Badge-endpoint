// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const App = require("../../app/app.json");
const Endpoint = require("../../config.json");

export default function handler(req, res) {
  const { name } = req.query;
  const _app = App.find((app) => app.name === name);

  res.status(200).json({
    schemaVersion: 1,
    label: _app.name,
    message: _app.message,
    color: _app.color,
    logo: Endpoint.apiEndpoint + "/images/" + _app.logo,
  });
}
