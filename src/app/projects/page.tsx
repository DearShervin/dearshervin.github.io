import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Interactive Data Visualization Tool",
    description: "A web-based platform for creating interactive charts and graphs from CSV data. Built with React and D3.js, it offers a user-friendly interface for data exploration.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "D3.js", "Next.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "data visualization"
  },
  {
    title: "Sentiment Analysis API",
    description: "A RESTful API that analyzes the sentiment of a given text. Developed using Python, Flask, and the NLTK library, deployed on a cloud service.",
    image: "https://placehold.co/600x400.png",
    tags: ["Python", "Flask", "NLTK", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "code terminal"
  },
  {
    title: "E-commerce Mobile App",
    description: "A cross-platform mobile application for an e-commerce store, featuring product browsing, a shopping cart, and a secure checkout process. Built with React Native.",
    image: "https://placehold.co/600x400.png",
    tags: ["React Native", "Firebase", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "mobile app"
  },
  {
    title: "Course Scheduler Algorithm",
    description: "A constraint satisfaction algorithm to generate optimal course schedules for university students, considering prerequisites, time conflicts, and professor preferences.",
    image: "https://placehold.co/600x400.png",
    tags: ["Java", "Algorithms", "Optimization"],
    liveUrl: null,
    githubUrl: "#",
    imageHint: "whiteboard algorithm"
  },
];

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
    </div>
  );
}
