import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-20 md:py-32 px-6 lg:px-8 bg-background overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 -left-16 w-48 h-48 bg-primary rounded-full opacity-20 blur-3xl" />
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 shiny-text">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Have a question, a project, or just want to say hi? My inbox is always open.
        </p>
        <div className="max-w-xl mx-auto bg-card p-8 rounded-2xl border border-border/20 shadow-lg">
            <ContactForm />
        </div>
      </div>
    </section>
  );
}
