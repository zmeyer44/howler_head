import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
const CreateBox = ({ data, nextStep, setStepIndex, stepIndex, pauseRun }) => {
  const [activeTab, setActiveTab] = useState({
    options: [{ name: "Regulatory Documents" }, { name: "RIM" }],
  });

  const handleTabClick = (item) => {
    setActiveTab(item);
    if (stepIndex == 7) {
      setStepIndex(8);
      pauseRun();
    }
  };
  const handleActionClick = () => {
    nextStep();
    if (stepIndex == 8) {
      setStepIndex(9);
      pauseRun();
    }
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 25,
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      {/* Title */}
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
        }}
      >
        <p style={{ fontSize: 20 }}>Create new document</p>
      </div>

      <div
        className="step-7"
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
        }}
      >
        {/* Left Table */}
        <div
          className="step-8"
          style={{
            margin: 0,
            marginRight: 20,
            padding: 0,
            display: "flex",
            flex: 1,
            borderWidth: 1,
            borderColor: "#00000045",
            borderStyle: "solid",
            height: "100%",
            backgroundColor: "#fff",
          }}
        >
          <ul className="items-box-list">
            {data?.map((item, index) => (
              <li
                key={index}
                className={`${item?.name == activeTab?.name && "active"}`}
                onClick={() => handleTabClick(item)}
              >
                {item?.icon}
                <p>{item?.name}</p>
                {item == activeTab && (
                  <div
                    className="arrow-container"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flex: 1,
                    }}
                  >
                    <RightOutlined />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Table */}
        <div
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            flex: 1,
            borderWidth: 1,
            borderColor: "#00000045",
            borderStyle: "solid",
            height: "100%",
            backgroundColor: "#fff",
          }}
        >
          <ul className="items-box-list">
            {activeTab?.options?.map((option, index) => (
              <li
                key={index}
                className="step-9"
                onClick={() => handleActionClick()}
              >
                <p>{option?.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateBox;
