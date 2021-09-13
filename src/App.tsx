import "./styles.css";
import RadioItem from "./components/radio-item/RadioItem";
import UserInfoItem from "./components/user-info-item/UserInfoItem";
import { useEffect, useState } from "react";
import useIndiator from "./hooks/useIndicator";
import { elementScrollIntoView } from "seamless-scroll-polyfill";

import {
  LevelOptions,
  JudgeOptions,
  MotivationOptions,
  DentalWorkingOptions,
  BiteOptions,
  CrowdingOptions,
  SpacingOptions,
} from "./constants/options";

const defaultOrders = [
  { label: "motivation", complete: false },
  { label: "prevBraces", complete: false },
  { label: "crowding", complete: false },
  { label: "spacing", complete: false },
  { label: "bite", complete: false },
  { label: "babyTeeth", complete: false },
  { label: "dentalWork", complete: false },
];
export default function App() {
  const [motivation, setMotivation] = useState<string>("");
  const [prevBraces, setPrevBraces] = useState<string>("");
  const [crowding, setCrowding] = useState<string>("");
  const [spacing, setSpacing] = useState<string>("");
  const [bite, setBite] = useState<string>("");
  const [babyTeeth, setBabyTeeth] = useState<string>("");
  const [dentalWork, setDentalWork] = useState<string>("");

  const [index, mark, complete] = useIndiator({
    defaultOrders,
  });
  useEffect(() => {
    if (index >= 0) {
      const ele = document.getElementById(defaultOrders[index].label);
      //   ele?.scrollIntoView({ behavior: "smooth" });
      ele && elementScrollIntoView(ele, { behavior: "smooth" });
    }
  }, [index]);
  useEffect(() => {
    if (complete) {
      const ele = document.getElementById("userInfo");
      //   ele?.scrollIntoView({ behavior: "smooth" });
      ele && elementScrollIntoView(ele, { behavior: "smooth" });
    }
  }, [complete]);
  return (
    <div className="App">
      <div className="quiz-form">
        <RadioItem
          id="motivation"
          title="What is your main motivation to improve your smile?"
          value={motivation}
          onChange={(value) => {
            setMotivation(value);
            mark("motivation");
          }}
          options={MotivationOptions}
        />
        <RadioItem
          id="prevBraces"
          title="Have you previously worn braces or invisible aligners?"
          value={prevBraces}
          onChange={(value) => {
            setPrevBraces(value);
            mark("prevBraces");
          }}
          options={JudgeOptions}
        />
        <RadioItem
          id="crowding"
          title="How's your teeth crowding?"
          value={crowding}
          type="image"
          onChange={(value) => {
            setCrowding(value);
            mark("crowding");
          }}
          options={CrowdingOptions}
        />
        <RadioItem
          id="spacing"
          title="How's your teeth spacing?"
          value={spacing}
          type="image"
          onChange={(value) => {
            setSpacing(value);
            mark("spacing");
          }}
          options={SpacingOptions}
        />
        <RadioItem
          id="bite"
          title="How's your bite?"
          value={bite}
          type="image"
          onChange={(value) => {
            setBite(value);
            mark("bite");
          }}
          options={BiteOptions}
        />
        <RadioItem
          id="babyTeeth"
          title="Have you lost all your baby teeth?"
          value={babyTeeth}
          onChange={(value) => {
            setBabyTeeth(value);
            mark("babyTeeth");
          }}
          options={JudgeOptions}
        />
        <RadioItem
          id="dentalWork"
          title="Do you have any existing dental work?"
          value={dentalWork}
          onChange={(value) => {
            setDentalWork(value);
            mark("dentalWork");
          }}
          options={DentalWorkingOptions}
        />
        <UserInfoItem
          isQuizComplete={complete}
          quizResult={{
            motivation,
            prevBraces,
            crowding,
            spacing,
            bite,
            babyTeeth,
            dentalWork,
          }}
          id="userInfo"
        />
      </div>
    </div>
  );
}
