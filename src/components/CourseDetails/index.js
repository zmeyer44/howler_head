import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Breadcrumb, Card, Col, Button } from "antd";

import {
  HomeOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const CourseDetails = ({ courses }) => {
  let { slug } = useParams();
  const history = useHistory();

  const [course, setCourse] = useState(null);
  const [tab, setTab] = useState("tab1");

  useEffect(() => {
    let selectedCourse = courses.find((course) => course.slug == slug);
    setCourse(selectedCourse);
  }, [slug]);

  const contentList = {
    tab1: (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2>{course?.title}</h2>
            <p style={{ textIndent: 30 }}>{course?.extDescription}</p>
          </div>
          <div style={{ marginLeft: 20 }}>
            <img
              src={course?.image}
              height={200}
              width={300}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
            paddingTop: 20,
            borderColor: "#f0f0f0",
            borderStyle: "solid",
            borderWidth: 0,
            borderTopWidth: 1,
          }}
        >
          <Link to={`/app/${slug}`}>
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{
                borderColor: "#5cb85c",
                backgroundColor: "#5cb85c",
                shadowColor: "#5cb85c",
                paddingLeft: 60,
                paddingRight: 60,
              }}
            >
              Start
            </Button>
          </Link>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
          >
            Reference Materials
          </Button>
        </div>
      </>
    ),
    tab2: <p>content2</p>,
  };

  return (
    <div
      style={{
        padding: 50,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Breadcrumb>
        <Breadcrumb.Item
          onClick={() => {
            history.push("/");
          }}
        >
          <HomeOutlined />
        </Breadcrumb.Item>

        <Breadcrumb.Item>{course?.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: 700,
            marginTop: 40,
            alignSelf: "center",
          }}
          title="Course Information"
          extra={
            <div>
              <ClockCircleOutlined /> {course?.time} mins
            </div>
          }
          tabList={[
            {
              key: "tab1",
              tab: "Info",
            },
            {
              key: "tab2",
              tab: "Details",
            },
          ]}
          activeTabKey={tab}
          onTabChange={(key) => {
            setTab(key);
          }}
        >
          {contentList[tab]}
        </Card>
      </div>
    </div>
  );
};

export default CourseDetails;
