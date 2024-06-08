import { Resend } from "resend";

const resend = new Resend("re_KoMMT34r_PCYkTYapXYwe72UcRmkbmjGp");

(async function () {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["dieguito6122015@gmail.com"],
    subject: "Saludos desde resend UMG_2024",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
