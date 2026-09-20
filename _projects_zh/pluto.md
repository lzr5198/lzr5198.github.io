---
name: "Pluto：面向 DeFi 交易钱包的 AI Harness"
collection: projects_zh
date: 2026-06-01
end_date: 现在
place:
technologies: ["TypeScript", "Zod", "DeFi", "工具调用"]
details: ["正在搭建自托管的 DeFi 交易 Agent：每个周期采集行情与资讯、检索相关历史，并为每个已配置交易对生成带引用的买入、卖出或持有。链上签名前做策略与安全检查；交易可先审批或自动执行，单条链故障不会拖垮其余链。", "交易 Agent 跑在自研 TypeScript 工具调用框架上，对接 OpenAI 兼容的 Chat API，用 Zod 校验结构化输出并在 schema 指导下修复。工具为白名单（链上报价、钱包余额等），运行时限制轮次、调用次数与成本，并通过安全钩子处理拒绝、重新决策与交易审批。", "支持保守、均衡、激进三档进攻性，决定 Agent 的交易风格。按用户配置，将对应 prompt 注入决策系统提示词。"]
links: ["https://github.com/lzr5198/pluto"]
link_types: ["github"]
---
