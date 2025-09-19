import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Dados do Quiz
const quizQuestions = [
    {
        question: "Qual foi o local do nosso primeiro beijo?",
        options: {
            a: "Jogo do Galo",
            b: "Festa de uma amiga",
            c: "Cinema",
            d: "Em casa"
        },
        correctAnswer: "b"
    },
    {
        question: "Qual foi a nossa primeira viagem juntos?",
        options: {
            a: "Búzios",
            b: "Parati",
            c: "Rio Quente",
            d: "Dubai"
        },
        correctAnswer: "a"
    },
    {
        question: "Qual a comida que você faz que eu mais gosto?",
        options: {
            a: "Parmegiana",
            b: "Arroz colorido",
            c: "Pipoca",
            d: "Macarrão"
        },
        correctAnswer: "d"
    },
    {
        question: "Quem falou pro seu pai que nós estávamos juntos?",
        options: {
            a: "Guilherme",
            b: "Seus amigos",
            c: "Isabela",
            d: "Meus amigos"
        },
        correctAnswer: "a"
    },
    {
        question: "Qual foi a primeira vez que eu falei 'Te amo'?",
        options: {
            a: "Quando eu estava bêbado em uma festa",
            b: "No nosso primeiro beijo",
            c: "Enquanto eu estava em uma viagem para Belo Horizonte",
            d: "Enquanto eu estava em uma viagem para Poços de Caldas"
        },
        correctAnswer: "d"
    }
];

export default function Quiz() {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerSelect = (optionKey) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestionIndex]: optionKey
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            let finalScore = 0;
            quizQuestions.forEach((q, index) => {
                if (selectedAnswers[index] === q.correctAnswer) {
                    finalScore++;
                }
            });
            setScore(finalScore);
            setShowResult(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowResult(false);
        setScore(0);
    };

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isAnswerSelected = selectedAnswers[currentQuestionIndex] !== undefined;

    const renderResult = () => {
        const success = score >= 4;
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8"
            >
                {success ? (
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                ) : (
                    <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
                )}
                <h2 className="serif-heading text-4xl font-bold mb-4 text-stone-800">
                    {success ? "Parabéns, meu amor!" : "Ops..."}
                </h2>
                <p className="serif-body text-lg text-stone-600 mb-8 max-w-md mx-auto">
                    {success
                        ? `Você acertou ${score} de ${quizQuestions.length} perguntas! Você realmente me conhece. Agora, veja uma surpresa especial.`
                        : "Estude mais sobre nós, Por favor : ( !"}
                </p>
                {success ? (
                    <Button
                        size="lg"
                        onClick={() => navigate("/contador")}
                        className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 serif-body"
                    >
                        Desbloquear Surpresa
                    </Button>
                ) : (
                    <Button
                        size="lg"
                        onClick={handleRestartQuiz}
                        className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 serif-body"
                    >
                        Tentar Novamente
                    </Button>
                )}
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center p-6">
            <Button
                variant="ghost"
                onClick={() => navigate("/galeria")}
                className="fixed top-6 left-6 z-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
            >
                <ArrowLeft className="w-4 h-4" />
            </Button>

            <Card className="w-full max-w-2xl shadow-xl border-amber-200/50 rounded-2xl bg-white/60 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                    {showResult ? (
                        renderResult()
                    ) : (
                        <motion.div
                            key={currentQuestionIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CardHeader>
                                <p className="text-sm text-stone-500 serif-body mb-2">
                                    Pergunta {currentQuestionIndex + 1} de {quizQuestions.length}
                                </p>
                                <CardTitle className="text-2xl serif-heading text-stone-800 leading-snug">
                                    {currentQuestion.question}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {Object.entries(currentQuestion.options).map(([key, value]) => (
                                    <Button
                                        key={key}
                                        variant={selectedAnswers[currentQuestionIndex] === key ? "default" : "outline"}
                                        onClick={() => handleAnswerSelect(key)}
                                        className={`w-full justify-start text-left h-auto py-3 px-4 rounded-lg serif-body text-base transition-all duration-200 ${selectedAnswers[currentQuestionIndex] === key ? 'bg-amber-600 text-white border-amber-600' : 'bg-white hover:bg-amber-50 border-stone-300'}`}
                                    >
                                        <span className={`font-bold mr-3`}>{key.toUpperCase()})</span> {value}
                                    </Button>
                                ))}
                            </CardContent>
                            <CardFooter className="justify-end">
                                <Button
                                    size="lg"
                                    onClick={handleNextQuestion}
                                    disabled={!isAnswerSelected}
                                    className="bg-stone-700 hover:bg-stone-800 text-white rounded-full px-8 serif-body"
                                >
                                    {currentQuestionIndex < quizQuestions.length - 1 ? "Próxima Pergunta" : "Finalizar Quiz"}
                                </Button>
                            </CardFooter>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </div>
    );
}