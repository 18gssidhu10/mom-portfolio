export type Language = 'nl' | 'en';

export interface Translations {
  [key: string]: {
    nl: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation & Header
  portfolio: {
    nl: 'Portfolio',
    en: 'Portfolio',
  },
  home: {
    nl: 'Startpagina',
    en: 'Home',
  },

  // Hero Section
  careprofessional: {
    nl: 'Verzorgende IG / ZZP',
    en: 'Care Professional / Self-Employed',
  },
  contact_me: {
    nl: 'Neem contact met mij op',
    en: 'Get in Touch',
  },
  scroll_to_learn: {
    nl: 'Scrol om meer over mij te weten te komen',
    en: 'Scroll to learn more about me',
  },

  // About Section
  about: {
    nl: 'Over Mij',
    en: 'About Me',
  },
  about_description: {
    nl: 'Ik ben een ervaren verzorgende IG met jarenlange ervaring in thuiszorg. Ik ben geduldig, vriendelijk en toegewijd aan het welzijn van mijn cliënten. Met een sterke achtergrond in zorg en welzijn, zorg ik ervoor dat elke cliënt de beste ondersteuning krijgt.',
    en: "I'm an experienced care professional with years of experience in home care. I'm patient, friendly, and dedicated to my clients' well-being. With a strong background in care and welfare, I ensure every client receives the best support.",
  },
  personal_qualities: {
    nl: 'Persoonlijke Kwaliteiten',
    en: 'Personal Qualities',
  },
  languages: {
    nl: 'Talen',
    en: 'Languages',
  },
  hobbies: {
    nl: 'Hobby\'s',
    en: 'Hobbies',
  },

  // Education Section
  education: {
    nl: 'Opleiding',
    en: 'Education',
  },
  my_education: {
    nl: 'Mijn Opleidingen',
    en: 'My Education',
  },

  // Experience Section
  experience: {
    nl: 'Werkervaring',
    en: 'Work Experience',
  },
  my_experience: {
    nl: 'Mijn Werkervaring',
    en: 'My Experience',
  },

  // Skills Section
  skills: {
    nl: 'Vaardigheden',
    en: 'Skills',
  },

  // Contact Section
  contact: {
    nl: 'Contact',
    en: 'Contact',
  },
  contact_info: {
    nl: 'Contactgegevens',
    en: 'Contact Information',
  },
  send_message: {
    nl: 'Stuur mij een bericht',
    en: 'Send Me a Message',
  },
  name: {
    nl: 'Naam',
    en: 'Name',
  },
  email: {
    nl: 'E-mailadres',
    en: 'Email',
  },
  phone: {
    nl: 'Telefoonnummer',
    en: 'Phone',
  },
  message: {
    nl: 'Bericht',
    en: 'Message',
  },
  send: {
    nl: 'Versturen',
    en: 'Send',
  },
  sending: {
    nl: 'Versturen...',
    en: 'Sending...',
  },
  success: {
    nl: 'Bericht verzonden! Bedankt voor uw bericht.',
    en: 'Message sent! Thank you for reaching out.',
  },
  error: {
    nl: 'Er ging iets mis. Probeer het later opnieuw.',
    en: 'Something went wrong. Please try again later.',
  },
  required_field: {
    nl: 'Dit veld is verplicht',
    en: 'This field is required',
  },
  invalid_email: {
    nl: 'Voer een geldig e-mailadres in',
    en: 'Please enter a valid email',
  },
  footer_text: {
    nl: '© 2024 Rajvir Kaur. Alle rechten voorbehouden.',
    en: '© 2024 Rajvir Kaur. All rights reserved.',
  },
};

export function t(key: string, language: Language): string {
  return translations[key]?.[language] || key;
}
