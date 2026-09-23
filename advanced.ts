import type { Chapter } from "./types";

export const advancedChapters: Chapter[] = [
  {
    id: "defi",
    number: 6,
    title: "DeFi",
    kicker: "Finance as programs, not as a casino floor.",
    summary: "AMMs, lending, oracles, and the risks that do not show up on a yield screenshot.",
    lab: {
      id: "amm",
      title: "AMM lab",
      blurb: "Push a simulated swap along the x·y=k curve and watch price impact.",
    },
    lessons: [
      {
        id: "why-defi",
        title: "Open access, no recourse",
        minutes: 7,
        summary: "The honest trade: anyone can use the contract; nobody will unwind your mistake.",
        blocks: [
          {
            type: "p",
            text: "Decentralized finance is a cluster of contracts that look like trading, lending, and derivatives. You do not open an account. You sign from an address. That is the feature (access, composability) and the hazard (no fraud department).",
          },
          {
            type: "p",
            text: "Yield numbers on a dashboard are not a personality. They are compensation for some mix of: trading fees, borrower demand, token emissions (often inflation), and risk you have not priced. If you cannot name the risk, you are the exit liquidity for someone who can.",
          },
          {
            type: "list",
            items: [
              "Smart-contract risk: the code is wrong or upgradeable by an attacker.",
              "Oracle risk: the price feed is stale, thin, or manipulated.",
              "Liquidity risk: you cannot exit size without wrecking the price.",
              "You-risk: approvals, phishing, wrong network, wrong token.",
            ],
          },
        ],
        quiz: [
          {
            id: "d1",
            prompt: "A high advertised yield most reliably tells you:",
            choices: [
              "The strategy is safe",
              "You are being paid for something — including risks and possibly emissions",
              "The protocol cannot fail",
              "Regulators have approved it",
            ],
            answer: 1,
            explain:
              "Yield is a price. Ask what you are selling: risk, liquidity, or attention to a token printer.",
          },
        ],
      },
      {
        id: "amm",
        title: "The curve that prices a swap",
        minutes: 8,
        summary: "x · y = k, price impact, and why a 2% pool fee is not the whole cost.",
        blocks: [
          {
            type: "p",
            text: "An automated market maker holds two reserves. Uniswap v2’s rule is that their product stays constant (ignoring fees). If you take out some ETH, you must put in enough USDC so the product still holds. Large trades move you along the curve: you get a worse price. That is price impact, not a hidden spread from a person.",
          },
          {
            type: "p",
            text: "Liquidity providers deposit both assets and earn a cut of fees. If the price of one asset moves a lot versus the other, the pool’s mix changes and LPs can underperform simply holding (impermanent loss). Providing liquidity is a market-making job, not a savings account.",
          },
          {
            type: "callout",
            kind: "key",
            title: "Use the lab",
            text: "The AMM lab lets you drag a trade and see reserves, implied price, and impact. Numbers beat metaphors. Then come back and read slippage as a security setting, not a nuisance.",
          },
        ],
        quiz: [
          {
            id: "d2",
            prompt: "In a constant-product AMM, a larger trade typically:",
            choices: [
              "Gets a better price because you are a VIP",
              "Moves reserves more and fills at a worse average price",
              "Has zero effect on price",
              "Locks the pool until the next epoch",
            ],
            answer: 1,
            explain:
              "Impact grows with size relative to reserves. Thin pools punish large orders. That is the formula working.",
          },
        ],
      },
      {
        id: "lending",
        title: "Lending without a loan officer",
        minutes: 6,
        summary: "Collateral, liquidation, and oracles as the hidden human.",
        blocks: [
          {
            type: "p",
            text: "Onchain lending is usually overcollateralized: you lock asset A to borrow asset B, because the protocol cannot take you to court. If A falls versus B, a liquidator may repay your debt and seize collateral at a discount. That keeps the system solvent. It is not polite.",
          },
          {
            type: "p",
            text: "The protocol needs a price. That is the oracle. If the oracle is a single spot pool, someone can shove the pool and liquidate you with a flash loan. Serious systems use TWAP, medians, or specialized networks — still a trust surface.",
          },
          {
            type: "callout",
            kind: "warn",
            title: "Stablecoins are products",
            text: "A token named after a dollar is a design: fiat-backed, crypto-overcollateralized, or algorithmic. Those are different machines with different failure modes. Read the reserve or the mechanism, not the ticker.",
          },
        ],
        quiz: [
          {
            id: "d3",
            prompt: "Overcollateralized onchain lending exists mainly because:",
            choices: [
              "Interest rates must be high",
              "The protocol cannot easily enforce unsecured credit against a pseudonymous address",
              "Regulators require 200% collateral",
              "AMMs forbid borrowing",
            ],
            answer: 1,
            explain:
              "No court, no paycheck garnishment. Collateral is the enforcement. Liquidations are the collections department.",
          },
        ],
      },
    ],
  },
  {
    id: "culture",
    number: 7,
    title: "Culture",
    kicker: "Ownership without a floor-price religion.",
    summary: "NFTs, membership, identity — and the difference between a scene and a market.",
    lessons: [
      {
        id: "not-money",
        title: "Tokens that are not money",
        minutes: 7,
        summary: "A unique token can be a ticket, a joke, a license, or a speculative chip.",
        blocks: [
          {
            type: "p",
            text: "Non-fungible tokens make units distinguishable. That is a small technical fact. Culture piled a lot on top: profile pictures, art drops, game items, event tickets, “community.” Some of that is genuine coordination. Some of it is a market for status with worse liquidity than sneakers.",
          },
          {
            type: "p",
            text: "The onchain object is usually a contract address plus a token id, plus metadata that often lives offchain (IPFS, a website). If the image host disappears, you still have a pointer. Whether that pointer still means anything is a social question.",
          },
          {
            type: "callout",
            kind: "note",
            title: "Floor price is not the work",
            text: "If you care about art or membership, use those words. If you care about flipping, admit it. Mixing them is how people feel betrayed by a market doing what markets do.",
          },
        ],
        quiz: [
          {
            id: "c1",
            prompt: "An NFT on Ethereum most precisely is:",
            choices: [
              "The JPEG file stored in every node",
              "A unique token id in a contract, often with metadata elsewhere",
              "A guaranteed copyright registration",
              "A share of a company",
            ],
            answer: 1,
            explain:
              "The file is often offchain. Copyright and securities status are legal questions the token standard does not settle.",
          },
        ],
      },
      {
        id: "identity",
        title: "Identity, cautiously",
        minutes: 6,
        summary: "Addresses are persistent. That is a feature until it is a dossier.",
        blocks: [
          {
            type: "p",
            text: "Reuse an address and your history is public: every donation, every NFT, every mistake. Chain analysis firms exist. Pseudonymity is not anonymity. Mixing, new addresses, and “privacy pools” change the picture and attract policy attention. None of this is a tutorial in evasion; it is a reminder that public ledgers remember.",
          },
          {
            type: "p",
            text: "Onchain identity projects (names, attestations, soulbound tokens) try to make reputation portable. They also make reputation non-portable in the other direction: hard to shed. Design for the enemy as well as the friend.",
          },
        ],
        quiz: [
          {
            id: "c2",
            prompt: "Reusing a single address for all activity means:",
            choices: [
              "You are anonymous",
              "Observers can link your history together more easily",
              "Your seed phrase changes every time",
              "Fees become zero",
            ],
            answer: 1,
            explain:
              "Public ledgers + stable identifiers = a résumé you did not mean to publish.",
          },
        ],
      },
    ],
  },
  {
    id: "security",
    number: 8,
    title: "Security",
    kicker: "The threat is usually a human — including you.",
    summary: "Phishing, poisoned signatures, approvals, recovery — a checklist you would actually follow.",
    lessons: [
      {
        id: "threats",
        title: "A threat model, not a vibe",
        minutes: 7,
        summary: "Cryptography is the easy part. Authorization is the hard part.",
        blocks: [
          {
            type: "p",
            text: "Attackers do not break secp256k1 in the wild. They break attention. Fake wallet sites. Ads that hijack the real URL. Discord “mods.” Clipboard malware that swaps an address. Airdrop NFTs that deep-link to a drain. Lookalike tokens with the right ticker and the wrong contract.",
          },
          {
            type: "list",
            items: [
              "Bookmark official sites. Do not search-and-click when money is involved.",
              "Never type a seed phrase into a webpage. A real wallet does not ask for it to “validate.”",
              "Verify addresses on a hardware screen, not only on the laptop.",
              "Separate a small hot wallet from anything you cannot afford to lose.",
            ],
          },
          {
            type: "callout",
            kind: "warn",
            title: "Support will not message you first",
            text: "Unsolicited help is an attack. So is urgency. So is a prize you did not enter. Slow is a security control.",
          },
        ],
        quiz: [
          {
            id: "s1",
            prompt: "The most common way people lose funds is:",
            choices: [
              "SHA-256 being reversed",
              "Authorizing a malicious action or leaking a secret",
              "Blocks taking ten minutes",
              "Gas fees rounding up",
            ],
            answer: 1,
            explain:
              "The math holds. Humans sign things and paste phrases. That is the battlefield.",
          },
        ],
      },
      {
        id: "signing",
        title: "What you are actually signing",
        minutes: 8,
        summary: "Blind signing is how a pretty UI empties an account.",
        blocks: [
          {
            type: "p",
            text: "A signature is permission. Permit messages, setApprovalForAll, increaseAllowance, “ETH Sign” blobs of hex — wallets vary in how clearly they show this. If the wallet says “I cannot decode this,” that is not a green flag. That is the product telling you it is guessing.",
          },
          {
            type: "p",
            text: "Revoke unused approvals. Prefer exact allowances over unlimited. On hardware devices, enable the settings that show full data even when it is annoying. Annoyance is cheaper than a drained account.",
          },
          {
            type: "callout",
            kind: "key",
            title: "A personal rule",
            text: "If you cannot explain the transaction in one sentence — “send 0.05 ETH to address X I verified” or “swap 100 USDC for ETH on this known router” — do not sign it. Come back later. The chain will wait. The scammer will not.",
          },
        ],
        quiz: [
          {
            id: "s2",
            prompt: "An unlimited token approval means:",
            choices: [
              "The token can never be stolen",
              "That contract may be able to move your entire balance of that token later",
              "Gas is prepaid forever",
              "You minted a new coin",
            ],
            answer: 1,
            explain:
              "Allowances persist. A later bug or a malicious upgrade can pull the allowance without a new, obvious “send” in your head.",
          },
        ],
      },
      {
        id: "checklist",
        title: "A checklist you will actually use",
        minutes: 5,
        summary: "Short on purpose. Print it in your head.",
        blocks: [
          {
            type: "list",
            items: [
              "Seed offline. No photos. Test recovery with an empty wallet.",
              "Hardware for meaningful sums. Verify recipient on the device screen.",
              "Bookmarks, not ads. Typed data you understand, or no signature.",
              "Small hot wallet for experiments. Approvals reviewed like subscriptions.",
              "No “support” in DMs. No prize you did not enter. No urgency.",
              "Inheritance: someone you trust knows the physical recovery plan. The chain will not help them guess.",
            ],
          },
          {
            type: "p",
            text: "Security is not a product you buy once. It is a set of habits that survive a bad day. If a habit is too heavy, you will skip it. Design for the tired version of yourself.",
          },
        ],
        quiz: [
          {
            id: "s3",
            prompt: "The best time to test wallet recovery is:",
            choices: [
              "After you have stored a year of savings in it",
              "With an empty or trivial wallet, before it matters",
              "Never — it might break the phrase",
              "By pasting the phrase into a random website",
            ],
            answer: 1,
            explain:
              "Recovery is a skill. Practice when the cost of a mistake is near zero.",
          },
        ],
      },
    ],
  },
  {
    id: "governance",
    number: 9,
    title: "Governance",
    kicker: "Protocols are political because people are.",
    summary: "Who can change the rules, DAOs, capture, and why free education is a public good.",
    lessons: [
      {
        id: "rules",
        title: "Who can change the rules",
        minutes: 7,
        summary: "If the answer is fuzzy, the risk is not.",
        blocks: [
          {
            type: "p",
            text: "Bitcoin’s conservatism is a political stance: change should be hard. Ethereum’s culture accepts more iteration. A DeFi app with a 3-of-5 admin key is closer to a startup. All three can be legitimate. Pretending they are the same word — “decentralized” — is how due diligence dies.",
          },
          {
            type: "list",
            items: [
              "Immutable contracts: bugs are permanent; so is the promise.",
              "Upgradeable proxies: bugs can be fixed; so can the deal.",
              "Emergency pause: saves users from an exploit; also a kill switch.",
              "Token votes: look participatory; often track whale wallets and empty turnout.",
            ],
          },
          {
            type: "callout",
            kind: "note",
            title: "Read the override",
            text: "Before you depend on a protocol, find the admin, the timelock, the guardian. A 48-hour timelock is a courtesy, not a law of nature.",
          },
        ],
        quiz: [
          {
            id: "g1",
            prompt: "An upgradeable proxy means:",
            choices: [
              "The code can never change",
              "Someone authorized can point the contract at new implementation code",
              "The token cannot be transferred",
              "Proof of work is enabled",
            ],
            answer: 1,
            explain:
              "Upgrades are a governance surface. Sometimes they are responsible. Always they are power.",
          },
        ],
      },
      {
        id: "daos",
        title: "DAOs and the people inside them",
        minutes: 6,
        summary: "A legal wrapper, a chat server, and a token are not automatically a democracy.",
        blocks: [
          {
            type: "p",
            text: "DAO stands for decentralized autonomous organization. In practice: a treasury, a voting module, a forum, and a handful of people who write the proposals. Token voting weights capital. Delegation recreates representative politics. Voter apathy is normal. Capture — by founders, funds, or a loud minority — is normal too.",
          },
          {
            type: "p",
            text: "That is not a reason to sneer. It is a reason to look at turnout, quorum, and who writes the code. The interesting DAOs treat governance as operations, not as a brand. The boring ones copy a template and hope.",
          },
        ],
        quiz: [
          {
            id: "g2",
            prompt: "Token-weighted voting tends to:",
            choices: [
              "Guarantee one-person-one-vote",
              "Give more influence to larger holders",
              "Eliminate politics",
              "Set gas fees to zero",
            ],
            answer: 1,
            explain:
              "It can still be a reasonable way to govern a capital pool. It is not automatically fair in the civic sense.",
          },
        ],
      },
      {
        id: "public-goods",
        title: "Public goods, including this site",
        minutes: 5,
        summary: "Knowledge that anyone can use is easy to underfund and worth making anyway.",
        blocks: [
          {
            type: "p",
            text: "A public good is non-rival and non-excludable: your reading this does not use it up, and we are not putting it behind a paywall. Open-source clients, protocol research, education, and documentation are in this bucket. Markets underproduce them because capturing the value is hard. That is why grants, protocol treasuries, and volunteer work exist — imperfectly.",
          },
          {
            type: "p",
            text: "Lumen is deliberately free. The next milestone is not a certificate you flash. It is being able to help the next person skip a scam, run a node, or explain a fee market without a sales voice. Impact, here, is competence that leaks outward.",
          },
          {
            type: "callout",
            kind: "key",
            title: "A useful test",
            text: "If a project’s “education” only works if you buy the token, it is marketing. If it still works when the token is zero, it might be knowledge.",
          },
        ],
        quiz: [
          {
            id: "g3",
            prompt: "Why might markets underproduce education like this?",
            choices: [
              "Because blockchains cannot store text",
              "Because it is hard to exclude non-payers and hard to capture the value",
              "Because quizzes are illegal",
              "Because gas fees prevent reading",
            ],
            answer: 1,
            explain:
              "Classic public-goods problem. Funding still happens — grants, donations, volunteer time — just not as automatically as a token pump.",
          },
        ],
      },
    ],
  },
  {
    id: "impact",
    number: 10,
    title: "Impact",
    kicker: "Your next milestone is not a ticker.",
    summary: "Signal versus noise, a personal path, and what “useful” looks like after the hype cycle.",
    lessons: [
      {
        id: "signal",
        title: "Signal versus noise",
        minutes: 6,
        summary: "A filter you can reuse on every announcement.",
        blocks: [
          {
            type: "list",
            items: [
              "Does this change who can write the ledger, or only the homepage?",
              "Can I explain the mechanism without the adjective “revolutionary”?",
              "What is the failure mode, named in one sentence?",
              "Who gets paid if I am early and wrong versus late and right?",
              "Would this still matter if the token were delisted tomorrow?",
            ],
          },
          {
            type: "p",
            text: "Hype cycles mint two kinds of casualty: people who buy a story, and people who dismiss a whole field because of the story. You now have enough machinery to do neither. Use it. Most news is marketing. Most dismissals are also marketing, for a different tribe.",
          },
        ],
        quiz: [
          {
            id: "i1",
            prompt: "A healthy first question about a new protocol is:",
            choices: [
              "What is the all-time high?",
              "Who can change the rules, and what fails?",
              "Which influencer is long?",
              "How do I 100x?",
            ],
            answer: 1,
            explain:
              "Mechanism and control first. Price last, if at all. This academy is not a trading desk.",
          },
        ],
      },
      {
        id: "next",
        title: "Pick a next move that is real",
        minutes: 7,
        summary: "Competence compounds. Tickers do not care about you.",
        blocks: [
          {
            type: "p",
            text: "A milestone is a change in what you can do. Examples that count: restore a wallet from a test phrase; read a transaction on a block explorer and name every field; run a light client or a full node; write a tiny contract on a testnet; explain AMMs to a friend without a diagram of a rocket; help someone revoke an approval; contribute a documentation fix.",
          },
          {
            type: "p",
            text: "Examples that do not count, by themselves: a screenshot of a green candle; a role in a Discord; a follow on a founder; a new ticker in a watchlist. Those can be side effects. They are not the work.",
          },
          {
            type: "callout",
            kind: "key",
            title: "Your assignment",
            text: "Open the Milestones page. Claim the ones you can defend out loud. Then pick one next action this week that would still matter if prices went nowhere. That is the path from zero to impact. We will not take it for you.",
          },
          {
            type: "p",
            text: "Come back whenever the noise gets loud. The lessons stay free. The labs stay simulated. The ledger out there is real — treat it with the respect you now know it demands.",
          },
        ],
        quiz: [
          {
            id: "i2",
            prompt: "Which of these is a real milestone?",
            choices: [
              "Explaining a transaction’s fields on a block explorer",
              "Memorizing last week’s prices",
              "Collecting Discord roles",
              "Repeating “ngmi” correctly",
            ],
            answer: 0,
            explain:
              "If you can read the machine, you can keep learning. Prices and roles are optional accessories.",
          },
        ],
      },
    ],
  },
];
