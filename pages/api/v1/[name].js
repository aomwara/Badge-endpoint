import mongoClientPromise from "../../../libs/mongodb";

const FindBadgeHandler = async (req, res) => {
  const { name } = req.query;
  const database = await mongoClientPromise;
  const useDB = await database.db("badge_endpoint");
  return res.status(200).json({});
};

export default FindBadgeHandler;
