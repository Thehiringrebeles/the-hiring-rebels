import type { Metadata } from 'next';
import { ItRecruitmentPageContent } from '../../components/ItRecruitmentPageContent';

export const metadata: Metadata = {
  title: 'IT Recruitment Services | The Hiring Rebels',
  description:
    'Hire top software engineers, developers, DevOps, QA, AI engineers and technology leaders with The Hiring Rebels. Premium IT recruitment services for startups, product companies and enterprises.',
  alternates: {
    canonical: 'https://thehiringrebels.com/it-recruitment',
  },
  keywords: [
    'IT Recruitment',
    'Software Engineer Hiring',
    'Tech Talent Acquisition',
    'DevOps Recruitment',
    'AI Engineer Hiring',
    'Engineering Leadership Hiring',
  ],
  openGraph: {
    title: 'IT Recruitment Services | The Hiring Rebels',
    description:
      'Hire top software engineers, developers, DevOps, QA, AI engineers and technology leaders with The Hiring Rebels.',
    url: 'https://thehiringrebels.com/it-recruitment',
    type: 'website',
    siteName: 'The Hiring Rebels',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Recruitment Services | The Hiring Rebels',
    description:
      'Premium IT recruitment services for startups, product companies and enterprises.',
  },
};

export default function ItRecruitmentPage() {
  return <ItRecruitmentPageContent />;
}
