import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookOpen, Download } from "lucide-react";

const courses = [
  {
    code: "CS 577",
    title: "Advanced Artificial Intelligence",
    description: "A deep dive into advanced topics in AI, including knowledge representation, automated reasoning, and probabilistic models. The course involved a significant research project on reinforcement learning.",
    syllabusLink: "#"
  },
  {
    code: "LING 450",
    title: "Computational Morphology",
    description: "Studied computational methods for analyzing word structures. Implemented finite-state transducers and explored their application in morphological analysis and generation for various languages.",
    syllabusLink: "#"
  },
  {
    code: "HCI 620",
    title: "User-Centered Design and Evaluation",
    description: "This course covered the entire lifecycle of user-centered design, from needs analysis and prototyping to usability testing. My final project involved redesigning a mobile application for a non-profit.",
    syllabusLink: "#"
  },
  {
    code: "STAT 512",
    title: "Applied Regression Analysis",
    description: "Focused on the theory and application of linear and generalized linear models. Used R for data analysis, model fitting, and diagnostics on real-world datasets.",
    syllabusLink: "#"
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Related Courses
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A summary of the key courses that have shaped my academic journey.
        </p>
      </header>

      <Accordion type="single" collapsible className="w-full">
        {courses.map((course, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                    <h3 className="font-headline text-lg font-semibold">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{course.code}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14">
              <p className="mb-4 text-muted-foreground">{course.description}</p>
              <Button asChild size="sm">
                <a href={course.syllabusLink} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Syllabus
                </a>
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
