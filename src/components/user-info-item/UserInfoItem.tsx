import { useState } from "react";
import "./index.css";
import submitQuiz from "../../api/submitQuiz";
interface UserInfoItemProps {
  quizResult: {
    motivation: string;
    prevBraces: string;
    crowding: string;
    spacing: string;
    bite: string;
    babyTeeth: string;
    dentalWork: string;
  };
  isQuizComplete: boolean;
  id: string;
}

const UserInfoItem: React.FC<UserInfoItemProps> = ({ id, quizResult }) => {
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const submit = () => {
    const params = {
      postal_code: zipCode,
      email: email,
      phone_number: phoneNumber,
      user_motivation: quizResult.motivation,
      user_prev_braces: quizResult.prevBraces,
      user_crowding: quizResult.crowding,
      user_spacing: quizResult.spacing,
      user_bite: quizResult.bite,
      user_baby_teeth: quizResult.babyTeeth,
      user_dental_work: quizResult.dentalWork,
      user_aligner_plan: "",
      user_additional_plan: "",
      user_insurance_type: ""
    };
    console.log(params);
    submitQuiz(params)
      .then(() => {
        console.log("succeess");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="user-info-section" id={id}>
      <div className=" input-field">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className=" input-field">
        <label htmlFor="zipCode">zip code</label>
        <input
          name="zipCode"
          type="zipCode"
          value={zipCode}
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
        />
      </div>
      <div className=" input-field">
        <label htmlFor="phoneNumber">phone(optional)</label>
        <input
          placeholder="(###)-###-####"
          name="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </div>
      <button className="quiz-submit" onClick={submit}>
        GET YOUR RESULT
      </button>
    </section>
  );
};

export default UserInfoItem;
