---
title: "Fast and Gas-efficient Private Sealed-bid Auctions"
collection: publications
permalink: /publications/2025-auction
date: 2025-06-16
term: "Summer"
venue: 'PODC'
# paperurl: '/files/auction.pdf'
authors: 'Jonas Ballweg, Amir K. Goharshady, Zhaorun Lin'
status: 1 # 0: under review 1: accepted in press 2: published
index_terms: ['Smart Contracts', 'Blockchain', 'Auction']
# excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
doi: "https://hal.science/hal-05061427v1"
citation: 'J. Ballweg, A.K. Goharshady, Z. Lin Fast and Gas-efficient Private Sealed-bid Auctions In 44th ACM Symposium on Principles of Distributed Computing (PODC), 2025.'
---
**Abstract** — In decentralized blockchain environments, auctions must ensure fairness, trustless execution and bid confidentiality while operating efficiently within resource-constrained smart contracts. We propose a new family of algorithms for private, trustless auctions that protect bidder identities and bid values while remaining practical for smart contract execution. Our approach builds on top of the Dutch auction model and a stepwise revelation tree. Bidders commit to their bids using cryptographic commitment schemes and later confirm their honest following of the protocol through zero-knowledge proofs, ensuring that only the highest bid is disclosed while all other bids remain (probabilistically) confidential. A key innovation is the use of a reveal tree, which structures the bidding process into logarithmically many rounds, reducing the total number of messages to $O(logn)$ and thereby significantly lowering gas costs and execution times. We further explore variants introducing fake bids to optimize our probabilistic privacy guarantees.

We ensure trustlessness by running the auction logic in a smart contract, thereby eliminating reliance on any single trusted party. This approach prevents bid tampering, front-running, and collusion by enforcing immutability and decentralized verification of bids. The resulting protocol uniquely combines efficiency, trustlessness, and enduring bid privacy, offering a scalable and secure solution for blockchain-based marketplaces and other decentralized applications.

{% if page.index_terms %}
  <code>Index Terms — {{ page.index_terms | join: ', ' }}</code>
{% endif %}