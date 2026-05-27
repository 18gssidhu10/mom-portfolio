export interface Education {
  date: string;
  title: string;
  institution?: string;
  description?: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  type: 'current' | 'past';
}

export interface CVData {
  personal: {
    firstName: string;
    lastName: string;
    title: string;
    phone: string;
    email: string;
    address: string;
    dateOfBirth: string;
    nationality: string;
    languages: string[];
  };
  educationNL: Education[];
  educationEN: Education[];
  experienceNL: Experience[];
  experienceEN: Experience[];
  skillsNL: string[];
  skillsEN: string[];
  qualitiesNL: string[];
  qualitiesEN: string[];
  hobbiesNL: string[];
  hobbiesEN: string[];
}

export const cvData: CVData = {
  personal: {
    firstName: 'Rajvir',
    lastName: 'Kaur',
    title: 'Verzorgende IG / ZZP',
    phone: '06-11865081',
    email: 'sgkzorg@gmail.com',
    dateOfBirth: '25-10-1978',
    nationality: 'Nederlands',
    languages: ['Nederlands', 'English', 'Punjabi', 'Hindi'],
  },
  educationNL: [
    {
      date: 'Juli 2023',
      title: 'Verzorgende IG',
      institution: 'Diploma behaald',
    },
    {
      date: 'Mei 2022',
      title: 'Helpende Plus',
      institution: 'Diploma behaald',
    },
    {
      date: 'Februari 2015',
      title: 'Taalles niveau 3 + Rekenles',
      institution: 'ROC Postjesweg 1, Amsterdam',
      description: 'Diploma behaald',
    },
    {
      date: 'September 2013',
      title: 'Helpende Zorg en Welzijn (MBO niveau 2)',
      institution: 'MBO College West',
      description: 'Diploma behaald',
    },
    {
      date: 'September 2005',
      title: 'NT2 (Staat Examen 1)',
      institution: 'ROC van Amsterdam',
    },
    {
      date: 'September 2004 - Juni 2010',
      title: 'Inburgeringscursus',
      institution: 'Amsterdam',
      description: 'Diploma behaald',
    },
    {
      date: 'Maart 1994 - Juli 2000',
      title: 'Universiteit',
      institution: 'India',
      description: 'Diploma behaald',
    },
  ],
  educationEN: [
    {
      date: 'July 2023',
      title: 'Verzorgende IG (Care Professional)',
      institution: 'Diploma obtained',
    },
    {
      date: 'May 2022',
      title: 'Helpende Plus (Assistant Plus)',
      institution: 'Diploma obtained',
    },
    {
      date: 'February 2015',
      title: 'Dutch Language Level 3 + Math',
      institution: 'ROC Postjesweg 1, Amsterdam',
      description: 'Diploma obtained',
    },
    {
      date: 'September 2013',
      title: 'Care and Welfare Assistant (MBO Level 2)',
      institution: 'MBO College West',
      description: 'Diploma obtained',
    },
    {
      date: 'September 2005',
      title: 'NT2 (State Exam 1)',
      institution: 'ROC van Amsterdam',
    },
    {
      date: 'September 2004 - June 2010',
      title: 'Integration Course',
      institution: 'Amsterdam',
      description: 'Diploma obtained',
    },
    {
      date: 'March 1994 - July 2000',
      title: 'University',
      institution: 'India',
      description: 'Diploma obtained',
    },
  ],
  experienceNL: [
    {
      period: '2022 - Heden',
      title: 'ZZP\'er in TMI',
      company: 'Thuiszorg Nederland',
      description:
        'Zelfstandig werkend professioneel in thuiszorg op verschillende locaties: Torenerf Wormer, Amandelbloesem Wormerveer, en Saenden Zaandam. Zorg voor cliënten thuis met aandacht voor hun welzijn en persoonlijke zorg.',
      type: 'current',
    },
    {
      period: '2018 - Heden',
      title: 'Huishoudelijke Hulp',
      company: 'Cordaan',
      description:
        'Vaste betrekking bij Cordaan. Ondersteuning bij dagelijkse huishoudelijke taken en persoonlijke zorg voor cliënten.',
      type: 'current',
    },
    {
      period: 'Februari 2015 - September 2015',
      title: 'Thuisdienst - Huishoudelijke Hulp',
      company: 'Cordaan',
      description:
        'Huishoudelijke ondersteuning en persoonlijke zorg voor cliënten.',
      type: 'past',
    },
    {
      period: 'Oktober 2013 - Juni 2014',
      title: 'Stage - Helpende Zorg en Welzijn',
      company: 'Jatopa in Amstelring',
      description:
        'Praktijkervaring als helpende in zorg en welzijn, ondersteuning bij cliëntenzorg.',
      type: 'past',
    },
  ],
  experienceEN: [
    {
      period: '2022 - Present',
      title: 'Self-Employed (ZZP) Care Professional',
      company: 'TMI Home Care',
      description:
        'Independent home care professional working at various locations across the Netherlands: Torenerf Wormer, Amandelbloesem Wormerveer, and Saenden Zaandam. Providing personal care and support to clients in their homes.',
      type: 'current',
    },
    {
      period: '2018 - Present',
      title: 'Care Assistant',
      company: 'Cordaan',
      description:
        'Permanent position at Cordaan. Assistance with daily household tasks and personal care for clients.',
      type: 'current',
    },
    {
      period: 'February 2015 - September 2015',
      title: 'Home Care Assistant',
      company: 'Cordaan',
      description:
        'Household support and personal care assistance for clients.',
      type: 'past',
    },
    {
      period: 'October 2013 - June 2014',
      title: 'Internship - Care and Welfare Assistant',
      company: 'Jatopa in Amstelring',
      description:
        'Practical experience in care and welfare, assisting with client care.',
      type: 'past',
    },
  ],
  skillsNL: [
    'Nederlands',
    'English',
    'Punjabi',
    'Hindi',
  ],
  skillsEN: [
    'Dutch',
    'English',
    'Punjabi',
    'Hindi',
  ],
  qualitiesNL: [
    'Geduldig en vriendelijk',
    'Kan goed samenwerken en organiseren',
    'Flexibel en behulpzaam',
    'Betrouwbaar en verantwoordelijk',
    'Goed luisteraar',
    'Zorgzaam en empathisch',
  ],
  qualitiesEN: [
    'Patient and friendly',
    'Good teamwork and organizational skills',
    'Flexible and helpful',
    'Reliable and responsible',
    'Good listener',
    'Caring and empathetic',
  ],
  hobbiesNL: [
    'Lezen',
    'Luisteren naar muziek',
    'Koken',
    'Sporten',
    'Gesprekken voeren met mensen',
    'Spelen met kinderen',
  ],
  hobbiesEN: [
    'Reading',
    'Listening to music',
    'Cooking',
    'Sports',
    'Having conversations with people',
    'Playing with children',
  ],
};
