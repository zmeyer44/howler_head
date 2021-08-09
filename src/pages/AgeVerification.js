import "./ageverification.styles.css";

const AgeVerification = ({ setVerified }) => {
  return (
    <main>
      <h1>Age Check</h1>
      <h3>Enter your date of birth</h3>
      <div className="button" onClick={() => setVerified(true)}>
        <h1>Enter</h1>
      </div>
    </main>
  );
};

export default AgeVerification;
