import { apiRequest } from "./http";

export async function fetchToken() {
  const username = '5llgj89o9lhrm4h41opbjqrpbl'
  const password = 'miskrmt9knusd1tm790a790jd61chesalugrfulabsdvhmmsbcm';

  if (!username || !password) {
    throw new Error("Missing THIRD_PARTY_AUTH_USERNAME or THIRD_PARTY_AUTH_PASSWORD");
  }

  const credentials = Buffer.from(`${username}:${password}`).toString("base64");

  const response = await apiRequest<{ access_token: string; expires_in: number; token_type: string }>(
    `${process.env.THIRD_PARTY_AUTH_BASE_URL}/oauth2/token?grant_type=client_credentials`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
    }
  );

  return response?.access_token
}
