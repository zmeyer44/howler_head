import { GiHamburgerMenu } from "react-icons/gi";

const SideTab = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 40,
        height: "100vh",
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderWidth: 1,
        borderTopWidth: 4,
        borderLeftWidth: 0,
        borderColor: "#00000045",
        borderTopColor: "#006594",
        alignItems: "center",
      }}
    >
      <GiHamburgerMenu
        style={{
          marginTop: 10,
          marginBottom: 15,
          color: "#006594",
          fontSize: 20,
        }}
      />
      <p className="rotated-tab-title" style={{}}>
        {title}
      </p>
    </div>
  );
};

export default SideTab;
