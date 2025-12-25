import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    githubUrl: null,
    imageHint: "music playlist"
  },
  {
    title: "PDFCHAP.com",
    description: "Designed and developed a modern, responsive website for a client. Focused on creating an intuitive user experience and a clean aesthetic that aligned with the company's brand identity. In addition, adding functionallites for calculating prices for the checkout process.",
    image: "public/images/www.pdfchap.com.jpg",
    tags: ["Web Design", "WordPress", "jQuery", "CMS", "Node.js"],
    liveUrl: "#",
    githubUrl: null,
    imageHint: "web development"
  },
  {
    title: "ECB.ir",
    description: "Various contirbutions to News and Blogs and Learn pages such as desiging layouts, writing Learn posts and blogs.",
    image: "public/images/www.ecb.ir.jpg",
    tags: ["DNN", "jQuery", "CMS", "UI/UX", ".NET"],
    liveUrl: "https://www.ecb.ir/",
    githubUrl: null,
    imageHint: "website design"
  },
  {
    title: "ZANDPERFUMES.com",
    description: "Built a high-performance e-commerce site with a focus on scalability and user engagement. Integrated various third-party services for payments and shipping.",
    image: "public/images/www.zandperfumes.com.jpg",
    tags: ["E-commerce", "Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "https://www.zandperfumes.com/",
    githubUrl: null,
    imageHint: "online store"
  },
];

const presentations = [
    {
        course: "Operating Systems",
        subject: "Docker",
        description: "An overview of containerization technology using Docker, covering its core concepts, architecture, and benefits in modern software deployment.",
        details: "Presented at SRBIAU (English)",
        downloadLink: "public/pdfs/Docker Presentation.pdf"
    },
    {
        course: "Artificial Intelligence",
        subject: "8-Queen Problem",
        description: "A presentation on solving the classic 8-Queen puzzle using various AI search algorithms to illustrate constraint satisfaction problems.",
        details: "Presented at SRBIAU (English)",
        downloadLink: "public/pdfs/8-Queen Presentation.pdf"
    },
    {
        course: "Networking",
        subject: "Domain Name System (DNS)",
        description: "An in-depth look at the Domain Name System (DNS), explaining its hierarchical structure, resolution process, and critical role in internet infrastructure.",
        details: "Presented at SRBIAU (Persian)",
        downloadLink: "public/pdfs/DNS.pdf"
    },
    {
        course: "Computer Systems",
        subject: "Cryptography",
        description: "This presentation covers the fundamental principles of cryptography, including symmetric and asymmetric encryption, hash functions, and their applications in securing computer systems.",
        details: "Presented at SRBIAU (Persian)",
        downloadLink: "public/pdfs/Cryptography-Computer Systems.pdf"
    },
    {
        course: "Basics of Matrices and Linear Algebra",
        subject: "Proof of Theory",
        description: "A theoretical exploration of fundamental matrix and linear algebra concepts, complete with formal proofs of key theorems.",
        details: "Presented at SRBIAU (Persian)",
        downloadLink: "public/pdfs/Proof of Theory-Basics of Matrices and Linear Algebra.pdf"
    },
    {
        course: "Linear Algebra",
        subject: "Applications in Machine Learning",
        description: "Discusses the practical applications of linear algebra in machine learning, covering topics like dimensionality reduction with PCA and its role in neural networks.",
        details: "Presented at SRBIAU (Persian)",
        downloadLink: "/pdfs/Linear-Algebra-ML-Applications.pdf"
    },
    {
        course: "Algebra",
        subject: "Proof of Theories",
        description: "A deep dive into abstract algebra, presenting formal proofs for foundational theories and structures.",
        details: "Presented at SRBIAU (Persian)",
        downloadLink: "public/pdfs/Proof of Theory-Algebra Presentation.pdf"
    },
    {
        course: "Intro to Combinations",
        subject: "Proof of Theories",
        description: "An introductory presentation on combinatorial mathematics, including proofs for core principles of permutations and combinations.",
        details: "Presented at SRBIAU (Persian)",
        downloadLink: "public/pdfs/Catalan Numbers-Algebra.pdf"
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
                    Website Link
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
              )}
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
                <CardTitle className="font-headline text-2xl">{presentation.subject}</CardTitle>
                <CardDescription className="font-medium">Course: {presentation.course}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{presentation.description}</p>
                <p className="mt-4 text-sm text-muted-foreground">{presentation.details}</p>
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
