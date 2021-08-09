import "./ageverification.styles.css";
import { images } from "../assets";
const AgeVerification = ({ setVerified }) => {
  return (
    <main>
      <img src={images.logo} />
      <h1>Age Check</h1>
      <h3>Enter your date of birth</h3>
      <div className="button" onClick={() => setVerified(true)}>
        <div className="input month">
          <select name="month" id="age_month" required>
            <option value="0">January</option>
            <option value="1">Febuary</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
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
            required
          />
        </div>
        <div className="input year">
          <input
            type="text"
            maxLength="2"
            placeholder="Year"
            inputMode="numeric"
            name="year"
            id="age_year"
            required
          />
        </div>
        <div className="input submit">
          <input type="submit" value="Enter" id="age_enter" />
        </div>
      </div>
    </main>
  );
};

export default AgeVerification;
