// Hiragana characters with romaji
export const hiragana = [
  { char: 'あ', romaji: 'a' },
  { char: 'い', romaji: 'i' },
  { char: 'う', romaji: 'u' },
  { char: 'え', romaji: 'e' },
  { char: 'お', romaji: 'o' },
  { char: 'か', romaji: 'ka' },
  { char: 'き', romaji: 'ki' },
  { char: 'く', romaji: 'ku' },
  { char: 'け', romaji: 'ke' },
  { char: 'こ', romaji: 'ko' },
  { char: 'さ', romaji: 'sa' },
  { char: 'し', romaji: 'shi' },
  { char: 'す', romaji: 'su' },
  { char: 'せ', romaji: 'se' },
  { char: 'そ', romaji: 'so' },
  { char: 'た', romaji: 'ta' },
  { char: 'ち', romaji: 'chi' },
  { char: 'つ', romaji: 'tsu' },
  { char: 'て', romaji: 'te' },
  { char: 'と', romaji: 'to' },
  { char: 'な', romaji: 'na' },
  { char: 'に', romaji: 'ni' },
  { char: 'ぬ', romaji: 'nu' },
  { char: 'ね', romaji: 'ne' },
  { char: 'の', romaji: 'no' },
  { char: 'は', romaji: 'ha' },
  { char: 'ひ', romaji: 'hi' },
  { char: 'ふ', romaji: 'fu' },
  { char: 'へ', romaji: 'he' },
  { char: 'ほ', romaji: 'ho' },
  { char: 'ま', romaji: 'ma' },
  { char: 'み', romaji: 'mi' },
  { char: 'む', romaji: 'mu' },
  { char: 'め', romaji: 'me' },
  { char: 'も', romaji: 'mo' },
  { char: 'や', romaji: 'ya' },
  { char: 'ゆ', romaji: 'yu' },
  { char: 'よ', romaji: 'yo' },
  { char: 'ら', romaji: 'ra' },
  { char: 'り', romaji: 'ri' },
  { char: 'る', romaji: 'ru' },
  { char: 'れ', romaji: 're' },
  { char: 'ろ', romaji: 'ro' },
  { char: 'わ', romaji: 'wa' },
  { char: 'を', romaji: 'wo' },
  { char: 'ん', romaji: 'n' },
];

// Katakana characters with romaji
export const katakana = [
  { char: 'ア', romaji: 'a' },
  { char: 'イ', romaji: 'i' },
  { char: 'ウ', romaji: 'u' },
  { char: 'エ', romaji: 'e' },
  { char: 'オ', romaji: 'o' },
  { char: 'カ', romaji: 'ka' },
  { char: 'キ', romaji: 'ki' },
  { char: 'ク', romaji: 'ku' },
  { char: 'ケ', romaji: 'ke' },
  { char: 'コ', romaji: 'ko' },
  { char: 'サ', romaji: 'sa' },
  { char: 'シ', romaji: 'shi' },
  { char: 'ス', romaji: 'su' },
  { char: 'セ', romaji: 'se' },
  { char: 'ソ', romaji: 'so' },
  { char: 'タ', romaji: 'ta' },
  { char: 'チ', romaji: 'chi' },
  { char: 'ツ', romaji: 'tsu' },
  { char: 'テ', romaji: 'te' },
  { char: 'ト', romaji: 'to' },
  { char: 'ナ', romaji: 'na' },
  { char: 'ニ', romaji: 'ni' },
  { char: 'ヌ', romaji: 'nu' },
  { char: 'ネ', romaji: 'ne' },
  { char: 'ノ', romaji: 'no' },
  { char: 'ハ', romaji: 'ha' },
  { char: 'ヒ', romaji: 'hi' },
  { char: 'フ', romaji: 'fu' },
  { char: 'ヘ', romaji: 'he' },
  { char: 'ホ', romaji: 'ho' },
  { char: 'マ', romaji: 'ma' },
  { char: 'ミ', romaji: 'mi' },
  { char: 'ム', romaji: 'mu' },
  { char: 'メ', romaji: 'me' },
  { char: 'モ', romaji: 'mo' },
  { char: 'ヤ', romaji: 'ya' },
  { char: 'ユ', romaji: 'yu' },
  { char: 'ヨ', romaji: 'yo' },
  { char: 'ラ', romaji: 'ra' },
  { char: 'リ', romaji: 'ri' },
  { char: 'ル', romaji: 'ru' },
  { char: 'レ', romaji: 're' },
  { char: 'ロ', romaji: 'ro' },
  { char: 'ワ', romaji: 'wa' },
  { char: 'ヲ', romaji: 'wo' },
  { char: 'ン', romaji: 'n' },
];

// Simple vocabulary sentences for sentence mode
export const vocabSentences = [
  { 
    sentence: 'こんにちは', 
    translation: 'Hello',
    missing: [2], // index of character to hide
    answer: 'に'
  },
  { 
    sentence: 'ありがとう', 
    translation: 'Thank you',
    missing: [4],
    answer: 'う'
  },
  { 
    sentence: 'さようなら', 
    translation: 'Goodbye',
    missing: [1],
    answer: 'よ'
  },
  { 
    sentence: 'すみません', 
    translation: 'Excuse me',
    missing: [3],
    answer: 'せ'
  },
  { 
    sentence: 'おはよう', 
    translation: 'Good morning',
    missing: [2],
    answer: 'よ'
  },
  { 
    sentence: 'こんばんは', 
    translation: 'Good evening',
    missing: [3],
    answer: 'ん'
  },
  { 
    sentence: 'おいしい', 
    translation: 'Delicious',
    missing: [1],
    answer: 'い'
  },
  { 
    sentence: 'かわいい', 
    translation: 'Cute',
    missing: [2],
    answer: 'い'
  },
  { 
    sentence: 'たべます', 
    translation: 'To eat',
    missing: [0],
    answer: 'た'
  },
  { 
    sentence: 'のみます', 
    translation: 'To drink',
    missing: [1],
    answer: 'の'
  },
];
