import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import submitQuiz from "../../api/submitQuiz";
import Loading from "../loading/loading";
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

const PhoneFormat = "(###)-###-####";
function isNumeric(val: string) {
  return /^-?\d+$/.test(val);
}
function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validateZipCode(zipCode: string) {
  return zipCode.length === 5;
}
function validatePhoneNumber(phoneNumber: string) {
  return phoneNumber.indexOf("#") === -1;
}
const UserInfoItem: React.FC<UserInfoItemProps> = ({
  id,
  quizResult,
  isQuizComplete,
}) => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [zipCodeErr, setZipCodeErr] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberErr, setPhoneNumberErr] = useState("");
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
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
      user_insurance_type: "",
    };
    console.log(params);
    setIsLoading(true);
    submitQuiz(params)
      .then(() => {
        setIsLoading(false);
        console.log("succeess");
        window.location.href = "https://aismile.sg/";
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };
  useEffect(() => {
    const phoneNumberArr = [...phoneNumber].reverse();
    const index = phoneNumberArr.findIndex((num) => isNumeric(num));
    if (index !== -1) {
      const pos = phoneNumberArr.length - index;
      phoneNumberRef.current?.setSelectionRange(pos, pos);
    } else {
      phoneNumberRef.current?.setSelectionRange(1, 1);
    }
  }, [phoneNumber]);
  const canSubmit = () => {
    return (
      isQuizComplete &&
      validateEmail(email) &&
      validateZipCode(zipCode) &&
      validatePhoneNumber(phoneNumber)
    );
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
          onBlur={() => {
            if (validateEmail(email)) {
              setEmailErr("");
            } else {
              setEmailErr("Please enter a valid email");
            }
          }}
        />
        <div className="err-msg">{emailErr}</div>
      </div>
      <div className=" input-field">
        <label htmlFor="zipCode">zip code</label>
        <input
          name="zipCode"
          type="zipCode"
          value={zipCode}
          maxLength={5}
          onChange={(e) => {
            const value = e.target.value;
            let num = value.replace(/[^0-9]/g, "");
            setZipCode(num);
          }}
          onBlur={() => {
            if (validateZipCode(zipCode)) {
              setZipCodeErr("");
            } else {
              setZipCodeErr("Please enter a zip code");
            }
          }}
        />
        <div className="err-msg">{zipCodeErr}</div>
      </div>
      <div className=" input-field">
        <label htmlFor="phoneNumber">phone(optional)</label>
        <input
          ref={phoneNumberRef}
          placeholder="(###)-###-####"
          name="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => {
            const value = e.target.value;
            let num = value.replace(/[^0-9]/g, "");
            let numArr = [...num];
            let phoneNumArr = [...PhoneFormat];
            for (let i = 0; i < phoneNumArr.length; i++) {
              if (phoneNumArr[i] === "#") {
                if (numArr.length > 0) {
                  phoneNumArr[i] = numArr[0];
                  numArr.shift();
                  if (numArr.length === 0) break;
                }
              }
            }

            setPhoneNumber(phoneNumArr.join(""));
          }}
          onBlur={() => {
            if (validatePhoneNumber(phoneNumber)) {
              setPhoneNumberErr("");
            } else {
              setPhoneNumberErr("Please enter a valid phone number");
            }
          }}
        />
        <div className="err-msg">{phoneNumberErr}</div>
      </div>
      <button className="quiz-submit" disabled={!canSubmit()} onClick={submit}>
        GET YOUR RESULT
        {isLoading && (
          <div className="btn-loading">
            <Loading />
          </div>
        )}
      </button>
    </section>
  );
};

export default UserInfoItem;
