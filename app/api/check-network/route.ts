import { NextResponse } from "next/server";
import { fetchToken } from "@/lib/api/token";

export async function GET(request: Request) {
  try {
    const token = await fetchToken();
    if (!token) {
      return NextResponse.json({ error: "Unauthorized", }, { status: 401 });
    }
    const res = await fetch("https://identity.safaricom.com/partner/api/v2/fetchMaskedMsisdn", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-App-Key": "he-partner",
        "X-MessageID": "1234",
        "X-Source-System": "he-partner",
      },
    });

    if (!res.ok) {
      console.error(`Request failed with status ${res.status} - ${res.statusText}`);
      return NextResponse.json({ error: `Request failed`, }, { status: res.status });
    }

    const data = await res.json();

    if (data?.header?.responseCode === 403) {
      console.error("User is not on Safaricom Mobile Data.");
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
