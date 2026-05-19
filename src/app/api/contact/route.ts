import { NextResponse } from "next/server";

type ContactPayload = {
  nome?: string;
  telefone?: string;
  email?: string;
  empresa?: string;
  consideracoes?: string;
};

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Serviço de envio não configurado." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Dados inválidos." }, { status: 400 });
  }

  const nome = payload.nome?.trim() ?? "";
  const telefone = payload.telefone?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const empresa = payload.empresa?.trim() ?? "";
  const consideracoes = payload.consideracoes?.trim() ?? "";

  if (!nome || !telefone || !email || !consideracoes) {
    return NextResponse.json(
      { success: false, message: "Preencha todos os campos obrigatórios." },
      { status: 400 },
    );
  }

  const empresaLabel = empresa || "Não informado";

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Novo contato do site - ${nome}`,
      name: nome,
      email,
      telefone,
      empresa: empresaLabel,
      message: [
        `Nome: ${nome}`,
        `Empresa: ${empresaLabel}`,
        `Telefone: ${telefone}`,
        `E-mail: ${email}`,
        "",
        "Considerações do projeto:",
        consideracoes,
      ].join("\n"),
      from_name: "Site Delpra",
      botcheck: false,
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    return NextResponse.json(
      { success: false, message: data.message ?? "Não foi possível enviar. Tente novamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
