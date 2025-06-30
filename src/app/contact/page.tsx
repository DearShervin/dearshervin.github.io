import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-accent" />,
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    icon: <Linkedin className="h-6 w-6 text-accent" />,
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/in/your-profile",
  },
  {
    icon: <Github className="h-6 w-6 text-accent" />,
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="font-headline text-2xl font-semibold">Contact Information</h2>
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 pt-1">{detail.icon}</div>
              <div>
                <h3 className="font-semibold">{detail.label}</h3>
                <Link
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  {detail.value}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div>
           <h2 className="font-headline mb-4 text-2xl font-semibold">Send a Message</h2>
           <ContactForm />
        </div>
      </div>
    </div>
  );
}
