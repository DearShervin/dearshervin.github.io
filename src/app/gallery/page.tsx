import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, BrainCircuit } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Programming Languages",
    description: "Proficient in Python, Java, and JavaScript. Experience with C++ and R.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: "Frameworks & Libraries",
    description: "Hands-on experience with TensorFlow, PyTorch, Scikit-learn, React, and Node.js.",
  },
  {
    icon: <Palette className="h-8 w-8 text-accent" />,
    title: "Developer Tools",
    description: "Skilled in using Git, Docker, LaTeX, and various data visualization tools like Matplotlib and Tableau.",
  },
];

const galleryItems = [
    { src: "https://placehold.co/600x400.png", alt: "Gallery image 1", hint: "conference presentation" },
    { src: "https://placehold.co/600x600.png", alt: "Gallery image 2", hint: "poster session" },
    { src: "https://placehold.co/400x600.png", alt: "Gallery image 3", hint: "lab work" },
    { src: "https://placehold.co/600x400.png", alt: "Gallery image 4", hint: "team collaboration" },
    { src: "https://placehold.co/600x400.png", alt: "Gallery image 5", hint: "whiteboard diagrams" },
    { src: "https://placehold.co/400x600.png", alt: "Gallery image 6", hint: "university campus" },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Skills & Media
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A showcase of my technical abilities and visual work.
        </p>
      </header>

      <section id="skills" className="mb-16">
        <h2 className="font-headline mb-8 text-center text-3xl font-semibold">
          My Skillset
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {skill.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline mb-2 text-xl">{skill.title}</CardTitle>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="media-gallery">
        <h2 className="font-headline mb-8 text-center text-3xl font-semibold">
          Media Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={item.hint}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
