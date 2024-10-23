import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Grid, Brain, Trophy, Lightbulb, Timer } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Master Sudoku with AI
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Challenge yourself with AI-generated Sudoku puzzles tailored to your skill level. 
          Learn, improve, and track your progress.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/play">
              <Grid className="mr-2 h-5 w-5" />
              Play Now
            </Link>
          </Button>
          <Button size="lg" variant="outline">
            <Brain className="mr-2 h-5 w-5" />
            Learn Techniques
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Brain className="h-12 w-12 mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Generation</h3>
          <p className="text-muted-foreground">
            Every puzzle is uniquely generated using advanced AI algorithms to ensure the perfect challenge.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Trophy className="h-12 w-12 mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">5 Difficulty Levels</h3>
          <p className="text-muted-foreground">
            From beginner to expert, find the right difficulty to match your skill level.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Lightbulb className="h-12 w-12 mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Smart Hints</h3>
          <p className="text-muted-foreground">
            Get intelligent hints and learn advanced solving techniques as you play.
          </p>
        </Card>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <h4 className="text-3xl font-bold text-blue-600">500+</h4>
            <p className="text-sm text-muted-foreground">Daily Players</p>
          </Card>
          <Card className="p-6 text-center">
            <h4 className="text-3xl font-bold text-blue-600">∞</h4>
            <p className="text-sm text-muted-foreground">Unique Puzzles</p>
          </Card>
          <Card className="p-6 text-center">
            <h4 className="text-3xl font-bold text-blue-600">5</h4>
            <p className="text-sm text-muted-foreground">Difficulty Levels</p>
          </Card>
          <Card className="p-6 text-center">
            <h4 className="text-3xl font-bold text-blue-600">24/7</h4>
            <p className="text-sm text-muted-foreground">Available</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Challenge Yourself?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start solving puzzles now and join thousands of players improving their skills.
        </p>
        <Button size="lg" asChild>
          <Link href="/play">
            <Timer className="mr-2 h-5 w-5" />
            Start Playing
          </Link>
        </Button>
      </section>
    </div>
  )
}