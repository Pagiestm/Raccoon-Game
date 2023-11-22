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
  difficulty: 'Easy' | 'Medium' | 'Hard'; // Ajout de la difficulté
}

// Définissez les questions et leurs réponses
const questions: Question[] = [
  {
    id: 1,
    text: "Who is considered the father of modern graphic design?",
    options: ["Paul Rand", "Milton Glaser", "Herb Lubalin", "Saul Bass"],
    correctAnswer: "Paul Rand",
    difficulty: 'Easy',
  },
  {
    id: 2,
    text: "Which color model is used for web design?",
    options: ["RGB", "CMYK", "Pantone", "Hex"],
    correctAnswer: "RGB",
    difficulty: 'Easy',
  },
  {
    id: 3,
    text: "In typography, what is leading?",
    options: ["Letter spacing", "Line spacing", "Font size", "Font weight"],
    correctAnswer: "Line spacing",
    difficulty: 'Easy',
  },
  {
    id: 4,
    text: "Who designed the iconic 'I ♥ NY' logo?",
    options: ["Paul Rand", "Milton Glaser", "Saul Bass", "Herb Lubalin"],
    correctAnswer: "Milton Glaser",
    difficulty: 'Easy',
  },
  {
    id: 5,
    text: "What does the acronym CMYK stand for?",
    options: [
      "Creative, Modern, Yield, Kind",
      "Cyan, Magenta, Yellow, Key",
      "Color, Mode, Yield, Key",
      "Clever, Modern, Yellow, Key",
    ],
    correctAnswer: "Cyan, Magenta, Yellow, Key",
    difficulty: 'Easy',
  },
  {
    id: 6,
    text: "Who is known for the Swiss Style of graphic design?",
    options: ["David Carson", "Massimo Vignelli", "Saul Bass", "Herb Lubalin"],
    correctAnswer: "Massimo Vignelli",
    difficulty: 'Medium',
  },
  {
    id: 7,
    text: "What software is commonly used for vector graphics?",
    options: ["Adobe Photoshop", "CorelDRAW", "GIMP", "Adobe Illustrator"],
    correctAnswer: "Adobe Illustrator",
    difficulty: 'Medium',
  },
  {
    id: 8,
    text: "Which font is often used for coding and programming?",
    options: ["Arial", "Comic Sans MS", "Helvetica", "Monaco"],
    correctAnswer: "Monaco",
    difficulty: 'Medium',
  },
  {
    id: 9,
    text: "What is the rule of thirds in design?",
    options: [
      "A color theory principle",
      "A layout guideline",
      "A typography rule",
      "A printing technique",
    ],
    correctAnswer: "A layout guideline",
    difficulty: 'Medium',
  },
  {
    id: 10,
    text: "Who designed the Coca-Cola logo?",
    options: ["Paul Rand", "Milton Glaser", "Saul Bass", "Frank Mason Robinson"],
    correctAnswer: "Frank Mason Robinson",
    difficulty: 'Medium',
  },
  {
    id: 11,
    text: "What is the Golden Ratio in design?",
    options: ["1:1", "2:1", "1:1.618", "3:2"],
    correctAnswer: "1:1.618",
    difficulty: 'Hard',
  },
  {
    id: 12,
    text: "Who created the 'Hope' poster for Barack Obama's 2008 presidential campaign?",
    options: ["Paul Rand", "Shepard Fairey", "Milton Glaser", "Banksy"],
    correctAnswer: "Shepard Fairey",
    difficulty: 'Hard',
  },
  {
    id: 13,
    text: "Which design movement emphasized craftsmanship and handcrafted elements?",
    options: ["Art Nouveau", "Bauhaus", "Arts and Crafts", "De Stijl"],
    correctAnswer: "Arts and Crafts",
    difficulty: 'Hard',
  },
  {
    id: 14,
    text: "What does the term 'Lorem Ipsum' refer to in design?",
    options: ["A typeface", "Placeholder text", "Color palette", "Design software"],
    correctAnswer: "Placeholder text",
    difficulty: 'Hard',
  },
  {
    id: 15,
    text: "Who is the founder of the Bauhaus school?",
    options: ["Wassily Kandinsky", "Le Corbusier", "Walter Gropius", "Frank Lloyd Wright"],
    correctAnswer: "Walter Gropius",
    difficulty: 'Hard',
  },
  {
    id: 16,
    text: "What is the Pantone Matching System used for?",
    options: ["Web development", "Color calibration", "Typography", "Print design"],
    correctAnswer: "Color calibration",
    difficulty: 'Hard',
  },
  {
    id: 17,
    text: "Who designed the 'London Underground' logo?",
    options: ["Herb Lubalin", "Saul Bass", "Edward Johnston", "Massimo Vignelli"],
    correctAnswer: "Edward Johnston",
    difficulty: 'Hard',
  },
  {
    id: 18,
    text: "What is 'Kerning' in typography?",
    options: ["Line spacing", "Letter spacing", "Font size", "Font weight"],
    correctAnswer: "Letter spacing",
    difficulty: 'Hard',
  },
  {
    id: 19,
    text: "Which design software is known for 3D modeling?",
    options: ["Adobe Illustrator", "Blender", "Sketch", "Figma"],
    correctAnswer: "Blender",
    difficulty: 'Hard',
  },
  {
    id: 20,
    text: "What does the term 'Responsive Design' refer to?",
    options: ["Adaptive clothing design", "Designing for various screen sizes", "Eco-friendly design", "Print design"],
    correctAnswer: "Designing for various screen sizes",
    difficulty: 'Hard',
  },
  {
    id: 21,
    text: "Who is known for creating the iconic 'I Love New York' logo?",
    options: ["Paul Rand", "Milton Glaser", "Saul Bass", "Herb Lubalin"],
    correctAnswer: "Milton Glaser",
    difficulty: 'Hard',
  },
  {
    id: 22,
    text: "Which design movement focused on simplicity, functionality, and craftsmanship?",
    options: ["Art Nouveau", "Bauhaus", "Minimalism", "Postmodernism"],
    correctAnswer: "Bauhaus",
    difficulty: 'Hard',
  },
  {
    id: 23,
    text: "What is the primary purpose of a mood board in graphic design?",
    options: [
      "To showcase the final design",
      "To present color options",
      "To gather design inspiration",
      "To demonstrate 3D modeling",
    ],
    correctAnswer: "To gather design inspiration",
    difficulty: 'Hard',
  },
  {
    id: 24,
    text: "Who is considered the pioneer of modern typography?",
    options: ["Jan Tschichold", "Eric Gill", "Giambattista Bodoni", "John Baskerville"],
    correctAnswer: "Jan Tschichold",
    difficulty: 'Hard',
  },
  {
    id: 25,
    text: "In color theory, what does the term 'analogous' refer to?",
    options: [
      "Colors that are opposite each other on the color wheel",
      "Colors that are closely related in hue",
      "Colors that create high contrast",
      "Colors that have no visible hue",
    ],
    correctAnswer: "Colors that are closely related in hue",
    difficulty: 'Hard',
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
            setResultMessage("Lost you can't move forward...");
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
        case 'Easy':
          setScore(score + 1);
          break;
        case 'Medium':
          setScore(score + 2);
          break;
        case 'Hard':
          setScore(score + 3);
          break;
        default:
          break;
      }

      setResultMessage("Won !");
    } else {
      setResultMessage("Lost you can't move forward...");
    }
  };

  return (
    <div className={styles.quizzContainer}>
      <h1 className={styles.title}>Quizz</h1>
      <Image src={Logo} alt="Logo" className={styles.logo} />
      {currentQuestion !== null && userAnswer === null && resultMessage === null ? (
        <div>
          <p className={styles.difficulty}>Difficulty : {questions[currentQuestion].difficulty}</p>
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
          <p>Time remaining: {timeRemaining} seconds</p>
        </div>
      ) : (
        <div>
          {resultMessage ? (
            <>
              <p className={`${styles.resultMessage} ${resultMessage === "Lost you can't move forward..." ? styles.errorMessage : styles.successMessage}`}>
                {resultMessage}
              </p>
              {resultMessage === "Won !" && (
                <p className={styles.scoreMessage}>You can move forward {score} spaces!</p>
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}
