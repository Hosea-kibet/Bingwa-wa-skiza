// app/api/get-captcha/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Safaricom's API endpoint for the Skiza session
    const safaricomUrl = "https://api.safaricom.co.ke/v1/skizasession/id";

    // API request body as provided
    const requestBody = {
        "subscriberNo": "0712202700",
        "skizaType": "SKIZA_RBT",
        "skizaCode": "6940110"
    }
    // Make the POST request to Safaricom's API with Authorization header
    const response = await fetch(safaricomUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer BvpAbacGydX79WGkKOKQhtWPoATx" // Replace with your actual token
      },
      body: JSON.stringify(requestBody)
    });

    // Handle non-success responses
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: "Failed to fetch captcha from Safaricom API", details: errorData },
        { status: response.status }
      );
    }

    // Assuming the API returns a text-based CAPTCHA response.
    // If the response is JSON, you can change this to response.json().
    const captchaData = await response.text();

    // Return the captcha data to the client
    return NextResponse.json({ captcha: captchaData });
  } catch (error) {
    console.error("Error fetching captcha:", error);
    return NextResponse.json(
      { error: "Server error while fetching captcha" },
      { status: 500 }
    );
  }
}
