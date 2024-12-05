import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Giới thiệu <span className="purple"> Bản thân </span>
            </h1>
            <p className="home-about-body">
              Chào bạn! Mình là một <b className="purple">Fullstack Developer</b>Với 1,5 năm kinh nghiệm , đam mê giải quyết vấn đề và xây dựng các ứng dụng web có tác động tích cực. 
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
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TÌM TÔI TRÊN</h1>
            <p>
              Bạn có thể <span className="purple">kết nối </span>với tôi qua các mạng xã hội
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
