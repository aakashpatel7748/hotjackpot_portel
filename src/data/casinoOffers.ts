export type Country = 'AU' | 'CA';

export interface CasinoOffer {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  goUrl: string;
  rating: number; // Editorial Rating out of 5
  ratingLabel: string;
  rank: number;
  badge: {
    AU: string;
    CA: string;
  };
  bonus: {
    AU: {
      headline: string;
      subline: string;
      code: string;
      freeSpins: number;
      matchPercentage: string;
      minDeposit: string;
    };
    CA: {
      headline: string;
      subline: string;
      code: string;
      freeSpins: number;
      matchPercentage: string;
      minDeposit: string;
    };
  };
  payoutSpeed: {
    AU: string;
    CA: string;
  };
  paymentMethods: {
    AU: string[];
    CA: string[];
  };
  keyFeatures: {
    AU: string[];
    CA: string[];
  };
  pros: {
    AU: string[];
    CA: string[];
  };
  cons: {
    AU: string[];
    CA: string[];
  };
  wagering: string;
  license: string;
  gamesCount: string;
  trackingUrl: string;
  established: string;
  editorialReview: {
    AU: {
      summary: string;
      bankingNotes: string;
      gameHighlights: string;
    };
    CA: {
      summary: string;
      bankingNotes: string;
      gameHighlights: string;
    };
  };
}

