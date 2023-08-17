export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const colourOptions: readonly ColourOption[] = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  
  export interface FlavourOption {
    readonly value: string;
    readonly label: string;
    readonly rating: string;
  }
  
  export const flavourOptions: readonly FlavourOption[] = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
  ];
  
  export interface StateOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const stateOptions: readonly StateOption[] = [
  { value : "af", label: "Afrikaans" },
  { value : "als", label: "Albanian" },
  { value : "am", label: "Amharic" },
  { value : "an", label: "Aragonese" },
  { value : "ar", label: "Arabic" },
  { value : "arz", label: "Arabic (Egyptian)" },
  { value : "as", label: "Assamese" },
  { value : "ast", label: "Asturian" },
  { value : "av", label: "Avaric" },
  { value : "az", label: "Azerbaijani" },
  { value : "azb", label: "South Azerbaijani" },
  { value : "ba", label: "Bashkir" },
  { value : "bar", label: "Bavarian" },
  { value : "bcl", label: "Central Bikol" },
  { value : "be", label: "Belarusian" },
  { value : "bg", label: "Bulgarian" },
  { value : "bh", label: "Bihari" },
  { value : "bn", label: "Bengali" },
  { value : "bo", label: "Tibetan" },
  { value : "bpy", label: "Bishnupriya Manipuri" },
  { value : "br", label: "Breton" },
  { value : "bs", label: "Bosnian" },
  { value : "bxr", label: "Buryat" },
  { value : "ca", label: "Catalan" },
  { value : "cbk", label: "Chavacano" },
  { value : "ce", label: "Chechen" },
  { value : "ceb", label: "Cebuano" },
  { value : "ckb", label: "Central Kurdish" },
  { value : "co", label: "Corsican" },
  { value : "cs", label: "Czech" },
  { value : "cv", label: "Chuvash" },
  { value : "cy", label: "Welsh" },
  { value : "da", label: "Danish" },
  { value : "de", label: "German" },
  { value : "diq", label: "Zazaki" },
  { value : "dsb", label: "Lower Sorbian" },
  { value : "dty", label: "Doteli" },
  { value : "dv", label: "Dhivehi" },
  { value : "el", label: "Greek" },
  { value : "eml", label: "Emilian-Romagnol" },
  { value : "en", label: "English" },
  { value : "eo", label: "Esperanto" },
  { value : "es", label: "Spanish" },
  { value : "et", label: "Estonian" },
  { value : "eu", label: "Basque" },
  { value : "fa", label: "Persian" },
  { value : "fi", label: "Finnish" },
  { value : "fr", label: "French" },
  { value : "frr", label: "Frisian" },
  { value : "fy", label: "Western Frisian" },
  { value : "ga", label: "Irish" },
  { value : "gd", label: "Gaelic (Scotland)" },
  { value : "gl", label: "Galician" },
  { value : "gn", label: "Guarani" },
  { value : "gom", label: "Konkani" },
  { value : "gu", label: "Gujarati" },
  { value : "gv", label: "Manx" },
  { value : "he", label: "Hebrew" },
  { value : "hi", label: "Hindi" },
  { value : "hif", label: "Fiji Hindi" },
  { value : "hr", label: "Croatian" },
  { value : "hsb", label: "Upper Sorbian" },
  { value : "ht", label: "Haitian Creole" },
  { value : "hu", label: "Hungarian" },
  { value : "hy", label: "Armenian" },
  { value : "ia", label: "Interlingua" },
  { value : "id", label: "Indonesian" },
  { value : "ie", label: "Interlingue; Occidental" },
  { value : "ilo", label: "Iloko" },
  { value : "io", label: "Ido" },
  { value : "is", label: "Icelandic" },
  { value : "it", label: "Italian" },
  { value : "ja", label: "Japanese" },
  { value : "jbo", label: "Lojban" },
  { value : "jv", label: "Javanese" },
  { value : "ka", label: "Georgian" },
  { value : "kk", label: "Kazakh" },
  { value : "km", label: "Khmer" },
  { value : "kn", label: "Kannada" },
  { value : "ko", label: "Korean" },
  { value : "krc", label: "Karachay-Balkar" },
  { value : "ku", label: "Kurdish" },
  { value : "kv", label: "Komi" },
  { value : "kw", label: "Cornish" },
  { value : "ky", label: "Kyrgyz" },
  { value : "la", label: "Latin" },
  { value : "lb", label: "Luxembourgish" },
  { value : "lez", label: "Lezghian" },
  { value : "li", label: "Limburgan" },
  { value : "lmo", label: "Lombard" },
  { value : "lo", label: "Laothian" },
  { value : "lrc", label: "Northern Luri" },
  { value : "lt", label: "Lithuanian" },
  { value : "lv", label: "Latvian" },
  { value : "mai", label: "Maithili" },
  { value : "mg", label: "Malagasy" },
  { value : "mhr", label: "Meadow Mari" },
  { value : "min", label: "Minangkabau" },
  { value : "mk", label: "Macedonian" },
  { value : "ml", label: "Malayalam" },
  { value : "mn", label: "Mongolian" },
  { value : "mr", label: "Marathi" },
  { value : "mrj", label: "Hill Mari" },
  { value : "ms", label: "Malay" },
  { value : "mt", label: "Maltese" },
  { value : "mwl", label: "Mirandese" },
  { value : "my", label: "Burmese" },
  { value : "myv", label: "Erzya" },
  { value : "mzn", label: "Mazandarani" },
  { value : "nah", label: "Nahuatl" },
  { value : "nap", label: "Neapolitan" },
  { value : "nds", label: "Low German" },
  { value : "ne", label: "Nepali" },
  { value : "new", label: "Nepal Bhasa" },
  { value : "nl", label: "Dutch" },
  { value : "nn", label: "Norwegian Nynorsk" },
  { value : "no", label: "Norwegian" },
  { value : "oc", label: "Occitan (post 1500)" },
  { value : "or", label: "Oriya" },
  { value : "os", label: "Ossetian" },
  { value : "pa", label: "Punjabi" },
  { value : "pam", label: "Pampanga" },
  { value : "pfl", label: "Palatine German" },
  { value : "pl", label: "Polish" },
  { value : "pms", label: "Piedmontese" },
  { value : "pnb", label: "Pakistani Punjabi" },
  { value : "ps", label: "Pushto" },
  { value : "pt", label: "Portuguese" },
  { value : "qu", label: "Quechua" },
  { value : "rm", label: "Romansh" },
  { value : "ro", label: "Romanian" },
  { value : "ru", label: "Russian" },
  { value : "rue", label: "Rusyn" },
  { value : "sa", label: "Sanskrit" },
  { value : "sah", label: "Yakut" },
  { value : "sc", label: "Sardinian" },
  { value : "scn", label: "Sicilian" },
  { value : "sco", label: "Scots" },
  { value : "sd", label: "Sindhi" },
  { value : "sh", label: "Serbo-Croatian" },
  { value : "si", label: "Sinhalese" },
  { value : "sk", label: "Slovak" },
  { value : "sl", label: "Slovenian" },
  { value : "so", label: "Somali" },
  { value : "sq", label: "Albanian" },
  { value : "sr", label: "Serbian" },
  { value : "su", label: "Sundanese" },
  { value : "sv", label: "Swedish" },
  { value : "sw", label: "Swahili" },
  { value : "ta", label: "Tamil" },
  { value : "te", label: "Telugu" },
  { value : "tg", label: "Tajik" },
  { value : "th", label: "Thai" },
  { value : "tk", label: "Turkmen" },
  { value : "tl", label: "Tagalog" },
  { value : "tr", label: "Turkish" },
  { value : "tt", label: "Tatar" },
  { value : "tyv", label: "Tuvinian" },
  { value : "ug", label: "Uighur" },
  { value : "uk", label: "Ukrainian" },
  { value : "ur", label: "Urdu" },
  { value : "uz", label: "Uzbek" },
  { value : "vec", label: "Venetian" },
  { value : "vep", label: "Veps" },
  { value : "vi", label: "Vietnamese" },
  { value : "vls", label: "Vlaams" },
  { value : "vo", label: "Volapük" },
  { value : "wa", label: "Walloon" },
  { value : "war", label: "Waray" },
  { value : "wuu", label: "Wu Chinese" },
  { value : "xal", label: "Kalmyk" },
  { value : "xmf", label: "Mingrelian" },
  { value : "yi", label: "Yiddish" },
  { value : "yo", label: "Yoruba" },
  { value : "yue", label: "Yue Chinese" },
  { value : "zh", label: "Chinese" }
  ];
  
  export const optionLength = [
    { value: 1, label: 'general' },
    {
      value: 2,
      label:
        'Evil is the moment when I lack the strength to be true to the Good that compels me.',
    },
    {
      value: 3,
      label:
        "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
    },
  ];
  
  export const dogOptions = [
    { id: 1, label: 'Chihuahua' },
    { id: 2, label: 'Bulldog' },
    { id: 3, label: 'Dachshund' },
    { id: 4, label: 'Akita' },
  ];
  
  // let bigOptions = [];
  // for (let i = 0; i < 10000; i++) {
  // 	bigOptions = bigOptions.concat(colourOptions);
  // }
  
  export interface GroupedOption {
    readonly label: string;
    readonly options: readonly ColourOption[] | readonly FlavourOption[];
  }
  
  export const groupedOptions: readonly GroupedOption[] = [
    {
      label: 'Colours',
      options: colourOptions,
    },
    {
      label: 'Flavours',
      options: flavourOptions,
    },
  ];