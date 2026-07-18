import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "santoshgangwar1578@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
    
        <p><strong>Name:</strong> ${name}</p>
    
        <p><strong>Email:</strong> ${email}</p>
    
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    
    if (error) {
      console.error(error);
      throw error;
    }
    
    console.log("Email sent:", data);

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}