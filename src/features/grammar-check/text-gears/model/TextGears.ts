interface TextGearsGrammarCheckerError {
  bad: string;
  better: string[];
  description: Record<string, string>;
}

export interface TextGearsGrammarCheckerObject {
  response: {
    errors: TextGearsGrammarCheckerError[]
  }
}