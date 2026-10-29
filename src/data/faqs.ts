export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS_AU: FAQItem[] = [
  {
    question: 'What is the legal and regulatory framework for online casinos in Australia?',
    answer:
      'Under the Commonwealth Interactive Gambling Act 2001 (IGA), it is unlawful for operators to offer or advertise real-money online casino services—including pokies, roulette, and blackjack—to people physically in Australia. The Australian Communications and Media Authority (ACMA) actively investigates offshore operators and requests Australian internet service providers to block non-compliant websites. While the IGA penalizes providers and advertisers rather than individual recreational users, offshore sites lack Australian statutory consumer protections, and access may be restricted at any time. HotJackpot provides editorial reporting and does not offer legal advice.',
  },
  {
    question: 'What risks should Australian players be aware of with offshore licensed casinos?',
    answer:
      'Operators licensed in offshore jurisdictions (such as Curacao) are not licensed or regulated by Australian state gambling regulators (e.g., Liquor & Gaming NSW or VGCCC). This means domestic consumer guarantees, government dispute resolution, and Australian ombudsman pathways do not apply if a dispute arises regarding withdrawals or terms. Always read operator terms and conditions thoroughly before participating.',
  },
  {
    question: 'How does PayID work on international gaming platforms?',
    answer:
      'PayID connects to Australia’s New Payments Platform (NPP) for real-time domestic transfers. Some offshore operators utilize third-party international payment processors to accept PayID deposits. While processing is typically fast, Australian financial institutions maintain internal fraud and risk policies that may block or restrict transactions to unapproved gaming-related merchant accounts.',
  },
  {
    question: 'Are gambling and pokie winnings taxed in Australia?',
    answer:
      'According to the Australian Taxation Office (ATO), recreational gambling winnings are not classified as assessable income because they are considered windfalls of luck rather than regular business earnings. Only persons deemed by the ATO to be operating a professional gambling business are subject to taxation on winnings.',
  },
  {
    question: 'Where can Australian residents find free, confidential gambling support?',
    answer:
      'If you or someone you know is affected by gambling harm, free, confidential support is available 24/7 through Gambling Help Online at 1800 858 858 or online at www.gamblinghelponline.org.au. Australian residents can also register with BetStop (www.betstop.gov.au), the National Self-Exclusion Register, to exclude from all Australian-licensed interactive wagering providers.',
  },
];

export const FAQS_CA: FAQItem[] = [
  {
    question: 'How is online gaming regulated in Canada, and what is Ontario’s commercial model?',
    answer:
      'In Canada, gaming regulation is delegated to the provinces. In April 2022, Ontario launched Canada’s first fully regulated open commercial iGaming market, administered by the Alcohol and Gaming Commission of Ontario (AGCO) and iGaming Ontario (iGO). Operators offering services to residents within Ontario must be registered and hold an operating agreement with iGO. Outside Ontario, international offshore operators operate in a grey market. Players should check their provincial regulations before signing up.',
  },
  {
    question: 'What is the legal gambling age in Canadian provinces?',
    answer:
      'In Ontario, British Columbia, New Brunswick, Newfoundland and Labrador, Nova Scotia, Prince Edward Island, and Saskatchewan, the legal gambling age is 19+. In Alberta, Manitoba, and Quebec, the minimum legal age is 18+.',
  },
  {
    question: 'How does Interac e-Transfer function for Canadian casino payments?',
    answer:
      'Interac e-Transfer is Canada’s leading domestic bank payment rail, supported across all major Canadian financial institutions including RBC, TD, Scotiabank, BMO, CIBC, and Desjardins. Deposits are generally credited in Canadian Dollars (CAD) in real time without intermediary currency conversion. Cashout processing times depend on the operator’s verification procedures.',
  },
  {
    question: 'Are online casino winnings subject to Canadian income tax?',
    answer:
      'The Canada Revenue Agency (CRA) does not tax windfall gambling winnings for recreational players, as they are not classified as regular business income. Only individuals identified as professional gamblers operating an ongoing commercial enterprise must declare gambling profits as taxable business income.',
  },
  {
    question: 'What responsible gambling resources are available across Canada?',
    answer:
      'Responsible gambling assistance is available nationwide. In Ontario, players can access ConnexOntario at 1-866-531-2600 or visit www.connexontario.ca. Across all provinces, the Responsible Gambling Council (RGC) provides tools and support at www.responsiblegambling.org.',
  },
];

