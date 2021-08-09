import { SaveFilled, CloseOutlined, CarryOutFilled } from "@ant-design/icons";

const RightActionSection = ({ submit }) => {
  return (
    <div
      style={{
        width: 200,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        padding: "20px  0  0 13px",
        borderLeft: "1px solid rgb(228,228,228)",
        overflowY: "hidden",
      }}
    >
      <div className="right-action-btn">
        <div className="" onClick={submit}>
          <SaveFilled />
        </div>
        <p>Save</p>
      </div>

      <div className="right-action-btn">
        <div className="" onClick={submit}>
          <CarryOutFilled />
        </div>
        <p>Save and go to Active step</p>
      </div>

      <div className="right-action-btn">
        <div className="">
          <CloseOutlined />
        </div>
        <p>Close</p>
      </div>
      <h4 style={{ marginTop: 30 }}>Sections map</h4>
      <ul className="right-action-list">
        <li>Reference</li>
        <li>Application Status</li>
        <li>Regional Information</li>
        <li>Roles and Responsibilities</li>
        <li>Products</li>
        <li>Application Information</li>
        <li>Registered Products</li>
        <li>Marketing Authorisation</li>
        <li>Registered Packaging</li>
        <li>Activities And Communication</li>
        <li>Activity Plans</li>
      </ul>
    </div>
  );
};

export default RightActionSection;
