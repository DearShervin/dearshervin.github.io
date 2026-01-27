import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Laptop, Wrench, PenTool } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: "Programming Languages & Data Science",
    skills: ["Python", "JavaScript", "LaTeX", "Go", "PyTorch", "TensorFlow", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "C/C++", "spaCy", "NLTK", "SciPy"],
  },
  {
    icon: <Laptop className="h-8 w-8 text-accent" />,
    title: "Web Development",
    skills: ["TypeScript", "Javascript",  "Next.js", "React", "DotNetNuke (DNN)", "WordPress", "HTML", "CSS", "GSAP"],
  },
  {
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: "Developer Tools",
    skills: ["Git", "Docker", "Google Colaboratory", "Jupyter Notebook", "JebBrains IDEs (WebStorm, PyCharm)", "Plesk"],
  },
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: "Design Tools",
    skills: ["Figma", "Adobe Premier Pro", "Adobe Illustrator"],
  },
];


export default function SkillsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Skills & Technologies
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A showcase of my technical abilities and tools I work with.
        </p>
      </header>

      <section id="skills">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader className="items-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {category.icon}
                </div>
                <CardTitle className="font-headline pt-4 text-center text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                        {skill}
                    </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
