export type ContactFormData = {
  nome: string;
  telefone: string;
  email: string;
  empresa: string;
  consideracoes: string;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

function buildMessage(data: ContactFormData, empresaLabel: string) {
  return [
    `Nome: ${data.nome}`,
    `Empresa: ${empresaLabel}`,
    `Telefone: ${data.telefone}`,
    `E-mail: ${data.email}`,
    "",
    "Considerações do projeto:",
    data.consideracoes,
  ].join("\n");
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<{ success: boolean; message?: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return {
      success: false,
      message:
        "Serviço de envio não configurado. Confira NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY na Vercel e faça um novo deploy.",
    };
  }

  const empresaLabel = data.empresa || "Não informado";

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Novo contato do site - ${data.nome}`,
      name: data.nome,
      email: data.email,
      telefone: data.telefone,
      empresa: empresaLabel,
      message: buildMessage(data, empresaLabel),
      from_name: "Site Delpra",
    }),
  });

  const responseText = await response.text();
  let result: Web3FormsResponse;
  try {
    result = JSON.parse(responseText) as Web3FormsResponse;
  } catch {
    return {
      success: false,
      message: "Resposta inválida do serviço de e-mail. Tente novamente.",
    };
  }

  if (!result.success) {
    return {
      success: false,
      message: result.message ?? "Não foi possível enviar. Tente novamente.",
    };
  }

  return { success: true };
}
