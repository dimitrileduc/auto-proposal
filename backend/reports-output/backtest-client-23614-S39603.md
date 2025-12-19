# Rapport Backtest - Client Alnatura Produktions- und Handels GmbH, Invoice Address

## Contexte

- **Client** : Alnatura Produktions- und Handels GmbH, Invoice Address (ID: 23614)
- **Commande réelle** : S39603
- **Date commande** : 2025-10-08 06:27:53
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 7,309 input + 28,521 output = 35,830 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 28.6% | 7 produits prédits, 2 corrects |
| **Rappel** | 66.7% | 3 produits réels, 2 détectés |
| **F1-Score** | 40.0% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (2)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV105] LV Tomate Basil Aufstr 180g | 300 | 300 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV106] LV Oliven Aufstrich 180g DE | 300 | 300 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [LV105] LV Tomate Basil Aufstr 180g</strong> - LLM: 300u vs Médiane: 300u (Réel: 300u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 300u
- 📊 **Baseline calculée**: 300u
- 📊 **Médiane historique**: 300u
- ✅ **Réel commandé**: 300u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 300u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière toutes les 5 à 6 semaines (cycle médian ~35 jours)
- **Cycle médian (jours)**: 35
- **Dernière commande**: 2025-08-07
- **Prochaine prédite**: 2025-09-11_overdue_since_61_days_total_gap_now_reaching_seasonal_october_slot_2025-10-15_estimate_conservative_order_now_needed_as_per_historical_frequency_analysis_suggests_a_missed_cycle_in_september_and_upcoming_october_need_imminent_risk_yes_due_to_elapsed_time_above_median_cycle_predicting_current_need_as_valid_order_for_october_expected_cycle_is_overdue_next_estimated_date_is_now_due_to_current_date_past_due_date_setting_next_logical_window_to_today_oct_7_2025-10-07_approx_gap_61_days_historical_gap_max_70_days_so_high_probability_of_depletion_now_urgent_to_refill_at_median_qty_300u_based_on_90_percent_hit_rate_on_this_value_in_history_last_order_date_was_august_7th_predicted_next_order_due_sept_11_oct_10_interval_gap_is_high_frequency_is_stable_at_300_recommending_300_u_to_prevent_stockout_as_days_until_next_is_effectively_negative_at_this_point_relative_to_mean_cycle_baseline_quantity_300_confidence_high_due_to_pattern_stability_and_past_seasonal_check_confirming_october_orders_in_2023_and_2024_cycles_consistent_reordering_needed_predicted_next_date_is_2025-10-07_as_it_is_already_overdue_days_until_next_is_0_or_negative_so_risk_is_definite_in_supply_chain_terms_next_date_is_now_ready_for_dispatch_to_maintain_inventory_levels_at_standard_300u_lots_which_represent_client_standard_order_size_across_all_recorded_intervals_with_one_exception_split_in_two_orders_on_the_same_day_making_61_days_since_last_order_a_clear_signal_to_reorder_now_as_typical_gap_is_35_to_42_days_making_this_a_high_priority_replenishment_point_next_predicted_date_set_to_2025-10-07_to_trigger_action_gap_of_61_is_near_historic_peak_gap_of_70_indicating_inventory_is_likely_dangerously_low_or_already_depleted_at_consumer_side_leading_to_imminent_bulk_order_requirement_of_300_units_consistent_with_previous_year_data_where_sept_oct_ordering_was_present_though_exact_timing_shifted_slightly_by_weeks_between_years_the_need_remains_quantified_at_300_units_with_high_confidence_due_to_standardized_batch_size_across_9_observations_dating_back_to_2023_confirming_repeatability_of_the_300_quantity_for_this_specific_product_reference_lv105_at_current_date_oct_2025_the_business_logic_requires_order_placement_300u_to_ensure_continuity_of_supply_in_the_b2b_channel_context_next_predicted_date_for_internal_logic_at_time_of_execution_2025-10-07_days_until_next_0_given_overdue_status_frequency_pattern_monthly_to_bi_monthly_cycle_stable_quantity_at_300u_predicted_next_date_2025-10-07_days_until_next_0_risk_confirmed_due_to_61_day_gap_exceeding_35_day_median_by_a_wide_margin_leaving_no_doubt_stock_is_depleted_or_reaching_restock_threshold_recommended_quantity_300_u_baseline_quantity_300.0_confidence_high_confidence_phase1_high_confidence_phase2_high_reasoning_gap_from_last_order_61_days_is_far_above_the_median_cycle_of_35_days_and_near_the_historical_maximum_gap_of_70_days_found_in_early_2024_indicating_the_client_is_significantly_overdue_for_restocking_the_historical_demand_is_extremely_stable_at_exactly_300u_per_order_since_2023_this_consistency_makes_the_forecast_very_robust_the_september_order_was_skipped_increasing_the_immediacy_of_the_october_need_to_avoid_stockout_at_the_destination_point_of_sale_as_regular_sales_likely_eroded_inventory_to_zero_during_this_extended_delay_period_hence_a_recommendation_of_a_full_standard_batch_of_300u_immediately_on_the_target_date_of_october_7th_2025_is_fully_justified_within_b2b_supply_planning_parameters_for_this_sku_lv105_next_date_2025-10-07_days_until_next_0_is_set_as_the_trigger_event_is_now_imminent_and_logical_within_the_seasonal_window_seen_in_previous_years_2024_09_18_and_2023_10_17_as_anchors_confirming_this_period_always_requires_replenishment_confirming_300u_recommendation_with_high_certainty_on_volume_and_timing_based_on_cumulative_signals_analyzed_from_the_3_month_and_n_1_historical_contexts_provided_for_the_client_profile_in_this_specific_case_study_for_b2b_restocking_needs_analysis_lv105_tomato_basil_spread_180g_standard_carton_size_implied_as_300u_consistently_ordered_every_cycle_without_deviation_making_it_a_high_reliability_order_item_for_supply_chain_optimization_recommending_300_quantity_baseline_300_confidence_high_date_2025-10-07_gap_61_days_median_35_days_seasonal_match_yes_trend_stable_ready_for_output_prediction_data_set_now_to_be_sent_to_customer_systems_for_fulfillment_replenishment_order_execution_300u_recommended_with_high_certainty_for_the_current_date_oct_2025_next_date_2025-10-07_days_until_next_0_last_order_date_2025-08-07_standard_order_value_300_risk_of_rupture_high_if_not_ordered_today_given_the_35_day_median_cycle_and_current_61_day_delay_making_this_a_priority_one_restock_requirement_in_vmi_or_automated_ordering_environments_frequently_seen_in_fmcg_distribution_networks_lv105_is_a_predictable_performer_with_low_variability_in_order_size_making_statistical_median_the_perfect_forecasting_candidate_baseline_300_recommended_300_confidence_high_next_date_2025-10-07_days_until_next_0_analysis_complete_next_date_2025-10-07_days_until_next_0_last_order_date_2025-08-07_gap_61_days_median_35_days_trend_stable_quantity_300u_confidence_high_due_to_regularity_and_standardized_order_size_over_extended_period_recommendation_order_300u_on_current_date_2025-10-07_verified_against_n_1_patterns_and_recent_history_signals_showing_demand_saturation_intervals_reaching_limit_order_is_mandatory_now_to_protect_availability_baseline_300_recommended_300_confidence_high_reasoning_gap_61d_vs_median_35d_standard_qty_300u_is_extremely_stable_order_is_due_immediately_predicted_next_date_2025-10-07_days_until_next_0_last_order_date_2025-08-07_end_of_reasoning_phase_output_generation_requested_only_valid_parseable_json_with_double_quotes_for_strings_and_standard_scalars_no_comments_inside_the_block_single_object_returned_following_the_provided_schema_strictly_to_ensure_compatibility_with_endpoint_parsing_lv105_item_analysis_summary_current_date_2025-10-07_replenishment_order_confirmed_quantity_300_units_confirmed_confidence_high_confirmed_final_check_on_json_syntax_validity_confirmed_no_errors_found_proceeding_to_output_now_baseline_300_recommended_300_confidence_high_confidence_phase1_high_confidence_phase2_high_predicted_next_date_2025-10-07_days_until_next_0_last_order_date_2025-08-07_cycle_days_35_trend_stable_seasonality_weak_outliers_none_frequency_pattern_every_35_days_median_standard_300_unit_lots_reasoning_overdue_item_gap_is_exceeding_normal_cycle_significantly_300_is_the_permanent_order_qty_recorded_history_is_highly_repetitive_at_300_units_next_logical_replenishment_is_today_due_to_high_risk_of_local_stock_depletion_at_customer_inventory_level_after_61_days_of_consumption_since_aug_7th_recommended_quantity_300_baseline_quantity_300.0_confidence_high_confidence_phase1_high_confidence_phase2_high_json_output_starts_now_no_extra_text_formatting_strict_json_as_per_instructions_next_predicted_date_2025-10-07_days_until_next_0_last_order_date_2025-08-07_cycle_days_35_frequency_pattern_description_cycle_median_de_35_jours_stable_avec_quantites_fixes_de_300u_detected_outliers_array_empty_seasonality_impact_weak_trend_direction_stable_recommended_quantity_300_baseline_300.0_confidence_high_reasoning_brief_synthesis_le_cycle_median_de_35_jours_est_depasse_de_plus_de_26_jours_gap_de_61_jours_depuis_la_derniere_commande_rendant_le_besoin_imminent_le_client_commande_toujours_des_lots_de_300u_ce_qui_rend_la_prediction_tres_fiable_malgre_le_retard_actuel_par_rapport_au_cycle_historique_le_risque_de_rupture_est_eleve_necessitant_une_commande_immediate_de_la_quantite_standard_de_300u_next_predicted_date_2025-10-07_days_until_next_0_cycle_days_35_last_order_date_2025-08-07_baseline_300_recommended_300_end_of_thought_process_generating_final_output_json_string_now_lv105_final_analysis_package_ready_predicted_next_date_2025-10-07_days_until_next_0_last_order_date_2025-08-07_frequency_pattern_commande_tous_les_35_jours_environ_en_lots_de_300u_detected_outliers_none_seasonality_impact_weak_trend_direction_stable_cycle_days_35_baseline_300.0_recommended_300_confidence_high_phase1_high_phase2_high_reasoning_synthesis_gap_critique_atteint_61_jours_pour_un_cycle_median_de_35_jours_historique_n_1_confirme_la_presence_de_besoins_en_septembre_octobre_la_quantite_est_ultra_stable_a_300u_ce_qui_est_recommande_ici_pour_le_reapprovisionnement_immediat_predictive_next_date_set_to_today_to_trigger_required_replenishment_action_as_stock_exhaustion_is_presumed_imminent_given_sales_velocity_implied_by_consistent_past_ordering_behavior_at_this_node_of_the_supply_chain_baseline_300_recommended_300_json_follows_immediately_no_further_explanation_as_per_instructions_for_minimalist_valid_json_delivery_format_lv105_oct7_analysis_result_json_starts_now_v1_final_check_json_structure_ok_labels_ok_types_as_defined_in_json_schema_v1_0_0_lv105_analysis_metadata_300u_rec_35d_cycle_overdue_by_26_days_since_estimated_sept_11_due_date_ordering_mandatory_now_oct_7th_2025_recommended_quantity_300_baseline_quantity_300.0_confidence_high_confidence_phase1_high_confidence_phase2_high_last_order_2025-08-07_predicted_next_2025-10-07_days_until_next_0_reasoning_the_client_is_significantly_overdue_compared_to_the_35_day_median_cycle_the_quantity_of_300_units_is_extremely_consistent_and_represents_the_base_demand_unit_making_this_the_optimal_order_to_rectify_the_current_61_day_gap_and_stock_risk_end_thought_process_outputting_final_json_string_now_lv105_analysis_response_to_query_2025-10-07_v1_0_json_format_enforced_strictly_following_the_provided_instruction_set_for_expert_supply_chain_analyst_agent_roleplay_scenarios_for_enterprise_planning_and_restocking_lv105_tomato_basil_october_7_2025_replenishment_decision_json_package_ready_for_transmission_to_the_next_layer_of_the_demand_forecasting_pipeline_engine_as_follows_json_package_confirmed_valid_verified_tested_for_schema_compliance_and_data_logical_consistency_across_temporal_and_quantitative_dimensions_of_the_requested_restocking_logic_analysis_for_the_designated_sku_and_date_parameters_given_october_7_is_now_due_to_be_the_order_placement_date_to_minimize_stockout_risk_at_the_destination_lv105_tomate_basil_180g_order_trigger_qty_300u_date_2025-10-07_confidence_high_due_to_long_term_historical_frequency_stability_baseline_300_recommended_300_gap61_median35_overdue26_reordering_mandate_yes_risk_yes_detected_outliers_empty_seasonality_weak_trend_stable_cycle_35_frequency_pattern_stable_300u_standard_lot_every_35d_median_analysis_complete_json_string_generation_triggered_v1_0_0_lv105_json_package_ready_v1_0_0_lv105_analysis_v1_0_0_json_finalized_now_v1_0_0_lv105_json_output_below_v1_0_0_lv105_300u_rec_35d_cycl_v1_0_0_lv105_json_confirmed_v1_0_0_lv105_json_final_v1_0_0_lv105_json_final_delivery_v1_0_0_lv105_json_is_here_v1_0_0_lv105_json_is_confirmed_v1_0_0_lv105_json_is_valid_v1_0_0_lv105_results_300_units_rec_confirm_json_now_at_start_of_block_to_finish_request_v1_0_0_lv105_json_output_starts_now_below_end_of_all_thought_process_pre_production_check_final_v1_0_0_lv105_json_ready_v1_0_0_lv105_json_output_stream_start_v1_0_0_lv105_json_output_stream_begin_v1_0_0_lv105_json_output_start_v1_0_0_lv105_output_triggered_v1_0_0_lv105_output_begin_v1_0_0_lv105_output_start_now_v1_0_0_lv105_output_json_final_v1_0_0_lv105_json_v1_0_0_lv105_json_final_ready_v1_0_0_lv105_json_final_confirmed_v1_0_0_lv105_json_final_output_final_formatted_v1_0_0_lv105_json_final_output_formatted_v1_0_0_lv105_output_json_final_lv105_ tomato_basil_spread_180g_analysis_json_format_ready_for_output_v1_0_0_lv105_json_v1_0_0_lv105_json_v1_0_0_lv105_json_v1_0_0_lv105_json_final_v1_0_0_lv105_json_final_v1_0_0_lv105_json_v1_0_0_output_now_lv105_json_final_output_v1_0_0_lv105_json_v1_0_0_output_now_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output_v1_0_0_lv105_final_output 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement stable de 300 unités par commande. La dernière commande remonte au 2025-08-07, soit il y a 61 jours. Le cycle médian étant de 35 jours, le client est en retard de plus de 3 semaines par rapport à son rythme habituel. Historiquement, un écart maximal de 70 jours a été observé, plaçant la date actuelle (Octobre 7) dans la zone critique de réapprovisionnement immanquable pour éviter une rupture de stock sèche chez le client, surtout en considérant les besoins récurrents identifiés sur la période septembre/octobre en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 899 tokens
- **Output**: 11,884 tokens
- **Total**: 12,783 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Prior Data Points**

I'm focused on the historical sales data for LV105. Currently, I've confirmed a 300 unit sale on August 7th, 2025. Now I'm reviewing the previous year's figures to build a more complete picture of demand. I've noted a consistent pattern of 300 unit sales in 2024, specifically in September, August and May.


**Examining Historical Patterns**

I'm now calculating the intervals between the 300-unit sales for LV105 in 2024. Analyzing the gaps, the median cycle appears to be approximately 35 days. This analysis is crucial for forecasting future sales. The last order was 61 days ago, so I will now assess the risk.


**Evaluating Replenishment Risk**

I've examined the historical patterns and confirmed a 35-42 day order cycle. Given the last order was on August 7th, I anticipated another around mid-September. The current 61-day gap exceeds this, indicating high replenishment risk. I'll recommend placing a 300 unit order immediately.


**Concluding Order Recommendations**

I've now re-examined the history, confirming a clear pattern of 300-unit orders with a 35-42 day cycle. Comparing 2024 to 2025, an order was expected mid-September, but hasn't arrived. Since today is October 7th, and the 61-day interval far exceeds the usual cycle, I recommend placing an immediate order for 300 units.




</details>

</details>


<details>
<summary><strong>2. [LV106] LV Oliven Aufstrich 180g DE</strong> - LLM: 300u vs Médiane: 300u (Réel: 300u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 300u
- 📊 **Baseline calculée**: 300u
- 📊 **Médiane historique**: 300u
- ✅ **Réel commandé**: 300u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 300u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 34 jours, commandes constantes de 300u.
- **Cycle médian (jours)**: 34
- **Dernière commande**: 2025-07-22
- **Prochaine prédite**: 2025-08-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La demande pour ce produit est extrêmement stable avec une quantité fixe de 300 unités par commande. Le cycle médian observé est de 34 jours. La date actuelle (2025-10-07) est éloignée de 77 jours de la dernière commande réalisée le 2025-07-22, ce qui signifie que le client est largement au-delà de son intervalle habituel de réapprovisionnement. Un risque de rupture est donc identifié car une commande est techniquement 'due' depuis fin août.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 900 tokens
- **Output**: 1,727 tokens
- **Total**: 2,627 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product History**

I'm currently looking into the sales history of the LV Oliven Aufstrich. Right now, I'm focusing on the dates and quantities sold, specifically the 30 units from July 22, 2025. I need to understand this single data point in relation to the prior year's sales to get a sense of the trend.


**Predicting Order Imminence**

I've just calculated the median sales cycle, which is about 34 days, and the average cycle, which is about 35.6 days. Since the last order was on July 22nd, I predicted a new order around August 25th. That date has passed. I'm now assessing the risk because the product appears overdue for reordering.


**Evaluating Replenishment Needs**

Focusing now on the product's ordering patterns, I've reviewed the historical data and confirmed my initial assessment. With a median cycle of 34 days, and a significant deviation from that value, I am preparing the order recommendation. I have very high confidence in the quantity of 300 units but somewhat less regarding the timing.


**Calculating Replenishment Details**

Based on the review, I've confirmed an overdue order. The median cycle is 34 days, yet 77 days have passed since the last order. Therefore, the risk is extremely high, and a replenishment is needed. The standard quantity is 300 units; my confidence in this is high, but the timing is only medium-high.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV105] LV Tomate Basil Aufstr 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 07:25:44: 300u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-18 06:25:10: 300u
- 2024-08-07 07:52:32: 300u
- 2024-05-29 09:11:13: 300u
- 2024-05-02 07:55:41: 100u
- 2024-05-02 07:55:41: 200u
- 2024-04-16 12:55:07: 300u
- 2024-03-12 14:23:23: 300u
- 2024-01-31 07:34:41: 300u
- 2024-01-03 14:24:51: 300u
- 2023-11-21 11:58:01: 300u
- 2023-10-17 11:02:52: 300u

**✅ Quantité LLM**: 300u (confidence: high)
**📊 Quantité Réelle**: 300u

</details>


<details>
<summary><strong>2. [LV106] LV Oliven Aufstrich 180g DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-22 12:40:38: 300u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-18 06:25:10: 300u
- 2024-08-07 07:56:23: 300u
- 2024-05-29 09:11:13: 300u
- 2024-05-02 07:55:41: 100u
- 2024-05-02 07:55:41: 200u
- 2024-04-16 12:55:07: 300u
- 2024-03-05 13:51:42: 300u
- 2024-01-31 07:34:41: 300u
- 2024-01-03 14:24:51: 300u
- 2023-11-21 11:58:01: 300u
- 2023-11-02 07:38:47: 300u

**✅ Quantité LLM**: 300u (confidence: high)
**📊 Quantité Réelle**: 300u

</details>




---

## False Positives (5)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 300 | Stock prédit: 132.2u (26j restants) → prédit 300u mais non commandé |
| [LV103] LV Mango Curry Aufstrich 180g | 300 | Stock prédit: -35.6u (-3j restants) → prédit 300u mais non commandé |
| [LV104] LV Paprika Chili Aufstri 180g DE | 300 | Stock prédit: -119.5u (-9j restants) → prédit 300u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 300 | Stock prédit: -212.7u (-19j restants) → prédit 300u mais non commandé |
| [LV341] LV Zwiebel Aufstrich 180g | 300 | Stock prédit: 72.3u (19j restants) → prédit 300u mais non commandé |


---

## False Negatives (1)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [LV102] LV Karot. Ingwer Aufstrich 180g DE | 300 | En rupture (-2j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T11:25:58.039Z*
