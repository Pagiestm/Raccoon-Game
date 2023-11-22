// Importez les modules nécessaires
import { useState, useEffect } from "react";
import styles from './styles.module.css'; // Importez le fichier CSS
import Image from "next/image";
import Logo from "app/assets/img/logo.png";

// Interface pour définir le type de la question
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile'; // Ajout de la difficulté
}

// Définissez les questions et leurs réponses
const questions: Question[] = [
  {
    id: 1,
    text: "Quelle est la capitale de la France ?",
    options: ["Paris", "Berlin", "Londres", "Madrid"],
    correctAnswer: "Paris",
    difficulty: 'Facile',
  },
  {
    id: 2,
    text: "Quel est le plus grand océan du monde ?",
    options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
    correctAnswer: "Pacifique",
    difficulty: 'Moyen',
  },
  {
    id: 3,
    text: "Quelle est la couleur du ciel par temps clair ?",
    options: ["Bleu", "Rouge", "Vert", "Jaune"],
    correctAnswer: "Bleu",
    difficulty: 'Difficile',
  },
];

// Fonction pour générer un index aléatoire
const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

// Composant Quizz
export default function Quizz() {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Si c'est la première question, initialisez le timer
    if (currentQuestion === null) {
      const initialQuestion = getRandomIndex(questions.length);
      setCurrentQuestion(initialQuestion);

      const timer = setInterval(() => {
        // Mettez à jour le temps restant
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            // Le temps est écoulé, affichez "Perdu"
            clearInterval(timer);
            setResultMessage("Perdu vous ne pouvez pas avancer...");
            return prevTime;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }
  }, [currentQuestion]);

  const handleAnswerClick = (selectedOption: string) => {
    setUserAnswer(selectedOption);

    // Vérifiez si la réponse est correcte
    const isCorrect = selectedOption === questions[currentQuestion!].correctAnswer;

    // Affichez le message approprié
    if (isCorrect) {
      // Ajoutez les points en fonction de la difficulté
      switch (questions[currentQuestion!].difficulty) {
        case 'Facile':
          setScore(score + 1);
          break;
        case 'Moyen':
          setScore(score + 2);
          break;
        case 'Difficile':
          setScore(score + 3);
          break;
        default:
          break;
      }

      setResultMessage("Gagné !");
    } else {
      setResultMessage("Perdu vous ne pouvez pas avancer...");
    }
  };

  return (
    <div className={styles.quizzContainer}>
      <h1 className={styles.title}>Quizz</h1>
      <Image src={Logo} alt="Logo" className={styles.logo} />
      {currentQuestion !== null && userAnswer === null && resultMessage === null ? (
        <div>
          <p className={styles.difficulty}>Difficulté : {questions[currentQuestion].difficulty}</p>
          <p className={styles.questions}>{questions[currentQuestion].text}</p>
          <ul className={styles.options}>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                className={styles.response}
                key={index}
                onClick={() => handleAnswerClick(option)}
                style={{ cursor: userAnswer ? "not-allowed" : "pointer" }}
              >
                {option}
              </li>
            ))}
          </ul>
          <p>Temps restant : {timeRemaining} secondes</p>
        </div>
      ) : (
        <div>
          {resultMessage ? (
            <>
              <p className={styles.resultMessage}>{resultMessage}</p>
              {resultMessage === "Gagné !" && (
                <p className={styles.scoreMessage}>Vous pouvez avancer de {score} cases !</p>
              )}
            </>
          ) : (
            <p>Chargement...</p>
          )}
        </div>
      )}
    </div>
  );
}
