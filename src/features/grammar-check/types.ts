interface ButtonGrammarProps {
  text: string;
  onResult: (res: unknown) => void;
}

interface GrammarCheckHooksResult<T> {
  loading: boolean;
  result: T;
  error: any;
  handleCheck: (text: string) => Promise<void>;
}