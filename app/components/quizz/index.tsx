// Importez les modules nécessaires
import { useState, useEffect } from "react";
import styles from './styles.module.css'; // Importez le fichier CSS

// Interface pour définir le type de la question
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

// Définissez les questions et leurs réponses
const questions: Question[] = [
  {
    id: 1,
    text: "Quelle est la capitale de la France ?",
    options: ["Paris", "Berlin", "Londres", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    text: "Quel est le plus grand océan du monde ?",
    options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
    correctAnswer: "Pacifique",
  },
  {
    id: 3,
    text: "Quelle est la couleur du ciel par temps clair ?",
    options: ["Bleu", "Rouge", "Vert", "Jaune"],
    correctAnswer: "Bleu",
  },
];

// Composant Quizz
export default function Quizz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30); // Temps en secondes

  // Déclarez le timer en dehors du scope de l'effet pour qu'il soit accessible
  let timer: NodeJS.Timeout;

  // Spécifiez le type de la fonction handleAnswerClick
  const handleAnswerClick = (selectedOption: string) => {
    // Vérifiez si la réponse est correcte
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Passez à la question suivante
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    timer = setInterval(() => {
      // Mettez à jour le temps restant
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          // Le temps est écoulé, terminez le quizz
          clearInterval(timer);
          alert(`Quizz terminé! Votre score est de ${score}/${questions.length}`);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Nettoyez le timer lorsqu'on quitte le composant
    return () => clearInterval(timer);
  }, [currentQuestion, score]);

  useEffect(() => {
    // Vérifiez si toutes les questions ont été répondues
    if (currentQuestion === questions.length) {
      clearInterval(timer);
      alert(`Quizz terminé! Votre score est de ${score}/${questions.length}`);
    }
  }, [currentQuestion, score]);

  return (
    <div className={styles.quizzContainer}> {/* Utilisez le style du fichier CSS */}
      <h1 className={styles.title}>Quizz</h1>
      <p>Temps restant : {timeRemaining} secondes</p>
      {currentQuestion < questions.length ? (
        <div>
          <p className={styles.numberQuestion}>Question {currentQuestion + 1} sur {questions.length}</p>
          <p className={styles.questions}>{questions[currentQuestion].text}</p>
          <ul className={styles.options}>
            {questions[currentQuestion].options.map((option, index) => (
              <li className={styles.response} key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>Quizz terminé! Votre score est de {score}/{questions.length}</h1>
      )}
    </div>
  );
}
