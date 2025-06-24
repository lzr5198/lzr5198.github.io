---
title: "Improved Gas Optimization of Smart Contracts"
collection: publications_zh
permalink: /zh/publications/2025-super-opt
date: 2025-04-07
term: "Spring"
venue: 'FSEN'
paperurl: '/files/super-opt.pdf'
authors: 'Togzhan Barakbayeva, Soroush Farokhnia, Amir K. Goharshady, Pingjiang Li, Zhaorun Lin'
status: 2 # 0: under review 1: accepted in press 2: published
index_terms: ['智能合约', '编译器优化', '区块链']
# excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
doi: "https://doi.org/10.1007/978-3-031-87054-5_1"
citation: 'T. Barakbayeva, S. Farokhnia, A. K. Goharshady, P. Li, Z. Lin, "Improved Gas Optimization of Smart Contracts," in 11th International Conference on Fundamentals of Software Engineering (FSEN), 2025, pp 1-10.'
---
**摘要** — Smart contracts are programs executed on top of a blockchain consensus protocol. Their compiled code (bytecode) is stored on the blockchain and is immutable after deployment. They are self-enforcing in the sense that any function call to a smart contract is executed by all nodes on the network, ensuring that they all reach consensus about the final state of the contract. To prevent denial-of-service attacks, such an execution is costly by design. A "gas" cost is assigned to each bytecode operation, roughly proportional to the resources required to execute it, and any user who initiates a function call to a smart contract has to pay the total gas cost of the resulting execution. On Ethereum alone, the users pay an astounding gas cost of more than 4 billion USD/year.

Smart contracts are often written in high-level programming languages such as Solidity and then compiled to bytecode before being deployed on the blockchain. Thus, a natural compiler optimization problem arising in this context is to produce efficient bytecode that minimizes the total gas usage. A leading approach in this direction is superoptimization, which considers every basic block of the smart contract separately and tries to rewrite it as an equivalent block that uses as little gas as possible. The current state-of-the-art tool is *syrup 2.0*, which encodes gas superoptimization as *Max-SMT* and then relies on SMT-solvers to synthesize an equivalent contract with optimized gas usage.
	
In this work, we make two observations: First, the performance of *Max-SMT* declines significantly as block sizes increase. Thus, although *syrup* is able to find an optimal rewriting for a small block with a dozen bytecode operations, its output on blocks with hundreds or thousands of operations, when given any realistic timeout, is far from optimal. Second, optimizations that can be applied to basic blocks are often local and compositional, i.e. they rewrite several small and disjoint parts of the block. Such locality is lost to *Max-SMT* solvers, mainly because it is unpredictable and there are no clear ways on how one should cut blocks of bytecode into smaller sub-blocks. To ameliorate these issues, we present a simple dynamic programming algorithm that tries every possible division of a block into sub-blocks, recursively calling *syrup* as a black box on each sub-block. Surprisingly, this simple idea leads to highly significant improvements in the gas usage, more than doubling the savings obtained by *syrup*, and reducing the gas usage of real-world smart contracts by **11.23** percent.

<!-- {% if page.index_terms %}
  <code>索引词 — {{ page.index_terms | join: ', ' }}</code>
{% endif %} -->