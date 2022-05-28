// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    schemaVersion: 1,
    label: "hello",
    message: "sweet world",
    color: "orange",
  });
}
