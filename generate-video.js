import OpenAI from "openai";
export default async function handler(req, res) {
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const { prompt } = req.body;
    const result = await client.videos.generate({
      model: "gpt-4o-mini-vision",
      prompt
    });
    res.status(200).json({ url: result.data[0].url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}