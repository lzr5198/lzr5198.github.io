---
title: "Blind Vote: Economical and Secret Blockchain-based Voting"
collection: publications
permalink: /publication/2024-blind-vote
date: 2024-8-19
venue: 'IEEE Blockchain'
paperurl: '/files/blind-vote.pdf'
authors: 'Amir K. Goharshady, Zhaorun Lin'
under_review: false
index_terms: ['Electronic Voting', 'Blind Signatures', 'Smart Contracts']
# excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
**Abstract** — Electronic voting has been a hot research topic for decades and has recently garnered much attention due to the invention of programmable blockchains that support smart contracts. This is the ideal framework and technology for electronic voting since voting protocols implemented as smart contracts automatically inherit many desired properties from the underlying blockchain, e.g. verifiability, transparency and pseduonymity. However, the public and decentralized nature of the blockchain allows all transactions to be traced by everyone and thus voters’ choices would be disclosed publicly. There are many solutions to make blockchain-based voting fully anonymous and untraceable. A recent example is Tornado Vote [1] (ICBC 2023). Such protocols often rely on zero-knowledge proofs, especially zkSNARKS, to achieve secrecy and break the link between a voter’s public key and vote. However, verifying these proofs on-chain is expensive and uses a considerable amount of gas (execution fees).

In this work, we propose a new approach called Blind Vote, which is an untraceable, secure, efficient, secrecy-preserving and fully on-chain electronic voting protocol based on the well-known concept of Chaum’s blind signatures. We illustrate that our approach achieves the same security guarantees as previous methods such as Tornado Vote, while consuming significantly less gas. Thus, we provide a cheaper and considerably more gas-efficient alternative for anonymous blockchain-based voting.

<code>Index Terms — {{ page.index_terms | join: ', ' }}</code>