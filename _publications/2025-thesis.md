---
title: "MPhil Thesis - Novel Blockchain-based Protocols for Electronic Voting and Auctions"
collection: publications
permalink: /publications/2025-thesis
date: 2025-08-01
term: "Summer"
venue: 'Hong Kong University of Science and Technology'
paperurl: '/files/thesis.pdf'
authors: 'Zhaorun Lin'
status: 2 # 0: under review 1: accepted in press 2: published
index_terms: ['Smart Contracts', 'Blockchain']
# excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
# doi: "https://doi.org/10.1007/978-3-031-87054-5_1"
# citation: 'T. Barakbayeva, S. Farokhnia, A. K. Goharshady, P. Li, Z. Lin, "Improved Gas Optimization of Smart Contracts," in 11th International Conference on Fundamentals of Software Engineering (FSEN), 2025, pp 1-10.'
---
**Abstract** — Programmable blockchains have long been a hot research topic given their tremendous use in decentralized applications. Smart contracts, using blockchains as their underlying technology, inherit the desired properties such as verifiability, immutability, and transparency, which make it a great suit in trustless environments.

In this thesis, we consider several decentralized protocols to be built on blockchains, specifically using smart contracts on Ethereum. We used algorithmic and cryptographic tools in our implementations to further improve the level of security and efficiency beyond the state-of-the-art works. We proposed a new approach called Blind Vote, which is an untraceable, secure, efficient, secrecy-preserving, and fully on-chain electronic voting protocol based on the well-known concept of Chaum's blind signatures. We illustrate that our approach achieves the same security guarantees as previous methods such as Tornado Vote [1], while consuming significantly less gas. Thus, we provide a cheaper and considerably more gas-efficient alternative for anonymous blockchain-based voting. On the other hand, we propose a new family of algorithms for private, trustless auctions that protect bidder identities and bid values while remaining practical for smart contract execution. We ensure trustlessness by running the auction logic in a smart contract, thereby eliminating reliance on any single trusted party. This approach prevents bid tampering, front-running, and collusion by enforcing immutability and decentralized verification of bids. The resulting protocol uniquely combines efficiency, trustlessness, and enduring bid privacy, offering a scalable and secure solution for blockchain-based marketplaces and other decentralized applications.

<!-- {% if page.index_terms %}
  <code>Index Terms — {{ page.index_terms | join: ', ' }}</code>
{% endif %} -->