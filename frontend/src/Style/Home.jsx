import React from 'react';
import '../Style/home.css'
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroViedo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import  Subtitle  from './../shared/Subtitle';
export const Home = () => {
  return (
    <>
{/*=======hero Section start =========*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>

          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle Subtitle={'know Before You Go'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the door to creating <span className="highlights">memories</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo ea inventore soluta eaque qui quasi ipsam exercitationem optio placeat error cumque illum veniam, consectetur nulla accusantium minima porro impedit</p>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*=========hero section start ========*/}
    </>
  )
};
