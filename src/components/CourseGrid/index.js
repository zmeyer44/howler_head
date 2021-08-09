import { Row, Col, Divider } from "antd";
import CourseCard from "../CourseCard";

const CourseGrid = ({ courses }) => {
  return (
    <div
      style={{
        padding: 50,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Divider
        orientation="left"
        style={{
          fontSize: 20,
        }}
      >
        Tutorials
      </Divider>
      <Row
        style={{
          width: "100%",
          marginRight: 0,
          marginLeft: 0,
          padding: 10,
        }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        {courses?.map((course) => {
          return (
            <Col
              key={course.title}
              xxl={6}
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 10, offset: 2 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 18, offset: 3 }}
            >
              <CourseCard {...course} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CourseGrid;
