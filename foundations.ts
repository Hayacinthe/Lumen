import type { Chapter } from "./types";

export const foundationChapters: Chapter[] = [
  {
    id: "zero",
    number: 1,
    title: "Zero",
    kicker: "Start here even if you have heard every slogan.",
    summary:
      "What money is doing, why a shared ledger might matter, and how to ignore the noise long enough to learn.",
    lessons: [
      {
        id: "why",
        title: "Why this academy exists",
        minutes: 6,
        summary: "Crypto is loud. The useful parts are quiet. We start with a filter.",
        blocks: [
          {
            type: "p",
            text: "Most introductions begin with a price chart or a promise. This one does not. If you are here with zero knowledge, you are in the right place. If you already trade, you are also in the right place — the gaps in “I picked it up on the internet” tend to show up later, as lost funds or confident nonsense.",
          },
          {
            type: "p",
            text: "Lumen is a free path from first question to first real milestone. Not a token. Not a newsletter funnel. A public good: structured lessons, labs you can poke, a glossary that does not assume a CS degree, and a way to see what you actually understand.",
          },
          {
            type: "h",
            text: "Three filters we will keep using",
          },
          {
            type: "list",
            items: [
              "Is this an idea, a product, or a pitch? Ideas can be studied. Products can be tested. Pitches want your keys or your cash.",
              "Who can change the rules? If the answer is “a team with an admin key,” you are not looking at physics. You are looking at a company with extra steps.",
              "What happens when you are wrong? In this field the failure modes are irreversible: sent to the wrong address, signed the wrong message, trusted the wrong bridge.",
            ],
          },
          {
            type: "callout",
            kind: "warn",
            title: "Not financial advice",
            text: "Nothing here is a recommendation to buy, sell, or hold anything. Prices are a distraction until you can explain the machine. We will talk about risk because risk is the subject. We will not talk about “entries.”",
          },
          {
            type: "p",
            text: "Your first milestone is not a wallet full of coins. It is being able to explain, in your own words, what a blockchain is doing — without using the word “decentralized” as a substitute for thought.",
          },
        ],
        quiz: [
          {
            id: "z1",
            prompt: "What is the first milestone this path is aiming at?",
            choices: [
              "Buying a popular coin",
              "Explaining the machine in your own words",
              "Joining a DAO",
              "Getting a hardware wallet",
            ],
            answer: 1,
            explain:
              "Tools come later. If you cannot explain the thing, the tools will use you. Hardware wallets are good; they are not the first idea.",
          },
        ],
      },
      {
        id: "money",
        title: "What money is actually doing",
        minutes: 8,
        summary: "Money is a ledger people agree to treat as settled. Crypto is an argument about who keeps that ledger.",
        blocks: [
          {
            type: "p",
            text: "A dollar in a bank app is not a paper bill in a vault with your name on it. It is a row in a database: the bank owes you. That is a ledger. So is a gift-card balance, a venmo IOU, a corporate points program. Most “money” you touch is an entry someone else can edit, freeze, or reverse — subject to law, policy, and their uptime.",
          },
          {
            type: "p",
            text: "That is not an insult. Editable ledgers with human dispute resolution are how modern commerce works. They are good at “I was defrauded, please unwind this.” They are bad at “I need settlement that does not care who I am, what jurisdiction I am in, or whether the operator likes me.”",
          },
          {
            type: "term",
            term: "Bearer asset",
            def: "Something you can spend by possessing it — cash, a gold coin, a bitcoin UTXO — without asking a named institution to update your account. Possession is control. Loss is also final.",
          },
          {
            type: "p",
            text: "Bitcoin’s pitch, in one sentence: a bearer asset that can move on a network nobody in particular runs, with a supply schedule that is public and hard to quietly inflate. Ethereum’s pitch is adjacent but different: a shared computer where the programs themselves are the ledger. Both are expensive ways to agree. Expense is the point. Cheap agreement is what a company already sells you.",
          },
          {
            type: "callout",
            kind: "key",
            title: "Keep this sentence",
            text: "A blockchain is a way for strangers to share a history and reject invalid updates without appointing a single editor. Everything else is a footnote.",
          },
        ],
        quiz: [
          {
            id: "z2",
            prompt: "A balance in a bank app is best described as:",
            choices: [
              "Physical cash held in a box with your name on it",
              "A row in a ledger the institution can update",
              "A bearer asset you possess",
              "A smart contract",
            ],
            answer: 1,
            explain:
              "Bank deposits are claims on an institution. That is useful, regulated, and not the same as holding a bearer asset.",
          },
        ],
      },
      {
        id: "trust",
        title: "The problem with a single editor",
        minutes: 7,
        summary: "Trusted ledgers work until they do not. Public chains buy a different failure mode.",
        blocks: [
          {
            type: "p",
            text: "If one company keeps the ledger, that company can be efficient, customer-friendly, and legally accountable. It can also go bankrupt, get sanctioned, get hacked, silently change the rules, or simply go down on a Saturday. You are trusting their software, their staff, their incentives, and the courts around them.",
          },
          {
            type: "p",
            text: "A public chain tries to make the history something many independent computers check. No single operator should be able to invent a withdrawal. The cost is brutal: redundancy, fees, slower UX, and a culture that sometimes pretends UI bugs are “trustlessness.”",
          },
          {
            type: "list",
            items: [
              "You still trust math libraries, wallet software, hardware, and your own attention.",
              "You still trust that enough honest operators exist, and that the social layer will not rewrite the rules in a panic.",
              "You do not have to trust a named cashier to decide whether your payment is real.",
            ],
          },
          {
            type: "callout",
            kind: "note",
            title: "“Trustless” is a term of art",
            text: "It means “minimizes trust in a particular operator,” not “requires no trust at all.” People who say it casually are usually selling. People who say it carefully are talking about threat models. We will stay in the second camp.",
          },
          {
            type: "p",
            text: "When you hear “this protocol is decentralized,” ask: who can pause it, upgrade it, or change the oracle? If the answer is a three-person multisig in a group chat, you have learned more than the homepage told you.",
          },
        ],
        quiz: [
          {
            id: "z3",
            prompt: "“Trustless” in this field usually means:",
            choices: [
              "You never have to trust anything",
              "You minimize trust in a particular operator",
              "The code cannot have bugs",
              "A government cannot pass a law",
            ],
            answer: 1,
            explain:
              "You still trust software, hardware, and social consensus. The design goal is removing a single cashier from the critical path.",
          },
        ],
      },
    ],
  },
  {
    id: "keys",
    number: 2,
    title: "Keys",
    kicker: "Accounts without usernames.",
    summary:
      "Private keys, public keys, addresses, seed phrases, and the difference between holding an asset and being owed one.",
    lab: {
      id: "wallet",
      title: "Wallet lab",
      blurb: "Create a simulated wallet, read a seed phrase, and practice not leaking it.",
    },
    lessons: [
      {
        id: "accounts",
        title: "Accounts without usernames",
        minutes: 7,
        summary: "There is no email. Control of a key is the account.",
        blocks: [
          {
            type: "p",
            text: "A normal app account is a row tied to an email, a password reset, and a support team. A crypto account is a keypair. If you control the private key, you can sign. If you do not, you cannot. There is no “forgot password” that is also consistent with “nobody else can freeze this.”",
          },
          {
            type: "term",
            term: "Keypair",
            def: "A private key (secret) and a public key (shareable). The private key signs; the public key verifies. An address is usually a hash of the public key, shortened for humans.",
          },
          {
            type: "p",
            text: "Bitcoin and Ethereum both use elliptic-curve signatures (secp256k1). You do not need to do the math. You need the operational consequence: copying a private key is copying the account. There is no separate “login” to revoke.",
          },
          {
            type: "callout",
            kind: "key",
            title: "The wallet is not a purse",
            text: "Coins live on the ledger. A wallet is software or hardware that stores keys and helps you sign. Deleting the app does not delete the coins. Losing the keys does.",
          },
        ],
        quiz: [
          {
            id: "k1",
            prompt: "If you delete a wallet app but still have the seed phrase, what happens to the funds?",
            choices: [
              "They are destroyed",
              "They are still on the ledger and can be recovered with the phrase",
              "The exchange keeps them",
              "They move to a lost-and-found address",
            ],
            answer: 1,
            explain:
              "The chain stores balances. The phrase recreates the keys. The app was a viewer and a signer, not a vault of coins.",
          },
        ],
      },
      {
        id: "seeds",
        title: "Twelve words, infinite liability",
        minutes: 8,
        summary: "A seed phrase is the master secret. Treat it like the deed to everything the wallet will ever hold.",
        blocks: [
          {
            type: "p",
            text: "Modern wallets create a seed (entropy), encode it as 12 or 24 words (BIP-39), and derive many keys from that seed (BIP-32 / BIP-44). One backup restores the whole tree. Convenient. Also: one leak drains the whole tree, including accounts you have not used yet.",
          },
          {
            type: "list",
            items: [
              "Write the words on paper or metal, offline, in the order shown.",
              "Do not photograph them. Do not type them into a website, a notes app, or a chat with “support.”",
              "Anyone with the words is you. There is no extra PIN on the blockchain itself.",
              "A hardware wallet keeps the private keys off your computer. It will still sign a malicious payload if you tap through.",
            ],
          },
          {
            type: "callout",
            kind: "warn",
            title: "The lab on this site is a simulation",
            text: "The wallet lab generates fake phrases that cannot control real funds. Real wallets will look similar. The similarity is the lesson. Never reuse a demo phrase. Never paste a real phrase into a tutorial.",
          },
          {
            type: "p",
            text: "Custodial accounts (exchanges, some apps) mean they hold the keys and you hold an IOU. That can be the right trade: easier recovery, worse counterparty risk. Self-custody is the opposite trade. Choose it on purpose, not because a meme told you to.",
          },
        ],
        quiz: [
          {
            id: "k2",
            prompt: "Why is photographing a seed phrase a bad idea?",
            choices: [
              "Photos cannot capture words accurately",
              "The image can leak through backups, cloud sync, malware, or a stolen phone",
              "BIP-39 forbids cameras",
              "The phrase expires after one photo",
            ],
            answer: 1,
            explain:
              "The phrase is the secret. Copies of the secret are extra attackers. Cloud photo backup is a very efficient attacker.",
          },
        ],
      },
      {
        id: "custody",
        title: "Custody is a spectrum",
        minutes: 6,
        summary: "Not “CEX bad, seed good.” Who can move the funds, and what fails?",
        blocks: [
          {
            type: "p",
            text: "On one end: an exchange account. You see a balance. They can halt withdrawals. They can be hacked. You can sometimes reverse a login theft with support. On the other end: a seed on a steel plate in a safe. You can send at 3 a.m. to a scammer with nobody to call.",
          },
          {
            type: "p",
            text: "In the middle: hardware wallets, multisigs (several keys must sign), social recovery, smart-contract wallets with spending limits. Each adds operational complexity. Complexity is how people lock themselves out.",
          },
          {
            type: "callout",
            kind: "note",
            title: "A practical default for learners",
            text: "Do not put life-changing sums anywhere until you have practiced recovery with an empty wallet. If you use an exchange, enable phishing-resistant 2FA and treat it as a bank-like counterparty, not a wallet.",
          },
        ],
        quiz: [
          {
            id: "k3",
            prompt: "Self-custody primarily removes which risk?",
            choices: [
              "You can never lose funds",
              "Counterparty risk of an institution holding your keys",
              "Smart-contract bugs",
              "Phishing",
            ],
            answer: 1,
            explain:
              "You still have operational risk, phishing, and contract risk. You no longer need the exchange to be solvent or honest to move the asset.",
          },
        ],
      },
    ],
  },
  {
    id: "bitcoin",
    number: 3,
    title: "Bitcoin",
    kicker: "The first network that mattered.",
    summary: "Hashes, blocks, proof of work, issuance — and the things Bitcoin is deliberately bad at.",
    lessons: [
      {
        id: "origin",
        title: "A 2008 paper and a 2009 chain",
        minutes: 7,
        summary: "Context first: the problem statement, then the machine.",
        blocks: [
          {
            type: "p",
            text: "The Bitcoin whitepaper (Satoshi Nakamoto, 2008) proposed electronic cash that does not route through a financial institution. The chain started in January 2009. The identity of the author is unknown; the software is not a mystery. You can run a node and check the rules yourself.",
          },
          {
            type: "p",
            text: "The design is conservative on purpose. Script is limited. There is no general-purpose virtual machine. Changes are slow and socially contentious. If you wanted a playground for applications, you would not start here — which is why Ethereum exists. If you wanted a settlement asset with a boring, expensive-to-rewrite history, you might.",
          },
          {
            type: "list",
            items: [
              "UTXO model: coins are unspent outputs, not account balances.",
              "Roughly ten-minute blocks, difficulty adjusted so that stays true as hardware changes.",
              "Issuance halves about every four years; the supply approaches 21 million, never quite as a round trick — fees remain for miners after issuance fades.",
            ],
          },
        ],
        quiz: [
          {
            id: "b1",
            prompt: "Bitcoin’s accounting model is:",
            choices: [
              "Account balances like a bank database",
              "UTXOs — unspent transaction outputs",
              "Smart-contract storage slots",
              "IOUs at an exchange only",
            ],
            answer: 1,
            explain:
              "You spend whole outputs and create new ones (including change). Ethereum later used an account model instead.",
          },
        ],
      },
      {
        id: "pow",
        title: "Why the puzzle is expensive",
        minutes: 8,
        summary: "Proof of work is not a green slogan. It is a cost function for proposing history.",
        blocks: [
          {
            type: "p",
            text: "A block commits to a set of transactions and to the previous block’s hash. Miners vary a nonce until the block’s hash is below a target. That takes energy. Finding it is hard; checking it is easy. The longest valid chain (most work) is what honest nodes follow.",
          },
          {
            type: "p",
            text: "To rewrite last week, you would need to redo last week’s work and outrun the honest network now. That is the security model. It is crude. It is also easy to verify. The environmental cost is real and should be discussed without cartoons: the energy is the price of making history expensive in a system that does not appoint a historian.",
          },
          {
            type: "callout",
            kind: "key",
            title: "Hash as glue",
            text: "Change one transaction in an old block and its hash changes, which changes the next block’s parent, which unravels the chain. That is why “a blockchain” is more than a linked list in a slide deck.",
          },
        ],
        quiz: [
          {
            id: "b2",
            prompt: "Proof of work makes which action expensive?",
            choices: [
              "Checking that a block is valid",
              "Proposing a block that other nodes will accept as the next history",
              "Sending a transaction to a node",
              "Reading the whitepaper",
            ],
            answer: 1,
            explain:
              "Verification is cheap. Finding a valid proof is expensive. That asymmetry is the whole trick.",
          },
        ],
      },
      {
        id: "limits",
        title: "What Bitcoin is (and is not) for",
        minutes: 6,
        summary: "A sharp tool. Not a general computer. Not a vibe.",
        blocks: [
          {
            type: "p",
            text: "Bitcoin is good at: scarce digital bearer settlement, censorship-resistant transfer for people who can wait for confirmations, a public audit trail of issuance. It is a weak fit for: cheap global coffee payments on the base layer, complex applications, reversible consumer purchases, identity.",
          },
          {
            type: "p",
            text: "Layers on top (Lightning and others) try to move frequent payments off the base chain. They add assumptions. Always ask what you stop verifying when you go “up a layer.” That question will follow you into Ethereum rollups too.",
          },
          {
            type: "callout",
            kind: "note",
            title: "You do not have to pick a side",
            text: "Bitcoin-only and Ethereum-curious are both coherent positions. Tribalism is not a technical argument. Learn both machines well enough to disagree in complete sentences.",
          },
        ],
        quiz: [
          {
            id: "b3",
            prompt: "A fair description of Bitcoin’s base layer is:",
            choices: [
              "A general-purpose world computer",
              "A deliberately limited settlement network with a scarce bearer asset",
              "A company that issues an app coin",
              "A proof-of-stake validator set",
            ],
            answer: 1,
            explain:
              "Limitation is part of the design. Ethereum later optimized for a programmable computer instead.",
          },
        ],
      },
    ],
  },
  {
    id: "ethereum",
    number: 4,
    title: "Ethereum",
    kicker: "A public computer, not just a ledger.",
    summary: "Accounts, ETH, gas, the EVM, and tokens as a pattern rather than a personality.",
    lessons: [
      {
        id: "computer",
        title: "A computer everyone can verify",
        minutes: 8,
        summary: "State, code, and why “the world computer” is both a metaphor and a cost center.",
        blocks: [
          {
            type: "p",
            text: "Ethereum keeps a global state: accounts with balances, and contracts with code and storage. A transaction is a signed request to change that state. Every full node re-executes the request and must get the same result. That is why it is slow and fee-based compared to a normal server. Redundant execution is the product.",
          },
          {
            type: "term",
            term: "EVM",
            def: "The Ethereum Virtual Machine — the rules for what bytecode means. Solidity and other languages compile down to it. If it is not expressible as EVM (or a later execution environment), it is not an Ethereum contract.",
          },
          {
            type: "p",
            text: "ETH is the native coin. It pays for gas. It is not “the only token”; it is the one the protocol itself knows about. Everything else is a contract pretending, very usefully, to be an asset.",
          },
          {
            type: "callout",
            kind: "note",
            title: "Proof of stake, since 2022",
            text: "Ethereum used proof of work, then merged to proof of stake. Validators lock ETH. Cheating can be slashed. The execution story (EVM, gas, accounts) is separate from the consensus story. Keep them straight.",
          },
        ],
        quiz: [
          {
            id: "e1",
            prompt: "Why do Ethereum transactions cost gas?",
            choices: [
              "To make the logo glow",
              "To meter computation on a public computer so it cannot be looped for free",
              "Because ETH has to go up",
              "Because Bitcoin does it the same way",
            ],
            answer: 1,
            explain:
              "Unbounded computation would let someone stall every node. Gas is a meter and a spam price.",
          },
        ],
      },
      {
        id: "contracts",
        title: "Programs that hold money",
        minutes: 8,
        summary: "Smart contracts are neither smart nor contracts in the legal sense. They are programs with balances.",
        blocks: [
          {
            type: "p",
            text: "A contract account has code. When you send a transaction to it, the EVM runs that code with your data as input. It can move ETH, write storage, call other contracts. If the code says “anyone may withdraw,” anyone may. If it says “only this address,” that is an admin key wearing a hoodie.",
          },
          {
            type: "p",
            text: "Immutability is optional. Many contracts are upgradeable: a proxy points at implementation code the team can swap. That can be responsible (bug fixes) or a rug with extra steps. Read whether a contract can be upgraded before you treat it as physics.",
          },
          {
            type: "list",
            items: [
              "ERC-20: fungible tokens (balances, transfers, approvals).",
              "ERC-721 / 1155: non-fungible or multi-token items.",
              "The standard is an interface. It is not a moral or financial endorsement.",
            ],
          },
          {
            type: "callout",
            kind: "warn",
            title: "Approvals",
            text: "Token approvals let a contract pull from your balance later. Unlimited allowances are how a later exploit becomes your problem. The transaction lab and security chapter will make this tactile.",
          },
        ],
        quiz: [
          {
            id: "e2",
            prompt: "An ERC-20 token is:",
            choices: [
              "A native coin issued by Ethereum governance",
              "A contract that implements a common token interface",
              "Always a security in every jurisdiction",
              "A Bitcoin sidechain",
            ],
            answer: 1,
            explain:
              "Anyone can deploy an ERC-20. The interface is shared; the quality and legality are not.",
          },
        ],
      },
      {
        id: "gas",
        title: "Fees without the folklore",
        minutes: 6,
        summary: "Base fee, tip, failed transactions still costing money.",
        blocks: [
          {
            type: "p",
            text: "Under EIP-1559, each block has a base fee that rises and falls with demand and is burned. You add a priority fee (tip) so a block proposer includes you. You also set a gas limit: the maximum work you will pay for. If execution runs out of gas, state reverts and you still pay for the work done.",
          },
          {
            type: "p",
            text: "That last sentence surprises people. A failed swap is not free. The network did not “steal” the fee; it executed until it could not. Wallets should simulate first. You should still read the simulation.",
          },
          {
            type: "callout",
            kind: "key",
            title: "Congestion is a queue",
            text: "When lots of people want blockspace, the base fee climbs. That is the market, not a punishment. Layer 2s exist mostly because this market got expensive for small actions.",
          },
        ],
        quiz: [
          {
            id: "e3",
            prompt: "A transaction that fails on Ethereum:",
            choices: [
              "Always costs nothing",
              "Can still consume gas for the work that was done",
              "Refunds double the fee",
              "Is secretly included anyway",
            ],
            answer: 1,
            explain:
              "Reverted calls still used blockspace and compute. Budget for failure, especially on experimental contracts.",
          },
        ],
      },
    ],
  },
  {
    id: "transactions",
    number: 5,
    title: "Transactions",
    kicker: "The thing you actually click.",
    summary: "Anatomy of a signed request: nonce, value, data, fees, mempool, inclusion.",
    lab: {
      id: "transaction",
      title: "Transaction lab",
      blurb: "Build a simulated transfer and watch it move from signature to block.",
    },
    lessons: [
      {
        id: "anatomy",
        title: "Anatomy of a transaction",
        minutes: 8,
        summary: "Every field is doing a job. Guessing is how people mis-sign.",
        blocks: [
          {
            type: "p",
            text: "An Ethereum transaction typically carries: nonce (your next sequence number), to (recipient or contract), value (ETH amount), data (empty for a plain send; encoded arguments for a call), gas parameters, chain id, and a signature. Bitcoin transactions are a different shape (inputs, outputs, scripts) with the same spirit: a signed instruction the network can check.",
          },
          {
            type: "list",
            items: [
              "Nonce stops replay: the same signed payload should not spend twice.",
              "Chain id stops replaying a tx on a different network.",
              "Data is where “I thought I was minting an NFT” turns into “I approved a drain.”",
            ],
          },
          {
            type: "callout",
            kind: "key",
            title: "Read the destination",
            text: "If the “to” is a contract you do not recognize, you are not sending a simple payment. You are running someone else’s program with your signature as permission.",
          },
        ],
        quiz: [
          {
            id: "t1",
            prompt: "The nonce on an Ethereum account is:",
            choices: [
              "A random password",
              "The count of transactions the account has sent, used to order and prevent replay",
              "The gas price",
              "The block height",
            ],
            answer: 1,
            explain:
              "Your next tx must use the next nonce. Gaps stall the queue. Reusing a nonce with a higher fee can replace a pending tx.",
          },
        ],
      },
      {
        id: "lifecycle",
        title: "From wallet to block",
        minutes: 7,
        summary: "Signed, gossiped, pending, included — or dropped.",
        blocks: [
          {
            type: "p",
            text: "You sign locally. The wallet sends the payload to a node. The node checks the signature and basic validity, then puts it in a mempool and gossips it. A block proposer picks a set of transactions, often preferring higher fees. Once included, other nodes verify the block. Confirmations accumulate as more blocks are built on top.",
          },
          {
            type: "p",
            text: "Pending is not settled. Dropped is not “the chain lost your money” — if it never included, the nonce is still free. Replaced means you (or malware) sent a new tx with the same nonce. The lab will make these states visible without risking funds.",
          },
          {
            type: "callout",
            kind: "note",
            title: "Public by default",
            text: "Mempools are visible. Sophisticated actors can sandwich DEX trades. This is MEV: value from ordering. You do not need to extract it. You should know it exists so a “weird fill price” is not a mystery.",
          },
        ],
        quiz: [
          {
            id: "t2",
            prompt: "A transaction in the mempool is:",
            choices: [
              "Final and irreversible",
              "A candidate that is not yet part of canonical history",
              "Hidden from everyone except you",
              "Already earning staking yield",
            ],
            answer: 1,
            explain:
              "It may be included, replaced, or dropped. Treat pending as public and unfinished.",
          },
        ],
      },
    ],
  },
];
