'use client';

import {useEffect, useState} from 'react';
import questionsData from '@/app/json/questions.json';
import type {Question, Answer} from '@/app/types/form';

const QUESTIONS_PER_GUEST = 3;

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function GuestProfileForm() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const allQuestions = questionsData.questions.filter(
      (q: Question) => q.id !== 'freeText'
    );

    const freeText = questionsData.questions.find(
      (q: Question) => q.id === 'freeText'
    );

    const selected = shuffle(allQuestions).slice(0, QUESTIONS_PER_GUEST);

    if (freeText) selected.push(freeText);

    setQuestions(selected);
  }, []);

  const setOption = (id: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: {
        questionId: id,
        selectedOption: value,
        freeText: prev[id]?.freeText,
      },
    }));
  };

  const setFreeText = (id: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: {
        questionId: id,
        selectedOption: prev[id]?.selectedOption,
        freeText: value,
      },
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);

    // 🔹 Här har du ALLT du behöver
    console.log(Object.values(answers));
  };

  if (submitted) {
    return (
      <div className='max-w-xl mx-auto p-6 text-center space-y-4'>
        <h2 className='text-2xl font-heading'>Tack 💛</h2>
        <p className='opacity-70'>
          Dina svar är sparade och kommer tolkas med glimten i ögat.
        </p>
      </div>
    );
  }

  return (
    <form
      className='max-w-xl mx-auto p-6 space-y-8'
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <header className='space-y-2 text-center'>
        <h2 className='text-3xl font-heading'>Några helt oviktiga frågor</h2>
        <p className='text-sm opacity-70'>
          Svaren används för en lekfull AI-tolkning i programbladet.
        </p>
      </header>

      {questions.map((q) => (
        <div key={q.id} className='space-y-3'>
          <p className='font-medium'>{q.question}</p>

          {q.options.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {q.options.map((opt) => {
                const active = answers[q.id]?.selectedOption === opt;

                return (
                  <button
                    key={opt}
                    type='button'
                    onClick={() => setOption(q.id, opt)}
                    className={`px-3 py-1 rounded-full border text-sm transition
                      ${
                        active
                          ? 'bg-black text-white'
                          : 'border-black/20 hover:border-black'
                      }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          <textarea
            placeholder='Annat (frivilligt)'
            value={answers[q.id]?.freeText ?? ''}
            onChange={(e) => setFreeText(q.id, e.target.value)}
            rows={2}
            className='w-full rounded-md border border-black/20 p-2 text-sm focus:outline-none focus:border-black'
          />
        </div>
      ))}

      <button
        type='submit'
        className='block mx-auto px-6 py-2 rounded-full bg-black text-white'
      >
        Skicka svar
      </button>
    </form>
  );
}
