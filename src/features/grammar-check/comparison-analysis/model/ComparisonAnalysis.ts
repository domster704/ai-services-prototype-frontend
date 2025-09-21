interface UnifiedError {
  offset: number
  length: number
  covered_text: string
  suggestions: string[]
  comment?: string
  category: string
  provider: string
}


export interface ComparisonResult {
  common: UnifiedError[];
  only_text_gears: UnifiedError[];
  only_trinka: UnifiedError[];
}