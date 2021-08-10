import { useState } from "react";
import "./ageverification.styles.css";
import { images } from "../assets";
const AgeVerification = ({ setVerified }) => {
  const [ageValues, setAgeValues] = useState({
    day: "",
    year: "",
  });
  const checkAge = (ageValues) => {
    if (ageValues.month && ageValues.day && ageValues.year) {
      let today = new Date(),
        dob = new Date(`${ageValues.month} ${ageValues.day} ${ageValues.year}`),
        diff = today.getTime() - dob.getTime(),
        years = Math.floor(diff / 31556736000);

      console.log(years);
      if (years >= 21) {
        setVerified(true);
      } else {
        setAgeValues({ ...ageValues, error: true });
      }
    } else {
      setAgeValues({ ...ageValues, error: true });
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
            onChange={(e) =>
              setAgeValues({ ...ageValues, month: e.target.value })
            }
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
            onChange={(e) =>
              setAgeValues({ ...ageValues, day: e.target.value })
            }
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
            onChange={(e) =>
              setAgeValues({ ...ageValues, year: e.target.value })
            }
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
      <span className={`error ${ageValues?.error}`}>
        You must be 21 to enter this site
      </span>
    </main>
  );
};

export default AgeVerification;