export const CASINO_OFFERS: CasinoOffer[] = [
  {
    id: 'wild-fortune',
    name: 'Wild Fortune',
    slug: 'wild-fortune',
    logoUrl: '/logos/wild-fortune.svg',
    goUrl: '/go/wild-fortune',
    rating: 4.8,
    ratingLabel: "Editor's Rating",
    rank: 1,
    established: '2020',
    badge: {
      AU: 'FEATURED AUSSIE POKIES SELECTION',
      CA: 'FEATURED CASINO CANADA',
    },
    bonus: {
      AU: {
        headline: 'AU$2,000 WELCOME PACKAGE ACROSS FIRST 3 DEPOSITS + 250 FREE SPINS',
        subline: '1st Deposit: 100% Match up to AU$1,000 + 100 FS (2nd & 3rd deposits complete full AU$2,000 package)',
        code: 'WILDVIP2026',
        freeSpins: 250,
        matchPercentage: '100%',
        minDeposit: 'AU$20',
      },
      CA: {
        headline: 'C$2,000 WELCOME PACKAGE ACROSS FIRST 3 DEPOSITS + 250 FREE SPINS',
        subline: '1st Deposit: 100% Match up to C$1,000 + 100 FS (2nd & 3rd deposits complete full C$2,000 package)',
        code: 'WILDVIP2026',
        freeSpins: 250,
        matchPercentage: '100%',
        minDeposit: 'C$20',
      },
    },
    payoutSpeed: {
      AU: 'PayID & Crypto (Operator states 1-2 hours upon verification)',
      CA: 'Interac e-Transfer (Operator states 1-4 hours upon verification)',
    },
    paymentMethods: {
      AU: ['PayID', 'Visa / Mastercard', 'Crypto (BTC, ETH, USDT)', 'Neosurf', 'Bank Wire'],
      CA: ['Interac e-Transfer', 'iDebit', 'Visa / Mastercard', 'MuchBetter', 'Crypto'],
    },
    keyFeatures: {
      AU: [
        'PayID deposit support & digital currency cashier',
        '2,800+ Pokie titles from providers including Pragmatic Play and Relax Gaming',
        'Native AUD balance display in account cashier',
        '24/7 Live Chat support service',
      ],
      CA: [
        'Interac e-Transfer integration for Canadian banking',
        '3,000+ Online Slots & live dealer streams',
        'CAD account balance (avoiding foreign exchange charges)',
        '24/7 Customer support coverage',
      ],
    },
    pros: {
      AU: [
        'Broad selection of modern Hold & Win and Megaways formats',
        'PayID banking options listed in cashier',
        'Fully responsive mobile interface that operates without native app installation',
      ],
      CA: [
        'Direct Interac payment support for Canadian bank accounts',
        'Extensive live dealer suite powered by Evolution Gaming',
        'Stated promotional terms clearly itemized in promotional terms section',
      ],
    },
    cons: {
      AU: ['Offshore Curacao license — operates outside Australian domestic statutory protections'],
      CA: ['Not registered under Ontario iGaming Ontario (iGO) commercial licensing regime'],
    },
    wagering: '40x (bonus amount)',
    license: 'Curacao eGaming (International offshore license)',
    gamesCount: '2,800+ as stated by operator',
    trackingUrl: 'https://gopartner.link/?a=211866&c=199418&s1=11006',
    editorialReview: {
      AU: {
        summary:
          'Wild Fortune offers an extensive library of over 2,800 pokie titles with categorisation by volatility, feature buy, and software studio. The desktop and mobile browser interface is structured with clear cashier navigation and responsive game filtering.',
        bankingNotes:
          'The cashier features PayID alongside cryptocurrency options. Australian players should note that while deposits are typically prompt, withdrawals require initial KYC document verification under international anti-money laundering (AML) standards.',
        gameHighlights:
          'Software highlights include top releases from Pragmatic Play, Relax Gaming, and Nolimit City. Hold & Win mechanics are well-represented.',
      },
      CA: {
        summary:
          'Wild Fortune provides Canadian players with a localized gaming experience featuring CAD native accounts, French/English interface toggles, and Interac payment processing.',
        bankingNotes:
          'Interac e-Transfer is supported for deposits directly from major Canadian banks (RBC, TD, BMO, CIBC, Scotiabank). Withdrawal requests are processed by the cashier team with standard KYC prerequisites.',
        gameHighlights:
          'Live dealer content is primarily delivered by Evolution Gaming, offering standard table games like Infinite Blackjack and Lightning Roulette.',
      },
    },
  },
  {
    id: 'casino-rocket',
    name: 'Casino Rocket',
    slug: 'casino-rocket',
    logoUrl: '/logos/casino-rocket.svg',
    goUrl: '/go/casino-rocket',
    rating: 4.7,
    ratingLabel: "Editor's Rating",
    rank: 2,
    established: '2020',
    badge: {
      AU: 'POPULAR VIP REWARDS PROGRAM',
      CA: 'HIGH-ROLLER VIP PROGRAM',
    },
    bonus: {
      AU: {
        headline: 'AU$1,000 WELCOME PACKAGE ACROSS FIRST 2 DEPOSITS + 150 FREE SPINS',
        subline: '1st Deposit: 100% up to AU$500 + 50 FS (2nd deposit gives 50% up to AU$500 + 100 FS)',
        code: 'ROCKETLAUNCH',
        freeSpins: 150,
        matchPercentage: '100%',
        minDeposit: 'AU$20',
      },
      CA: {
        headline: 'C$1,000 WELCOME PACKAGE ACROSS FIRST 2 DEPOSITS + 150 FREE SPINS',
        subline: '1st Deposit: 100% up to C$500 + 50 FS (2nd deposit gives 50% up to C$500 + 100 FS)',
        code: 'ROCKETLAUNCH',
        freeSpins: 150,
        matchPercentage: '100%',
        minDeposit: 'C$20',
      },
    },
    payoutSpeed: {
      AU: 'PayID & Crypto (Operator states 1-3 hours upon verification)',
      CA: 'Interac e-Transfer (Operator states 2-6 hours upon verification)',
    },
    paymentMethods: {
      AU: ['PayID', 'Credit / Debit Card', 'Bitcoin', 'Litecoin', 'Neosurf'],
      CA: ['Interac e-Transfer', 'Visa / Mastercard', 'Crypto', 'EcoPayz'],
    },
    keyFeatures: {
      AU: [
        'Tiered Rocket VIP Loyalty program with progressive reload benefits',
        'Weekly reload bonuses & free spin drops as listed on promotions page',
        'Over 2,500 pokie titles with software provider stated RTPs',
        '24/7 Live Chat and email ticketing support',
      ],
      CA: [
        'VIP loyalty tiers with progressive cash benefits',
        'Weekend reload bonus options up to C$500',
        'Over 2,500 online slots & virtual table games',
        'Interac and cryptocurrency deposit options',
      ],
    },
    pros: {
      AU: [
        'Fast-loading space-themed user interface optimized for mobile browsers',
        'Regular community tournaments with listed leaderboard prizes',
        'Account profile tools including deposit limit settings for responsible gaming',
      ],
      CA: [
        'Smooth mobile browser gameplay across iOS Safari and Android Chrome',
        'Diverse portfolio of classic table games and live dealers',
        'Multi-currency cashier supporting CAD alongside popular cryptocurrencies',
      ],
    },
    cons: {
      AU: ['Stated promotional wagering requirement is 45x on bonus funds'],
      CA: ['Mandatory identity verification required before first withdrawal request is approved'],
    },
    wagering: '45x (bonus amount)',
    license: 'Curacao eGaming (International offshore license)',
    gamesCount: '2,500+ as stated by operator',
    trackingUrl: 'https://gopartner.link/?a=211866&c=199415&s1=11006',
    editorialReview: {
      AU: {
        summary:
          'Casino Rocket stands out with its distinct neon-space aesthetic and structured loyalty program. Navigation across game categories is quick, and the mobile browser experience requires minimal bandwidth.',
        bankingNotes:
          'Deposits via PayID and cards are credited into player balances quickly. Payout requests are subject to operator compliance checks, with crypto and PayID typically offering the shortest processing windows.',
        gameHighlights:
          'The games lobby categorizes titles into New, Hot, Bonus Buy, and Bitcoin games, featuring well-known studios such as Betsoft, BGaming, and Pragmatic Play.',
      },
      CA: {
        summary:
          'For Canadian players outside Ontario, Casino Rocket presents a clean, mobile-first casino interface with clear French/English accessibility and Canadian Dollar support.',
        bankingNotes:
          'Interac is the recommended deposit rail for Canadian bank accounts. Withdrawals to bank accounts typically complete within 1-2 business days following cashier authorization.',
        gameHighlights:
          'A rich selection of classic video poker, European and American Roulette, and blackjack tables complement the extensive slots collection.',
      },
    },
  },
  {
    id: 'ritzo',
    name: 'Ritzo Casino',
    slug: 'ritzo',
    logoUrl: '/logos/ritzo.svg',
    goUrl: '/go/ritzo',
    rating: 4.6,
    ratingLabel: "Editor's Rating",
    rank: 3,
    established: '2023',
    badge: {
      AU: 'CLASSIC HIGH-LIMIT TABLE EXPERIENCE',
      CA: 'LIVE DEALER SALON SELECTION',
    },
    bonus: {
      AU: {
        headline: 'AU$1,000 STATED WELCOME BONUS + 100 FREE SPINS',
        subline: 'Tiered match package across first 3 qualifying deposits as stated by operator',
        code: 'RITZOVIP100',
        freeSpins: 100,
        matchPercentage: '100%',
        minDeposit: 'AU$25',
      },
      CA: {
        headline: 'C$1,000 STATED WELCOME BONUS + 100 FREE SPINS',
        subline: 'Tiered match package across first 3 qualifying deposits as stated by operator',
        code: 'RITZOVIP100',
        freeSpins: 100,
        matchPercentage: '100%',
        minDeposit: 'C$25',
      },
    },
    payoutSpeed: {
      AU: 'PayID & Crypto (Operator states 2-6 hours upon verification)',
      CA: 'Interac e-Transfer (Operator states 2-6 hours upon verification)',
    },
    paymentMethods: {
      AU: ['PayID', 'Visa / Mastercard', 'Crypto (USDT, BTC)', 'Bank Wire'],
      CA: ['Interac e-Transfer', 'Credit Card', 'MuchBetter', 'Crypto'],
    },
    keyFeatures: {
      AU: [
        'Classic European salon visual aesthetic with higher table betting limits',
        'Stated zero operator surcharge policy on standard AUD deposits',
        'VIP concierge assistance available for regular high-limit players',
        'Curated selection of high-volatility pokies and traditional roulette',
      ],
      CA: [
        'Interac and major credit/debit card support for Canadian residents',
        'HD live dealer studio streaming across desktop and tablet viewports',
        'Standard KYC account validation framework',
        'Live chat customer support desk',
      ],
    },
    pros: {
      AU: [
        'Stated bonus wagering requirement of 35x is lower than the typical 40x-50x industry benchmark',
        'Elegant, clean user interface with zero distracting pop-up ads',
        'Weekly cashback rebate program as detailed in cashier VIP terms',
      ],
      CA: [
        'Higher stated withdrawal ceilings suitable for larger balance players',
        'Clean, fast page load speeds across desktop and mobile devices',
        'Straightforward cashier with direct CAD deposit options',
      ],
    },
    cons: {
      AU: ['Higher minimum qualifying deposit requirement of AU$25'],
      CA: ['Fewer promotional tournaments compared to high-volume multi-brand portals'],
    },
    wagering: '35x (bonus amount as stated)',
    license: 'Curacao eGaming (International offshore license)',
    gamesCount: '2,200+ as stated by operator',
    trackingUrl: 'https://gopartner.link/?a=211866&c=199412&s1=11006',
    editorialReview: {
      AU: {
        summary:
          'Ritzo Casino caters to players who prefer a sophisticated, understated casino lounge aesthetic over flashy animations. The layout is clean and emphasizes table games alongside modern video pokies.',
        bankingNotes:
          'Deposits can be completed via PayID and standard crypto coins. Withdrawal requests are processed in batches by the finance team during standard operating hours.',
        gameHighlights:
          'Table gaming is a standout feature, with multiple single-deck and multi-hand blackjack variants, French Roulette with La Partage rules, and baccarat.',
      },
      CA: {
        summary:
          'Ritzo provides a premium European salon ambiance for Canadian players with direct CAD deposit processing and high-limit table availability.',
        bankingNotes:
          'Interac e-Transfer allows deposits straight from Canadian chequing accounts. Standard KYC documentation (proof of ID and address) is required prior to withdrawal release.',
        gameHighlights:
          'Live dealer streams provide authentic casino floor interaction with professional croupiers hosting blackjack, baccarat, and roulette.',
      },
    },
  },
];
