import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary regulator of circadian rhythms in horses?",
    options: ["Food intake", "Light exposure", "Temperature", "Exercise"],
    correct: 1,
    explanation: "Light is the primary regulator of circadian rhythms. When sunlight stimulates specialized photoreceptors at the back of the retina, signals travel to the brain."
  },
  {
    id: 2,
    question: "Which light wavelengths are most disruptive to horses' circadian rhythms?",
    options: ["Red wavelengths", "Blue wavelengths", "Green wavelengths", "Yellow wavelengths"],
    correct: 1,
    explanation: "Blue wavelengths are particularly disruptive to circadian rhythms. Blue light gets a lot of bad press because it can contribute to sleep disorders."
  },
  {
    id: 3,
    question: "What happens when horses experience disrupted circadian rhythms?",
    options: ["Improved performance", "Better coat condition", "Behavioral issues and health problems", "Increased appetite"],
    correct: 2,
    explanation: "Disrupting a horse's circadian rhythm can contribute to undesirable behaviors, including stall weaving and other stereotypies, plus health issues."
  },
  {
    id: 4,
    question: "For optimal circadian health, horses should be turned out for how many hours daily?",
    options: ["2-4 hours", "6-8 hours", "10-12 hours", "Up to 18 hours"],
    correct: 3,
    explanation: "In the wild, horses spend up to 18 hours a day foraging. For stabled horses, turnout should allow maximum natural light exposure."
  },
  {
    id: 5,
    question: "What type of lighting should be used for night barn checks?",
    options: ["Bright white lights", "Blue LED lights", "Red-light headlamps", "Fluorescent lights"],
    correct: 2,
    explanation: "Use red-light headlamps for night barn checks instead of flipping on bright lights after dark, as recommended in the DIY light therapy tips."
  }
];

export const EquineLightQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100;

  if (quizCompleted) {
    return (
      <Card className="quiz-card bg-card/80 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle className="text-gradient-golden">Quiz Complete!</CardTitle>
          <Progress value={100} className="w-full" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-4">
            <div className="text-6xl animate-pulse-golden">
              {score >= 4 ? "🏆" : score >= 3 ? "🥉" : "📚"}
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-accent">
                {score}/{quizQuestions.length}
              </p>
              <p className="text-muted-foreground">
                {score === 5 && "Perfect! You're an equine light therapy expert!"}
                {score === 4 && "Excellent! You understand circadian rhythms well."}
                {score === 3 && "Good job! You're learning about equine light therapy."}
                {score < 3 && "Keep studying! Review the article for better understanding."}
              </p>
            </div>
            <Button 
              onClick={resetQuiz}
              className="bg-gradient-golden hover:opacity-90"
            >
              Take Quiz Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <Card className="quiz-card bg-card/80 backdrop-blur border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-gradient-golden text-lg">
            Pop Quiz
          </CardTitle>
          <Badge variant="outline" className="border-primary text-primary">
            {currentQuestion + 1}/{quizQuestions.length}
          </Badge>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold leading-tight text-amber-light">
            {question.question}
          </h3>
          
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`w-full text-left justify-start h-auto p-4 transition-all duration-300 ${
                  selectedAnswer === null 
                    ? "hover:bg-accent/20 hover:border-accent" 
                    : selectedAnswer === index
                    ? index === question.correct
                      ? "bg-green-500/20 border-green-500 text-green-400"
                      : "bg-red-500/20 border-red-500 text-red-400"
                    : index === question.correct
                    ? "bg-green-500/20 border-green-500 text-green-400"
                    : "opacity-50"
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <div className="flex items-center space-x-3">
                  {showResult && (
                    <>
                      {index === question.correct && (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      )}
                      {selectedAnswer === index && index !== question.correct && (
                        <XCircle className="h-5 w-5 text-red-400" />
                      )}
                    </>
                  )}
                  <span className="flex-1">{option}</span>
                </div>
              </Button>
            ))}
          </div>

          {showResult && (
            <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50 animate-fade-in">
              <p className="text-sm text-muted-foreground">
                <strong className="text-accent">Explanation:</strong> {question.explanation}
              </p>
            </div>
          )}
        </div>

        {showResult && (
          <Button 
            onClick={handleNext}
            className="w-full bg-gradient-golden hover:opacity-90 transition-all duration-300"
          >
            {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};