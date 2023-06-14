import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function GET(request) {
const { prompt } = JSON.parse(request.body)

  const response = await openai.createImage({
    prompt,
    n:1,
    size: '512x512'
  });
  return NextResponse.json({ data: response.data.data });
}