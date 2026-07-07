import { useState, useEffect } from 'react';
import { hiragana, katakana, vocabSentences } from './data';

function App() {
  const [mode, setMode] = useState('hiragana'); // 'hiragana' or 'katakana'
  const [quizType, setQuizType] = useState('character'); // 'character' or 'sentence'
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);

  const currentData = mode === 'hiragana' ? hiragana : katakana;

  // Generate random character question
  const generateCharacterQuestion = () => {
    const randomIndex = Math.floor(Math.random() * currentData.length);
    const correctChar = currentData[randomIndex];
    
    // Generate 3 wrong options
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
      const wrongIndex = Math.floor(Math.random() * currentData.length);
      if (wrongIndex !== randomIndex && !wrongOptions.find(o => o.char === currentData[wrongIndex].char)) {
        wrongOptions.push(currentData[wrongIndex]);
      }
    }
    
    // Shuffle options
    const allOptions = [correctChar, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    setCurrentQuestion({
      type: 'character',
      correct: correctChar,
      display: correctChar.char,
    });
    setOptions(allOptions);
    resetState();
  };

  // Generate sentence question
  const generateSentenceQuestion = () => {
    const randomIndex = Math.floor(Math.random() * vocabSentences.length);
    const sentenceData = vocabSentences[randomIndex];
    
    // Get characters for options (correct answer + 3 wrong ones)
    const correctChar = sentenceData.answer;
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
      const wrongIndex = Math.floor(Math.random() * currentData.length);
      if (!wrongOptions.find(o => o === currentData[wrongIndex].char) && currentData[wrongIndex].char !== correctChar) {
        wrongOptions.push(currentData[wrongIndex].char);
      }
    }
    
    const allOptions = [correctChar, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    setCurrentQuestion({
      type: 'sentence',
      correct: correctChar,
      sentence: sentenceData.sentence,
      translation: sentenceData.translation,
      missingIndex: sentenceData.missing[0],
    });
    setOptions(allOptions.map(opt => ({ char: opt, romaji: opt })));
    resetState();
  };

  const resetState = () => {
    setSelectedAnswer(null);
    setShowHint(false);
    setShowResult(false);
  };

  const generateQuestion = () => {
    if (quizType === 'character') {
      generateCharacterQuestion();
    } else {
      generateSentenceQuestion();
    }
  };

  useEffect(() => {
    generateQuestion();
  }, [mode, quizType]);

  const handleAnswer = (answer) => {
    if (selectedAnswer) return; // Prevent multiple answers
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer.char === currentQuestion.correct.char || answer === currentQuestion.correct;
    
    if (isCorrect) {
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
  };

  const toggleMode = () => {
    setMode(prev => prev === 'hiragana' ? 'katakana' : 'hiragana');
  };

  const toggleQuizType = () => {
    setQuizType(prev => prev === 'character' ? 'sentence' : 'character');
  };

  const toggleHint = () => {
    setShowHint(prev => !prev);
  };

  const renderCard = () => {
    if (!currentQuestion) return null;

    if (currentQuestion.type === 'character') {
      return (
        <div className="card">
          <div className="character-display">{currentQuestion.display}</div>
          <div className="options">
            {options.map((option, index) => {
              let buttonClass = 'option-btn';
              if (selectedAnswer) {
                if (option.char === currentQuestion.correct.char) {
                  buttonClass += ' correct';
                } else if (option.char === selectedAnswer.char && option.char !== currentQuestion.correct.char) {
                  buttonClass += ' wrong';
                }
              }
              
              return (
                <button
                  key={index}
                  className={buttonClass}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selectedAnswer}
                >
                  {option.romaji}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // Sentence mode
    const sentenceParts = currentQuestion.sentence.split('');
    
    return (
      <div className="card">
        <div className="sentence-display">
          {sentenceParts.map((char, index) => (
            index === currentQuestion.missingIndex ? (
              <span key={index} className="missing-char">
                {selectedAnswer ? (selectedAnswer.char || selectedAnswer) : '?'}
              </span>
            ) : (
              <span key={index}>{char}</span>
            )
          ))}
        </div>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Translation: {currentQuestion.translation}
        </p>
        <div className="options">
          {options.map((option, index) => {
            let buttonClass = 'option-btn';
            if (selectedAnswer) {
              if ((option.char || option) === currentQuestion.correct) {
                buttonClass += ' correct';
              } else if ((option.char || option) === (selectedAnswer.char || selectedAnswer) && (option.char || option) !== currentQuestion.correct) {
                buttonClass += ' wrong';
              }
            }
            
            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedAnswer}
              >
                {option.char || option}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <h1>🇯🇵 Japanese Learning</h1>
      
      <div className="mode-selection">
        <button 
          className={`toggle-btn ${mode === 'hiragana' ? 'active-hiragana' : ''}`}
          onClick={toggleMode}
        >
          Hiragana
        </button>
        <button 
          className={`toggle-btn ${mode === 'katakana' ? 'active-katakana' : ''}`}
          onClick={toggleMode}
        >
          Katakana
        </button>
      </div>

      <div className="quiz-type-selection">
        <button 
          className={`type-btn ${quizType === 'character' ? 'active' : ''}`}
          onClick={toggleQuizType}
        >
          Character Quiz
        </button>
        <button 
          className={`type-btn ${quizType === 'sentence' ? 'active' : ''}`}
          onClick={toggleQuizType}
        >
          Sentence Mode
        </button>
      </div>

      {renderCard()}

      {showResult && (
        <div className={`result-message ${selectedAnswer && (selectedAnswer.char === currentQuestion.correct?.char || selectedAnswer === currentQuestion.correct) ? 'correct' : 'wrong'}`}>
          {selectedAnswer && (selectedAnswer.char === currentQuestion.correct?.char || selectedAnswer === currentQuestion.correct) 
            ? '✅ Correct!' 
            : `❌ Wrong! The correct answer was: ${currentQuestion.correct.char || currentQuestion.correct}`
          }
        </div>
      )}

      {showHint && currentQuestion && (
        <div className="hint-text">
          💡 Hint: {currentQuestion.correct.romaji || 'Look at the translation for context'}
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <button className="next-btn" onClick={generateQuestion}>
          Next Question →
        </button>
        <button 
          className="next-btn" 
          onClick={toggleHint}
          style={{ background: '#ffc107', marginLeft: '10px' }}
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
      </div>

      <div className="score">
        Score: {score.correct} / {score.total}
      </div>
    </div>
  );
}

export default App;
