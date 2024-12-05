import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Chào ANh/Chị!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Tôi là 
                <strong className="main-name"> PHẠM THÁI ANH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Giới thiệu <span className="purple"> Bản thân </span>
            </h1>
            <p className="home-about-body">
              Chào bạn! Mình là một <b className="purple">Fullstack Developer</b> đam mê giải quyết vấn đề và xây dựng các ứng dụng web có tác động tích cực. 
              Chặng đường lập trình của mình đã giúp mình chuyên sâu vào nhiều công nghệ khác nhau, và mình luôn sẵn sàng học hỏi và xây dựng các sản phẩm sáng tạo. 🌟
              <br />
              <br />
              Mình thành thạo các ngôn ngữ lập trình và framework như
              <i>
                <b className="purple"> C#, .Net, Angular, ReactJs, NodeJS </b>
              </i>
              <br />
              <br />
              Mình có kinh nghiệm làm việc với các cơ sở dữ liệu như
              <i>
                <b className="purple"> SQL, MySQL, MongoDB</b>
              </i>
              <br />
              <br />
              Chuyên môn của mình cũng bao gồm việc triển khai và quản lý các container với
              <i>
                <b className="purple"> Docker </b>
              </i>
              và mình rất thích phát triển các ứng dụng web hiện đại với công nghệ như
              <i>
                <b className="purple"> HTML, CSS, JavaScript, NextJS</b>
              </i>
              <br />
              <br />
              Mình đam mê xây dựng các ứng dụng có thể mở rộng và dễ sử dụng, dù là cho frontend hay backend. 
              <i>
                <b className="purple"> Hãy kết nối và cùng nhau tạo ra những điều tuyệt vời! 🚀</b>
              </i>
              <br />
              <br />
              <b className="purple">Kinh nghiệm về phần mềm quản lý:</b>
              <br />
              Mình có kinh nghiệm giải quyết các bài toán về <b className="purple">phần mềm quản lý</b>, đặc biệt là trong việc trực quan hóa dữ liệu và tối ưu hóa các hệ thống. 
              Trước đây, mình đã làm việc trong một môi trường chuyên về phát triển phần mềm quản lý, nơi mà việc tối ưu hóa và quản lý dữ liệu là vô cùng quan trọng.
              <br />
              <br />
              Mình hiểu rõ những thách thức trong việc xử lý dữ liệu khối lượng lớn, đặc biệt là khi cần phải hiển thị trực quan và cung cấp các phân tích cho người dùng cuối. 
              Công việc của mình bao gồm việc xây dựng các giải pháp để trực quan hóa dữ liệu một cách hiệu quả, đồng thời tối ưu hóa hiệu suất của các hệ thống phần mềm quản lý, giúp cải thiện trải nghiệm người dùng và nâng cao hiệu quả công việc.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
