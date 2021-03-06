import { useState } from "react";
import "./ageverification.styles.css";
import { images } from "../assets";
const AgeVerification = ({ setVerified }) => {
  const [ageValues, setAgeValues] = useState({
    day: "",
    year: "",
  });
  const [error, setError] = useState("");

  const checkAge = (ageValues) => {
    if (!ageValues.month || !ageValues.day || !ageValues.year) {
      return setError(true);
    }

    let today = new Date(),
      dob = new Date(`${ageValues.month} ${ageValues.day} ${ageValues.year}`),
      diff = today.getTime() - dob.getTime(),
      years = Math.floor(diff / 31556736000);

    if (years >= 21) {
      return setVerified(true);
    } else {
      console.log("not old enough");
      return setError(true);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "month") {
      setAgeValues({ ...ageValues, month: value });
      document.getElementById("age_day").focus();
    } else if (name === "day") {
      if (value !== "0" && value <= 31) {
        setAgeValues({ ...ageValues, day: value });
        if (value.length === 2 || value >= 4) {
          document.getElementById("age_year").focus();
        }
      }
    } else {
      if (value.length === 4) {
        setAgeValues({ ...ageValues, year: value });
        checkAge({ ...ageValues, year: value });
      }
      setAgeValues({ ...ageValues, year: value });
    }
  };

  return (
    <main>
      <img src={images.logo} alt="logo" />
      <h1>Time to check id</h1>
      <h3>Enter your date of birth</h3>
      <div className="form">
        <div className="input month">
          <select
            name="month"
            id="age_month"
            required
            value={ageValues?.month}
            onChange={(e) => handleChange(e)}
          >
            <option value selected disabled>
              Month
            </option>
            <option value="Jan">January</option>
            <option value="Feb">Febuary</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>
        </div>
        <div className="input day">
          <input
            type="text"
            maxLength="2"
            placeholder="Day"
            inputMode="numeric"
            name="day"
            id="age_day"
            value={ageValues?.day}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="input year">
          <input
            type="text"
            maxLength="4"
            placeholder="Year"
            inputMode="numeric"
            name="year"
            id="age_year"
            value={ageValues?.year}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="input submit">
          <input
            type="submit"
            value="Enter"
            id="age_enter"
            onClick={() => checkAge(ageValues)}
          />
        </div>
      </div>
      <span className={`error ${error}`}>
        You must be 21 to enter this site
      </span>
    </main>
  );
};

export default AgeVerification;
