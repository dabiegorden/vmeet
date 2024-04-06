"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  // check if user is logged in
  if (!user) throw new Error("User is not logged in");
  if (!apiKey) throw new Error("No apiKey found");
  if (!apiSecret) throw new Error("No apiSecret found");

  // Now let's create a new stream client
  const client = new StreamClient(apiKey, apiSecret);

  // check for the validity/expiration of the token which is one hour
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

  // check to see when the token were issued
  const issued = Math.floor(Date.now() / 1000) - 60;

  //    Now create a new token
  const token = client.createToken(user.id, exp, issued);
  return token;
};
