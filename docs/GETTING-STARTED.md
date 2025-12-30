# Getting Started

Guide rapide pour démarrer avec auto-proposal.

## Prérequis

- **Node.js** 20+ (vérifié avec `node --version`)
- **pnpm** 10.8+ (installer: `npm install -g pnpm`)
- **Odoo** instance accessible (URL, credentials)
- **Trigger.dev** compte + project ID (gratuit sur [trigger.dev](https://trigger.dev))
- **OpenRouter API key** (accès Google Gemini)

## Installation

```bash
cd auto-proposal/backend

# 1. Install dependencies
pnpm install

# 2. Setup environment variables
cp .env.example .env  # (si existe)
# Edit .env with your credentials:
# ODOO_URL=...
# ODOO_DB=...
# ODOO_USERNAME=...
# ODOO_PASSWORD=...
# OPENROUTER_API_KEY=sk-or-v1-your-key-here
# TRIGGER_API_KEY=...
```

## Démarrage en développement

```bash
# Terminal 1: Backend
cd backend
pnpm run dev          # Démarre sur http://localhost:3000

# Terminal 2: Trigger.dev (optional, pour voir les tasks)
pnpm run trigger:dev  # Démarre dev environment
```

Vérifier que le serveur est OK:
```bash
curl http://localhost:3000/health
```

## Premier test

### Via API HTTP

Trigger le task principal (orchestrator):
```bash
curl -X POST http://localhost:3000/routes/orchestrator-task \
  -H "Content-Type: application/json" \
  -d '{
    "config": {
      "dateMin": "2025-09-26",
      "dateMax": "2025-10-26",
      "maxClientsToAnalyze": 5
    }
  }'
```

Response:
```json
{
  "success": true,
  "statistics": {
    "totalInactiveClients": 42,
    "clientsProcessed": 5,
    "quotesGenerated": 3,
    ...
  }
}
```

### Via Trigger.dev Dashboard

1. Aller à [dashboard.trigger.dev](https://dashboard.trigger.dev)
2. Sélectionner votre project
3. Aller à "Runs"
4. Voir exécution et logs en temps réel

## Commandes principales

| Commande | Description |
|----------|-------------|
| `pnpm run dev` | Démarre le serveur avec watch mode |
| `pnpm run build` | Compile TypeScript → JavaScript |
| `pnpm start` | Lance le serveur compilé |
| `pnpm run trigger:dev` | Trigger.dev dev environment |

## Structure de fichiers à connaître

```
backend/src/
├── index.ts                          # HTTP server
├── config/auto-proposal.ts           # Configuration
├── features/                         # 5 features principales
│   └── stock-replenishment/          # Example
├── trigger/                          # 4 tasks
│   ├── orchestrator.task.ts          # Main workflow
│   ├── client-proposal.task.ts       # Single client
│   ├── backtest-client.task.ts       # Validate predictions vs reality
│   └── backtest-aggregate.task.ts    # Aggregate statistics
└── routes/                           # HTTP endpoints
    ├── orchestrator-task.ts
    └── client-task.ts
```

## Troubleshooting

**Task fails avec "Odoo connection error"**
- Vérifier `ODOO_URL`, `ODOO_DB`, credentials dans `.env`
- Tester connection: `curl $ODOO_URL/api/version`

**"Trigger.dev project not found"**
- Vérifier `TRIGGER_API_KEY` et project ID dans `backend/trigger.config.ts`
- Vérifier que l'API key a les bonnes permissions

**"Claude API error"**
- Vérifier `ANTHROPIC_API_KEY` est valide
- Vérifier quota Anthropic (account > limits)

## Étapes suivantes

1. Lire [Architecture](./ARCHITECTURE.md) pour comprendre les composants
2. Explorer [Features](./features/) pour chaque module
3. Voir [Tasks](./tasks/) pour workflows
4. Consulter code source dans `backend/src/`

---

**Questions?** Voir [README](./README.md) ou explorer le code source.
