import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Lightbulb, PenTool } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="container mx-auto px-4 pt-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <Image
              src="https://placehold.co/128x128.png"
              alt="Student's Picture"
              width={128}
              height={128}
              className="rounded-full shadow-lg"
              data-ai-hint="profile picture"
            />
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            A Passionate Scholar and Innovator
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Welcome to my digital portfolio. I am a prospective graduate student with a deep interest in [Your Field 1], [Your Field 2], and [Your Field 3]. Explore my work, research, and teaching journey.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/projects">
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-headline text-3xl font-bold text-center mb-12">Areas of Interest</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-foreground">
                  <BrainCircuit className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-headline mt-4">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fascinated by building intelligent systems that learn from data to make predictions and decisions.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-foreground">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-headline mt-4">Human-Computer Interaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Passionate about designing intuitive and effective interfaces between humans and technology.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-foreground">
                  <PenTool className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-headline mt-4">Computational Linguistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Exploring the intersection of language and computer science to understand and process human language.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-headline text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
            I graduated from [Your University] with a degree in [Your Degree]. Throughout my academic career, I've been driven by a curiosity to solve complex problems and a desire to contribute to the academic community. My research focuses on [briefly describe your research focus], and I'm always eager to collaborate on innovative projects. When I'm not in the lab, I enjoy [Your Hobby 1] and [Your Hobby 2].
            </p>
        </div>
      </section>
    </div>
  );
}
