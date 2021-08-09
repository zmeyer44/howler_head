import { Layout, Table, Input, Row, Col, Divider, Checkbox } from "antd";
import {
  ColumnHeightOutlined,
  VerticalAlignMiddleOutlined,
  ReloadOutlined,
  InfoCircleOutlined,
  PrinterFilled,
  ShareAltOutlined,
  ToolOutlined,
  StarFilled,
  FolderOpenOutlined,
} from "@ant-design/icons";
const { Search } = Input;
const columns = [
  {
    title: "Reference",
    dataIndex: "ref",
    fixed: "left",
    width: 200,
    render: (text) => {
      return (
        <div>
          <Checkbox
            style={{ marginRight: 15 }}
            checked={false}
            onChange={() => {}}
          />
          <StarFilled
            className="table-star"
            style={{
              marginLeft: 45,
              marginRight: 45,
              opacity: 0.5,
              fontSize: 16,
            }}
          />
          <FolderOpenOutlined
            style={{
              marginLeft: 15,
              marginRight: 25,
              opacity: 0.7,
              fontSize: 16,
            }}
          />
          <a style={{ marginRight: 15, color: "#000", opacity: 0.8 }}>{text}</a>
        </div>
      );
    },
  },
  {
    title: "Product Group",
    dataIndex: "product_group",
    width: 150,
  },
  {
    title: "Application Name",
    dataIndex: "application_name",
    width: 150,
  },
  {
    title: "Application Number",
    dataIndex: "application_number",
    width: 150,
  },
  {
    title: "Procedure Code",
    dataIndex: "procedure_code",
    width: 150,
  },
];

const data = [];
for (let i = 1; i < 500; i++) {
  data.push({
    key: i,
    ref: `APP-00${i}`,
    product_group: "Alprazolam",
    application_name: `Alprazolam no. ${i}`,
    application_number: `DE/${i}-002516`,
    procedure_code: `H/CE${i}/${i + 83}-CRT`,
  });
}

const MainTable = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        padding: 20,
        backgroundColor: "#fff",
        color: "#00649E",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            marginLeft: 10,
            padding: 0,
            marginBottom: 0,
            marginTop: 0,
            fontSize: 20,
          }}
        >
          Applications
        </p>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
            alignItems: "center",
            width: 500,
          }}
        >
          <Search
            style={{
              width: 250,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#00649E45",
              borderRadius: 2,
            }}
            onSearch={() => {}}
          />
          <ColumnHeightOutlined />
          <VerticalAlignMiddleOutlined />
          <InfoCircleOutlined />
          <ReloadOutlined />
          <PrinterFilled />
          <ShareAltOutlined />
          <ToolOutlined />
        </div>
      </div>
      <div className="main-table-lg-btns">
        <div
          style={{
            marginRight: 15,
          }}
        >
          <p>Regulatory Region</p>
        </div>
        <div>
          <p>Country/Countries</p>
        </div>
      </div>
      <Table
        className="step-4"
        id="main-table"
        style={{ marginTop: 30, height: "50vh" }}
        columns={columns}
        dataSource={data}
        pagination={{ position: ["topRight"] }}
        scroll={{ y: 600, x: 1300 }}
        size="small"
      />
    </div>
  );
};

export default MainTable;
