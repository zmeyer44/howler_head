import { Link } from "react-router-dom";
import { Card, Avatar } from "antd";

// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
//   PlayCircleTwoTone,
//   InfoCircleOutlined,
// } from "@ant-design/icons";

const { Meta } = Card;

const CourseCard = ({ title, slug, description, image }) => {
  return (
    <Card
      hoverable={true}
      style={{ width: "100%", marginTop: 20, marginBottom: 10 }}
      cover={
        <img
          alt="example"
          src={image}
          height={200}
          style={{ objectFit: "cover" }}
        />
      }
      actions={[
        <Link to={`course/${slug}`}>
          <div>Start</div>
        </Link>,
      ]}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default CourseCard;
