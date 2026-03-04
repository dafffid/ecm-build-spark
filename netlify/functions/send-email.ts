import { Resend } from "resend";

export async function handler(event: any) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { nom, prenom, email, telephone, entreprise, message } = JSON.parse(event.body);

    if (!nom || !prenom || !email || !telephone || !entreprise || !message) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Tous les champs sont requis." }),
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "ECM Contact <noreply@ecm-construction.fr>",
      to: "contact@ecm-construction.fr",
      reply_to: email,
      subject: `Nouveau message de ${prenom} ${nom} - ${entreprise}`,
      html: `
        <h2>Nouveau message depuis le site ECM</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Prénom :</strong> ${prenom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Entreprise :</strong> ${entreprise}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ success: true }),
    };
  } catch (error: any) {
    console.error("Resend error:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: error.message || "Erreur lors de l'envoi." }),
    };
  }
}
