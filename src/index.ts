# Solana Memecoin Bot

This project is a Solana memecoin scanner and trading bot designed to:
- Detect new tokens
- Apply strict anti-scam filters
- Analyze trend, momentum, and risk
- Generate BUY / WARNING / EXIT signals
- (Optional) Execute automated trades via Jupiter + Smart Wallet

## Features
- Liquidity checks
- Freeze/Mint authority checks
- Holder growth analysis
- Volume spike detection
- EMA/VWAP trend analysis
- Whale activity detection
- 12-hour auto EXIT logic
- Capital management (30% per trade)

## Project Structure
solana-memecoin-bot/
├─ README.md
├─ config/
│  ├─ config.example.json
├─ src/
│  ├─ index.ts
│  ├─ telegram.ts
│  ├─ scanner.ts
│  ├─ filters.ts
│  ├─ aiLogic.ts
│  ├─ trader.ts
│  ├─ wallet.ts
│  ├─ scheduler.ts
├─ package.json
├─ .env.example
## Status
This is the initial project setup. Logic will be added step by step.
