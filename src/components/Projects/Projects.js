import React, { useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import Slider from "react-slick";

// Import ảnh từ thư mục Assets
import auctionapp1 from "../../Assets/Projects/autionapp1.png";
import auctionapp2 from "../../Assets/Projects/autionapp2.png";
import bestCV1 from "../../Assets/Projects/bestCV1.png";
import bestCV2 from "../../Assets/Projects/bestCV2.png";
import bestCV3 from "../../Assets/Projects/bestCV3.png";
import bestCV4 from "../../Assets/Projects/bestCV4.png";
import bestCV5 from "../../Assets/Projects/bestCV5.png";
import qcs1 from "../../Assets/Projects/qcs1.png";
import qcs2 from "../../Assets/Projects/qcs2.png";
import qcs3 from "../../Assets/Projects/qcs3.png";
import qcs4 from "../../Assets/Projects/qcs4.png";
import qcs5 from "../../Assets/Projects/qcs5.png";
import qcs6 from "../../Assets/Projects/qcs6.png";
import qcs7 from "../../Assets/Projects/qcs7.jpg";
import solar1 from "../../Assets/Projects/solar1.png";
import solar2 from "../../Assets/Projects/solar2.png";
import solar3 from "../../Assets/Projects/solar3.png";
import solar4 from "../../Assets/Projects/solar4.png";
import ford1 from "../../Assets/Projects/ford1.png";

// Dữ liệu giả lập các dự án
const projectData = [
  {
    id: 1,
    title: "Quản lý nhà máy Thông minh",
    description: (
      <>
        <p><strong>Mô tả:</strong> Website chuyên về quản lý nhà máy</p>
        <p><strong>Công nghệ:</strong> NodeJS, ReactJS</p>
        <p><strong>Chi tiết:</strong> Quản lý nhân công, công việc, giám sát thiết bị, trực quan hóa các máy móc trong nhà máy về trạng thái máy trong các khoảng thời gian. Xây dựng các biểu đồ trực quan.</p>
        <p><strong>Team Size:</strong> 2 người</p>
        </>
    ),
    images: [qcs7, qcs1, qcs3, qcs4,qcs5, qcs6,qcs2]
  },
  {
    id: 2,
    title: "Quản lý Năng lượng",
    description: (
      <>
        <p><strong>Mô tả:</strong> Website chuyên về quản lý năng lượng trong nhà máy</p>
        <p><strong>Công nghệ:</strong> Angular, .NET</p>
        <p><strong>Chi tiết:</strong> Theo dõi dữ liệu máy, trực quan hóa bằng các dạng biểu đồ, xây dựng dashboard đa ngôn ngữ, làm các báo cáo thống kê theo từng thiết bị máy.</p>
        <p><strong>Team Size:</strong> 2 người</p>
        <p><a href="https://www.figma.com/design/IuD49LjGnJ0pywfT5GPsh4/BestCv?t=lTeBBCAP0uCHt0PW-0" target="_blank" rel="noreferrer">Xem thiết kế Figma</a></p>
      </>
    ),
    images: [solar1, solar2, solar3, solar4]
  },
  {
    id: 3,
    title: "Auction Apps",
    description: (
      <>
        <p><strong>Mô tả:</strong> Một ứng dụng đấu giá trực tuyến sử dụng Angular, .NET, Ionic , Android , MySQL và các công nghệ như socket, Google Authentication, Facebook Authentication, AppStore Authentication. Ứng dụng đã được phát hành trên AppStore và CH Play.</p>
        <p><strong>Công nghệ:</strong> Angular, .NET, Socket, Google Authentication, Facebook Authentication, AppStore Authentication</p>
        <p><strong>Chi tiết:</strong> Auction Apps cho phép người dùng tham gia đấu giá trực tuyến theo thời gian thực. Bảo mật được đảm bảo thông qua xác thực Google, Facebook và AppStore.</p>
        <p><strong>Team Size:</strong> 1 người</p>
        <p><strong>App Name:</strong> Auction Thành An</p>
        <p><a href="https://www.figma.com/design/2jomGflmI9vGGAcm7OygFb/Auction-Project-Mobile-(Community)?node-id=160-43&node-type=frame&t=Yt3H4tKynAiiCWzk-0" target="_blank" rel="noreferrer">Xem thiết kế Figma</a></p>
      </>
    ),
    images: [auctionapp1]
  },
  {
    id: 4,
    title: "Best CV",
    description: (
      <>
        <p><strong>Mô tả:</strong> Website chuyên đăng tin tuyển dụng và tạo CV, sử dụng NodeJS và ReactJS. Người dùng có thể tạo, chỉnh sửa CV, xuất PDF và trò chuyện với HR.</p>
        <p><strong>Công nghệ:</strong> NodeJS, ReactJS</p>
        <p><strong>Chi tiết:</strong> Tạo và quản lý tin tuyển dụng, phê duyệt CV, xuất PDF và hỗ trợ trò chuyện trực tuyến giữa người tìm việc và HR.</p>
        <p><strong>Team Size:</strong> 2 người</p>
        <p><a href="https://github.com/thaianh26922/WDP.git" target="_blank" rel="noreferrer">Github link</a></p>

        <p><a href="https://www.figma.com/design/IuD49LjGnJ0pywfT5GPsh4/BestCv?t=lTeBBCAP0uCHt0PW-0" target="_blank" rel="noreferrer">Xem thiết kế Figma</a></p>
      </>
    ),
    images: [bestCV3, bestCV4,  bestCV5]
  },
  {
    id: 5,
    title: "Project Đại lý xe Ford Thanh Xuân",
    description: (
      <>
        <p><strong>Mô tả:</strong> Trang web bán xe ô tô Ford, sử dụng HTML, CSS, JS, PHP và WordPress. Với các chức năng cơ bản của một website bán hàng.</p>
        <p><strong>Công nghệ:</strong> HTML, CSS, JS, PHP, WordPress</p>
        <p><strong>Chi tiết:</strong> Website cung cấp thông tin và hỗ trợ khách hàng trong việc mua bán xe Ford.</p>
        <p><strong>Team Size:</strong> 2 người</p>
        <p><a href="https://dailyxeford3s.vn/" target="_blank" rel="noreferrer">Xem Website</a></p>
      </>
    ),
    images: [ford1]
  }
];

// Slider component
const ProjectSlider = () => {
  const [currentProject, setCurrentProject] = useState(0); // Dự án hiện tại
  const [currentSlide, setCurrentSlide] = useState(0); // Slide hiện tại

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Container fluid className="project-section">
      <h1 className="project-heading text-center" style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '30px' }}>
        Các Dự Án Gần Đây
      </h1>
      
      {/* Dropdown chọn dự án */}
      <DropdownButton
        id="project-dropdown"
        title={`Chọn Dự Án: ${projectData[currentProject].title}`}
        variant="primary"
        className="mb-4"
        onSelect={(eventKey) => setCurrentProject(Number(eventKey))}
      >
        {projectData.map((project, index) => (
          <Dropdown.Item eventKey={index} key={index}>
            {project.title}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      <Slider {...settings} style={{position: 'relative'}}>
        {projectData[currentProject].images.map((image, index) => (
          <div key={index}>
            <Row className="d-flex justify-content-center align-items-center">
              {/* Slide đầu tiên sẽ hiển thị thông tin đầy đủ */}
              

              {/* Các slide còn lại chỉ hiển thị ảnh */}
              <Col md={12} className="d-flex justify-content-center">
                <img
                  src={image}
                  alt={`${projectData[currentProject].title} Image ${index + 1}`}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "auto", // Để ảnh giữ nguyên tỷ lệ
                    maxWidth: "1600px",
                    maxHeight: "200vh",
                    borderRadius: '8px'
                  }}
                />
              </Col>
              {index === 0 && (
                <Col md={12}>
                  <div className="project-info" style={{ marginBottom: '30px', fontFamily: 'Arial, sans-serif', color: '#fff', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2em', fontWeight: '600', color: '#6a0dad' }}>{projectData[currentProject].title}</h2>
                    {projectData[currentProject].description}
                  </div>
                </Col>
              )}
            </Row>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ProjectSlider;
