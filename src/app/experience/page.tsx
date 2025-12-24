import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Users, Calendar, Briefcase } from "lucide-react";

const researchPapers = [
  {
    title: "The Impact of AI on Modern Education Systems",
    authors: "Jane Doe, John Smith, Emily White",
    date: "October 2023",
    journal: "Journal of Educational Technology",
    abstract: "This paper explores the multifaceted impact of artificial intelligence on contemporary education, from personalized learning platforms to automated grading systems. We analyze both the potential benefits and the ethical challenges, providing a comprehensive framework for educators and policymakers.",
    downloadLink: "#",
  },
  {
    title: "Advanced Models for Natural Language Understanding",
    authors: "Jane Doe, Michael Brown",
    date: "June 2023",
    journal: "Transactions on Linguistics and Computation",
    abstract: "We introduce a novel neural network architecture that achieves state-of-the-art results on several benchmark datasets for natural language understanding. Our model leverages a unique attention mechanism to better capture long-range dependencies in text.",
    downloadLink: "#",
  },
];

const teachingExperiences = [
    {
        role: "Teaching Assistant",
        course: "Introduction to Computer Science (CS101)",
        institution: "University of Technology",
        duration: "Fall 2022 - Spring 2023",
        description: "Led weekly discussion sections for 50+ students, graded assignments and exams, and held office hours to provide one-on-one assistance with programming concepts in Python."
    },
    {
        role: "Guest Lecturer",
        course: "Data Structures and Algorithms (CS201)",
        institution: "State University",
        duration: "March 2022",
        description: "Delivered a guest lecture on the practical applications of graph algorithms in social network analysis and logistics."
    }
];

const workExperiences = [
    {
        role: "Software Engineer Intern",
        company: "Tech Giant",
        duration: "Summer 2023",
        description: "Developed and implemented a new feature for a large-scale data processing pipeline, improving efficiency by 15%. Collaborated with a cross-functional team in an agile environment."
    }
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Experience
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          My contributions to the academic community through publications and pedagogy.
        </p>
      </header>

      <section id="research">
        <h2 className="font-headline text-3xl font-semibold mb-8">
          Research
        </h2>
        <div className="space-y-8">
          {researchPapers.map((paper, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{paper.title}</CardTitle>
                <CardDescription className="text-base">{paper.journal}</CardDescription>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{paper.authors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{paper.date}</span>
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{paper.abstract}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={paper.downloadLink} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="work-internship" className="mt-16">
        <h2 className="font-headline text-3xl font-semibold mb-8">
            Work and Internship
        </h2>
        <div className="space-y-8">
            {workExperiences.map((exp, index) => (
                <Card key={index} className="flex flex-col md:flex-row">
                    <div className="p-6 md:w-1/3 md:border-r">
                        <h3 className="font-headline text-xl font-semibold">{exp.role}</h3>
                        <p className="font-medium text-primary-foreground/80">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    </div>
                    <div className="p-6 pt-0 md:pt-6 md:w-2/3">
                        <p className="leading-relaxed">{exp.description}</p>
                    </div>
                </Card>
            ))}
        </div>
      </section>

      <section id="teaching" className="mt-16">
        <h2 className="font-headline text-3xl font-semibold mb-8">
            Teaching Experience
        </h2>
        <div className="space-y-8">
            {teachingExperiences.map((exp, index) => (
                <Card key={index} className="flex flex-col md:flex-row">
                    <div className="p-6 md:w-1/3 md:border-r">
                        <h3 className="font-headline text-xl font-semibold">{exp.role}</h3>
                        <p className="font-medium text-primary-foreground/80">{exp.course}</p>
                        <p className="text-sm text-muted-foreground">{exp.institution}</p>
                        <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    </div>
                    <div className="p-6 pt-0 md:pt-6 md:w-2/3">
                        <p className="leading-relaxed">{exp.description}</p>
                    </div>
                </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
