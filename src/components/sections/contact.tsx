import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
