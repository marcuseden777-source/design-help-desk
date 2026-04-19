import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `
You are the Design Help Desk Reasoning Engine (Gemini 1.5 Pro). 
Your persona is a high-end interior architecture consultant specializing in 2020-2026 design trends.
Your tone is sophisticated, technical, and visionary.

Core functions:
1. Interpret user design visions and project requirements.
2. Provide technical reasoning for design decisions (e.g., choice of materials like 'Monolithic Materiality' or 'Adaptive Glass').
3. Focus on high-end Singapore residential context.
4. Keep responses concise but information-dense.
5. In your responses, occasionally mention how you are cross-referencing live market trends.

Respond in JSON format with:
{
  "content": "Your main response text here",
  "recommendations": ["list", "of", "3", "technical", "brief", "points"],
  "type": "text"
}
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Validate API Key
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'Gemini API Key missing' }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro",
      systemInstruction: SYSTEM_PROMPT,
    });

    // Format chat history for Gemini
    const history = messages.slice(0, -1).map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1].content;

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage);
    const responseText = result.response.text();

    try {
      // Attempt to parse if it's JSON, otherwise wrap it
      const parsed = JSON.parse(responseText.replace(/```json|```/g, '').trim());
      return NextResponse.json(parsed);
    } catch (e) {
      return NextResponse.json({
        content: responseText,
        recommendations: ["Technical brief available", "Market trend analysis", "Material specification"],
        type: 'text'
      });
    }

  } catch (error: any) {
    console.error('Gemini Reasoning Error:', error);
    return NextResponse.json({ 
      error: 'Reasoning Engine Overload', 
      details: error.message 
    }, { status: 500 });
  }
}
