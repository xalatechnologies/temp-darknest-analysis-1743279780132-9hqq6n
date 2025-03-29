
// Type definitions for Intl.Segmenter
interface Segmenter {
  segment(input: string): Segments;
}

interface Segments {
  [Symbol.iterator](): IterableIterator<{ segment: string }>;
}

interface SegmenterOptions {
  granularity?: 'grapheme' | 'word' | 'sentence';
  localeMatcher?: 'lookup' | 'best fit';
}

declare namespace Intl {
  class Segmenter {
    constructor(locale?: string | string[], options?: SegmenterOptions);
    segment(input: string): Segments;
  }
}
