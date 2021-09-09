import CrossBite from "../assets/quiz_crossbite_180x.png";
import Underbite from "../assets/quiz_underbite_180x.png";
import Overbite from "../assets/quiz_overbite_180x.png";
import CrowdedExtreme from "../assets/quiz_crowded_extreme_180x.png";
import CrowdedMild from "../assets/quiz_crowded_mild_180x.png";
import CrowdedModerate from "../assets/quiz_crowded_moderate_180x.png";
import SpacingExtreme from "../assets/quiz_spacing_extreme_180x.png";
import SpacingMild from "../assets/quiz_spacing_mild_180x.png";
import SpacingModerate from "../assets/quiz_spacing_moderate_180x.png";
export const LevelOptions = [
  { value: "Mild", label: "Mild" },
  { value: "Moderate", label: "Moderate" },
  { value: "Extreme", label: "Extreme" },
  { value: "None", label: "None" },
];

export const CrowdingOptions = [
  { value: "Mild", label: "Mild", img: CrowdedMild },
  { value: "Moderate", label: "Moderate", img: CrowdedModerate },
  { value: "Extreme", label: "Extreme", img: CrowdedExtreme },
  { value: "None", label: "None" },
];

export const SpacingOptions = [
  { value: "Mild", label: "Mild", img: SpacingMild },
  { value: "Moderate", label: "Moderate", img: SpacingModerate },
  { value: "Extreme", label: "Extreme", img: SpacingExtreme },
  { value: "None", label: "None" },
];

export const JudgeOptions = [
  { value: "false", label: "No" },
  { value: "true", label: "Yes" },
];

export const BiteOptions = [
  { value: "CrossBite", label: "CrossBite", img: CrossBite },
  { value: "UnderBite", label: "UnderBite", img: Underbite },
  { value: "OverBite", label: "OverBite", img: Overbite },
  { value: "None", label: "None", img: "" },
];

export const MotivationOptions = [
  { value: "General", label: "General self-improvement" },
  { value: "Career", label: "Excel in my career" },
  { value: "Event", label: "I have an upcoming event" },
  { value: "Others", label: "Others" },
];
export const DentalWorkingOptions = [
  { value: "None", label: "None" },
  { value: "BridgeWork", label: "I Have Some Bridge Work" },
  { value: "MissingTeeth", label: "I Have Some Missing Teeth" },
  { value: "Other", label: "Other" },
];
