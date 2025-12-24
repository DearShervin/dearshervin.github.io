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
    info: 'Official course name: "Topics in Computer Science"'
  },
  {
    title: "Natural Language Processing",
  }
];

const allSyllabiLink = "#"; // Replace with the actual link to the combined PDF

export default function CoursesPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <section id="course-list" className="mb-16">
        <h2 className="font-headline mb-8 text-center text-3xl font-semibold">
          Completed Courses
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-semibold">{course.title}</h3>
                {course.info && <p className="text-sm text-muted-foreground mt-2">{course.info}</p>}
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
