import type { Milestone } from "./types";

export const milestones: Milestone[] = [
  {
    id: "explain-money",
    title: "You can explain money without a slogan",
    detail: "Ledgers, trust, and why a shared computer might be useful.",
    chapterId: "zero",
  },
  {
    id: "hold-a-key",
    title: "You know what a key actually is",
    detail: "Seed phrases, custody, and why screenshots are a liability.",
    chapterId: "keys",
  },
  {
    id: "bitcoin-shape",
    title: "You can sketch Bitcoin",
    detail: "Blocks, hashes, issuance — and what it is not.",
    chapterId: "bitcoin",
  },
  {
    id: "ethereum-shape",
    title: "You can sketch Ethereum",
    detail: "Accounts, gas, and programs that live on a public computer.",
    chapterId: "ethereum",
  },
  {
    id: "read-a-tx",
    title: "You can read a transaction",
    detail: "From, to, value, nonce, fee — and what confirmation means.",
    chapterId: "transactions",
  },
  {
    id: "defi-without-casino",
    title: "You can describe DeFi without a ticker",
    detail: "AMMs, lending, and the risks that are not “number go up.”",
    chapterId: "defi",
  },
  {
    id: "ownership",
    title: "You can separate ownership from floor price",
    detail: "Tokens that are not money, and why speculation is optional.",
    chapterId: "culture",
  },
  {
    id: "threat-model",
    title: "You have a personal threat model",
    detail: "Phishing, approvals, and a checklist you would actually use.",
    chapterId: "security",
  },
  {
    id: "politics",
    title: "You see protocols as political",
    detail: "Governance, capture, and public goods — including this academy.",
    chapterId: "governance",
  },
  {
    id: "next-move",
    title: "You know your next real move",
    detail: "Signal versus noise, and a milestone that is not a trade.",
    chapterId: "impact",
  },
];
