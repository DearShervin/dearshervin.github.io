import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, BookOpen } from "lucide-react";

const courses = [
  {
    title: "Advanced Artificial Intelligence",
  },
  {
    title: "Computational Morphology",
  },
  {
    title: "User-Centered Design and Evaluation",
  },
  {
    title: "Applied Regression Analysis",
  },
  {
    title: "Machine Learning",
  },
  {
    title: "Natural Language Processing",
  }
];

const allSyllabiLink = "#"; // Replace with the actual link to the combined PDF

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="flex items-center justify-center p-6 text-center">
                <h3 className="font-semibold">{course.title}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section id="syllabus-downloads" className="text-center">
        <h2 className="font-headline mb-8 text-3xl font-semibold">
          Syllabus Download
        </h2>
        <p className="text-muted-foreground mb-6">Download a single PDF containing all course syllabi.</p>
        <Button asChild size="lg">
          <a href={allSyllabiLink} download>
            <Download className="mr-2 h-5 w-5" />
            Download All Syllabi
          </a>
        </Button>
      </section>
    </div>
  );
}
