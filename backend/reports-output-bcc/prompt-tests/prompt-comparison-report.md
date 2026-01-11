# Comparaison des Prompts LLM

**Date**: 2025-12-30T12:59:23.373Z
**Échantillon**: 250 clients, 4389 produits

## Résultats globaux

| Prompt | Recall | Precision | F1 | WMAPE | MAE | Tokens | Coût |
|--------|--------|-----------|-------|-------|-----|--------|------|
| H (E-full-mipro) | 88.9% | 40.2% | 0.554 | 22.1% | 1.48 | 6795K | $0.646 |
| J (E-full-mipro-qty) | 89.0% | 40.3% | 0.555 | 22.2% | 1.49 | 6794K | $0.645 |

## Par strate

### difficult

| Prompt | Recall | Precision | WMAPE |
|--------|--------|-----------|-------|
| H | 47.3% | 23.6% | 32.6% |
| J | 46.8% | 23.5% | 32.4% |

### large_high

| Prompt | Recall | Precision | WMAPE |
|--------|--------|-----------|-------|
| H | 87.3% | 51.2% | 29.9% |
| J | 87.5% | 51.0% | 29.9% |

### large_low

| Prompt | Recall | Precision | WMAPE |
|--------|--------|-----------|-------|
| H | 80.2% | 35.5% | 21.2% |
| J | 80.2% | 35.5% | 21.2% |

### medium_high

| Prompt | Recall | Precision | WMAPE |
|--------|--------|-----------|-------|
| H | 79.8% | 55.8% | 24.5% |
| J | 79.8% | 55.8% | 24.5% |

### medium_low

| Prompt | Recall | Precision | WMAPE |
|--------|--------|-----------|-------|
| H | 81.3% | 45.5% | 38.9% |
| J | 81.3% | 45.5% | 38.9% |

### small_high

| Prompt | Recall | Precision | WMAPE |
|--------|--------|-----------|-------|
| H | 97.5% | 83.3% | 25.9% |
| J | 97.5% | 83.3% | 25.9% |

### small_low

| Prompt | Recall | Precision | WMAPE |
|--------|--------|-----------|-------|
| H | 100.0% | 55.6% | 30.6% |
| J | 100.0% | 55.6% | 30.6% |

### xlarge_high

| Prompt | Recall | Precision | WMAPE |
|--------|--------|-----------|-------|
| H | 86.3% | 42.7% | 26.2% |
| J | 87.2% | 42.6% | 26.6% |

### xlarge_low

| Prompt | Recall | Precision | WMAPE |
|--------|--------|-----------|-------|
| H | 87.3% | 34.0% | 15.2% |
| J | 87.3% | 34.0% | 15.2% |

## Recommandation

- **Meilleur Recall**: Prompt J (89.0%)
- **Meilleur WMAPE**: Prompt H (22.1%)
- **Meilleur F1**: Prompt J (0.555)
