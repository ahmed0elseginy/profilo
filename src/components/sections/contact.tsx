import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg text-primary mb-2 shiny-sec">Let's talk</h2>
        <h3 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
          Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-muted-foreground">
            <p className="mb-4">
              Have a question or a project in mind? Feel free to reach out.
            </p>
            <div className="flex items-center gap-2">
              <span>Location:</span>
              <span className="text-foreground">Tanta, Gharbia, Egypt</span>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
