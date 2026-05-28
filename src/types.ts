export interface RSVPFormData {
  firstName: string;
  lastName: string;
  email: string;
  attending: 'yes' | 'no' | '';
  dietaryRestrictions: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
