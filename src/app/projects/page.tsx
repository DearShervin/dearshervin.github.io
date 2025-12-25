import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Download } from "lucide-react";

const projects = [
  {
    title: "Python Music Suggestor",
    description: "A music suggestion engine developed for an Advanced Programming Languages course. The Python-based tool uses collaborative filtering to recommend songs based on user listening habits.",
    image: "https://placehold.co/600x400.png",
    tags: ["Python", "Algorithms", "Pandas", "Scikit-learn"],
    liveUrl: null,
    githubUrl: "#",
    imageHint: "music playlist"
  },
  {
    title: "Client Website Design 1",
    description: "Designed and developed a modern, responsive website for a client. Focused on creating an intuitive user experience and a clean aesthetic that aligned with the company's brand identity.",
    image: "https://placehold.co/600x400.png",
    tags: ["Web Design", "React", "Next.js", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "website design"
  },
  {
    title: "Client Website Design 2",
    description: "A full-stack project for another client, featuring a custom content management system. This project involved both front-end and back-end development to deliver a tailored solution.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Node.js", "CMS", "UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "web development"
  },
  {
    title: "Client Website Design 3",
    description: "Built a high-performance e-commerce site with a focus on scalability and user engagement. Integrated various third-party services for payments and shipping.",
    image: "https://placehold.co/600x400.png",
    tags: ["E-commerce", "Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "online store"
  },
];

const presentations = [
    {
        title: "Operating Systems: Docker",
        description: "SRBIAU (English).",
        downloadLink: "#"
    },
    {
        title: "Artificial Intelligence: 8-Queen Problem",
        description: "SRBIAU (English).",
        downloadLink: "#"
    },
    {
        title: "Networking: Domain Name System (DNS)",
        description: "SRBIAU (Persian).",
        downloadLink: "#"
    },
    {
        title: "Computer Systems: Cryptography",
        description: "SRBIAU (Persian).",
        downloadLink: "#"
    },
    {
        title: "Basics of Matrices and Linear Algebra: Proof of Theory",
        description: "SRBIAU (Persian).",
        downloadLink: "#"
    },
    {
        title: "Linear Algebra: Applications in Machine Learning",
        description: "SRBIAU (Persian).",
        downloadLink: "#"
    },
    {
        title: "Algebra: Proof of Theories",
        description: "SRBIAU (Persian).",
        downloadLink: "#"
    },
    {
        title: "Intro to Combinations: Proof of Theories",
        description: "SRBIAU (Persian).",
        downloadLink: "#"
    }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of my work, from web applications to algorithms.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.liveUrl && (
                <Button asChild variant="outline">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
              <Button asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section id="presentations" className="mt-16">
        <h2 className="font-headline mb-8 text-center text-3xl font-semibold">
          Academic Presentations
        </h2>
        <div className="space-y-8">
          {presentations.map((presentation, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{presentation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{presentation.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={presentation.downloadLink} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
