interface TextGearsGrammarCheckerError {
  bad: string;
  better: string[];
  description: Record<string, string>;
}

interface TextGearsGrammarCheckerObject {
  response: {
    errors: TextGearsGrammarCheckerError[]
  }
}