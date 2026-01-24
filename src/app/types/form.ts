export type Question = {
  id: string;
  question: string;
  options: string[];
};

export type Answer = {
  questionId: string;
  selectedOption?: string;
  freeText?: string;
};

export type Guest = {
  id: string;
  name: string;
  allergies: string;
  questions: {
    id: string;
    question: string;
    options: string[];
  }[];
  answers: Record<string, string>;
};
