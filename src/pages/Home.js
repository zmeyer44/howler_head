import { Switch, Route, Link } from "react-router-dom";
import { Layout, Row, Col, Divider } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseGrid from "../components/CourseGrid";
import CourseDetails from "../components/CourseDetails";

import "./home.styles.css";
import { images } from "../assets";

const { Header, Footer, Sider, Content } = Layout;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 540 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1,
  },
};
// const Home = () => {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       <Layout style={{ flex: 1 }}>
//         <Header
//           style={{
//             backgroundColor: "#fff",
//             display: "flex",
//             justifyContent: "flex-start",
//             alignItems: "center",
//           }}
//         >
//           <Link to="/">
//             <div
//               className="logo"
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Logo
//                 style={{
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               />
//             </div>
//           </Link>
//         </Header>
//         <Content>
//           <Switch>
//             <Route
//               exact
//               path="/"
//               render={() => <CourseGrid courses={courses} />}
//             />
//             <Route
//               path="/course/:slug"
//               render={() => <CourseDetails courses={courses} />}
//             />
//           </Switch>
//         </Content>

//         <Footer
//           style={{
//             borderWidth: 0,
//             borderTopWidth: 1,
//             borderStyle: "solid",
//             borderColor: "#0000002b",
//           }}
//         >
//           Copyright &copy; {new Date().getFullYear()} Viatris Inc. All Rights
//           Reserved.
//         </Footer>
//       </Layout>
//     </div>
//   );
// };

function hero() {
  return (
    <div className="hero_wrapper">
      <div className="hero_section">
        <div className="text_section">
          <span>Presenting</span>
          <h1>The Monkey Spirit</h1>
          <h3>Kentucky straight burbon whiskey with natural banana flavor</h3>
          <div className="action_section">
            <img src={images.ufc} />
            <div className="btn_container">
              <Link>Explore Now</Link>
            </div>
          </div>
        </div>
        {/* <div className="image_section">
          <img src={images.hero_dark} />
        </div> */}
      </div>
    </div>
  );
}
function merch() {
  return (
    <div className="merch_wrapper">
      <div className="merch_section">
        <h1>Our Merch</h1>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="merch_item"
        >
          <div className="merch_card">
            <img src={images.business_monkey_shirt} />
            <div className="bottom">Business Monkey</div>
          </div>
          <div className="merch_card">
            <img src={images.cool_monkey_shirt} />
            <div className="bottom">Cool Monkey</div>
          </div>
          <div className="merch_card">
            <img src={images.party_monkey_shirt} />
            <div className="bottom">Party Monkey</div>
          </div>
          <div className="merch_card">
            <img src={images.glasses} />
            <div className="bottom">Shot Glasses</div>
          </div>
          <div className="merch_card">
            <img src={images.coasters} />
            <div className="bottom">Coasters</div>
          </div>
          <div className="merch_card">
            <img src={images.umbrella} />
            <div className="bottom">Mini Umbrellas</div>
          </div>
        </Carousel>
        <div className="cta">
          <div className="button">
            <h1>View More</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
function recipes() {
  return (
    <div className="recipe_wrapper">
      <div className="recipe_section">
        <h1>Recipies</h1>
        <div className="recipe_content">
          <div className="recipe_card">
            <img src={images.recipe_1} />
            <div className="bottom">
              <span>Featured Recipe</span>
              <h1>Monkey Martini</h1>
            </div>
          </div>
          <div className="recipe_card">
            <img src={images.recipe_2} />
            <div className="bottom">
              <span>Featured Recipe</span>
              <h1>Yellow Submarine</h1>
            </div>
          </div>
          <div className="recipe_card">
            <img src={images.recipe_3} />
            <div className="bottom">
              <span>Featured Recipe</span>
              <h1>Dirty Banana</h1>
            </div>
          </div>
        </div>
        <div className="submit_section">
          <h1>Have a recipe idea?</h1>
          <div className="button">
            <h1>Submit Yours</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "60px" }}
    >
      {hero()}
      {merch()}
      {recipes()}
    </div>
  );
};

export default Home;
