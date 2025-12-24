import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, BookOpen } from "lucide-react";

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
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Related Coursework
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A summary of the key courses that have shaped my academic journey.
        </p>
      </header>

      <section id="course-list" className="mb-16">
        <h2 className="font-headline mb-8 text-center text-3xl font-semibold">
          Completed Courses
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {courses.map((course, index) => (
            <Card key={index} className="flex items-center p-4">
              <div className="mr-4 flex-shrink-0">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.code}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="syllabus-downloads">
        <h2 className="font-headline mb-8 text-center text-3xl font-semibold">
          Syllabus Downloads
        </h2>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <Card key={index} className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.code}</p>
              </div>
              <Button asChild size="sm">
                <a href={course.syllabusLink} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}