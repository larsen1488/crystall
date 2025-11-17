import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwlCOUQnlaXELnnAnQL42DGTqqdiNaz7a16_g2_056ZH95pkUDTPUZ52KGG5lTMNgi7LA/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text(); // читаем как текст
    console.log("Ответ от Google Apps Script:", text);

    const data = JSON.parse(text); // парсим
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { success: false, error: (err instanceof Error ? err.message : "Unknown error") },
      { status: 500 }
    );
  }
}
