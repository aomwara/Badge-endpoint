import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const { MONGO_HOST, MONGO_PORT, MONGO_DB, MONGO_USER, MONGO_PASS } =
  process.env;

if (!MONGO_HOST || !MONGO_PORT || !MONGO_DB || !MONGO_USER || !MONGO_PASS) {
  throw new Error(
    "Please define MongoDB config in .env.local, you can see example in .env.local.example"
  );
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  database: `mongodb+srv://${MONGO_USER}:${encodeURIComponent(
    MONGO_PASS
  )}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`,
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
});
