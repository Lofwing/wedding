import questionsData from '@/lib/content/questions.json';

export function getRandomQuestions(count: number) {
  const baseQuestions = questionsData.questions.filter(
    (q) => q.options.length > 0
  );

  return [...baseQuestions].sort(() => Math.random() - 0.5).slice(0, count);
}
