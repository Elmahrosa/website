
import React from 'react';
import { UseCase, EcosystemLink } from './types';

export const USE_CASES: UseCase[] = [
  {
    id: 1,
    title: "National Digital Identity",
    problem: "Fragmented identity systems and reliance on foreign platforms.",
    solution: "Sovereign digital identity system anchored in the TEOS Governance Core with AI-assisted verification.",
    components: ["Sovereign Governance Core", "Pharaoh Portal", "AI Guard"],
    outcomes: ["Unified digital identity", "Reduced fraud", "Foundation for all services"],
    icon: "🆔"
  },
  {
    id: 2,
    title: "National Digital Wallet",
    problem: "Financial exclusion and high transaction costs.",
    solution: "Government-backed digital wallet integrating with existing banks and optional tokenized value layers.",
    components: ["TEOS BankChain", "Unified Wallet", "Gold Reserve Systems"],
    outcomes: ["Increased financial inclusion", "Faster payments", "Transparent public fund flows"],
    icon: "💳"
  },
  {
    id: 3,
    title: "Institutional Digital Currency",
    problem: "High complexity and political risk of traditional CBDCs.",
    solution: "Tokenized institutional value layer (ERT) with policy-controlled issuance and circulation.",
    components: ["ERT Layer", "BankChain", "AI Governance"],
    outcomes: ["Faster pilot programs", "Lower political risk", "Institutional-grade control"],
    icon: "🏛️"
  },
  {
    id: 4,
    title: "Smart City Digital Backbone",
    problem: "Siloed systems and limited accountability in urban management.",
    solution: "Blockchain-backed city operating layer for transport, utilities, healthcare, and mapping.",
    components: ["Smart City Modules", "Mobility (Transport)", "Geospatial Mapping"],
    outcomes: ["Efficient urban services", "Data-driven management", "Reduced corruption"],
    icon: "🏙️"
  },
  {
    id: 5,
    title: "Healthcare Data Sovereignty",
    problem: "Fragmented medical records and privacy risks.",
    solution: "Blockchain-based health records with patient-controlled access and institutional audit trails.",
    components: ["HealthChain", "Identity & Access Control", "AI Audit"],
    outcomes: ["Improved care continuity", "Strong data protection", "Reduced admin overhead"],
    icon: "🏥"
  },
  {
    id: 6,
    title: "Public Finance Transparency",
    problem: "Limited visibility into public spending and public trust deficit.",
    solution: "On-chain public finance tracking with AI-assisted auditing and public dashboards.",
    components: ["BankChain", "AI Auditor", "Civic Analytics"],
    outcomes: ["Real-time oversight", "Reduced corruption risk", "Increased citizen trust"],
    icon: "📊"
  }
];

export const CORE_SUBDOMAINS: EcosystemLink[] = [
  { name: "Whitepaper", url: "https://whitepaper.teosegypt.com/", category: 'core' },
  { name: "Governance Portal", url: "https://pionners.teosegypt.com/", category: 'core' },
  { name: "TEOS Bank", url: "https://bank.teosegypt.com/", category: 'core' },
  { name: "Map of Pi", url: "https://emapofpi.teosegypt.com/", category: 'core' },
  { name: "Nilex DEX", url: "https://dex.teosegypt.com/", category: 'core' },
  { name: "TEOS Wallet", url: "https://wallet1.teosegypt.com/", category: 'core' },
  { name: "Smart City", url: "https://smartcity.teosegypt.com/", category: 'core' },
  { name: "Live Dashboard", url: "https://live.teosegypt.com/", category: 'core' },
  { name: "AI Studio", url: "https://studioai.teosegypt.com/", category: 'core' },
  { name: "ERT Portal", url: "https://ert.teosegypt.com/", category: 'core' }
];

export const GITHUB_REPOS: EcosystemLink[] = [
  { name: "Sovereign System", url: "https://github.com/Elmahrosa/Teos-Sovereign-System", category: 'github' },
  { name: "AI Guard", url: "https://github.com/Elmahrosa/TEOS-AI-Guard", category: 'github' },
  { name: "BankChain", url: "https://github.com/Elmahrosa/Teos-Bankchain", category: 'github' },
  { name: "Civic Constitution", url: "https://github.com/Elmahrosa/International-Civic-Blockchain-Constitution", category: 'github' },
  { name: "Pharaoh Portal", url: "https://github.com/Elmahrosa/Teos-Pharaoh-Portal", category: 'github' },
  { name: "Gold Reserve", url: "https://github.com/Elmahrosa/Teos-Gold-Reserve", category: 'github' }
];
