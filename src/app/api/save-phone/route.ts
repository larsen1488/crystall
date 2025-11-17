export async function POST(req: Request) {
  const body = await req.json();
  const { phone, code} = body;

  const formData = new URLSearchParams();
  formData.append("entry.1512219800", phone);
  formData.append("entry.1951423410", code)

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScmUT5_IT0j0zC4KdIiwlcIbEq4vQnu_mCH5a2DpUSMWvei9g/formResponse",
      {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    return Response.json({ success: true });
  } catch (err) {
    console.error("Ошибка при отправке:", err);
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}
