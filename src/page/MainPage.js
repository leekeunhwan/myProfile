import React, { Component } from "react";

// nodejs library that concatenates classes

import classNames from "classnames";

// ui kit template

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

// @material-ui/core components

import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";

// @material-ui/icons

import Toys from "@material-ui/icons/Toys";
import Palette from "@material-ui/icons/Palette";

// core components

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import NavPills from "../components/NavPills/NavPills.jsx";
import Parallax from "../components/Parallax/Parallax.jsx";

// image

import profile from "../img/myFace.jpeg";
import toy1 from "../img/weather.png";
import toy2 from "../img/rgb.png";
import toy3 from "../img/omok.png";
import toy4 from "../img/todo.png";
import project1 from "../img/spaShopping.png";
import project2 from "../img/project++.png";
import { card } from "../assets/jss/material-kit-react";

Header.defaultProps = {
  color: "transparent"
};

class MainPage extends Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <React.Fragment>
        <Header
          color="transparent"
          brand="Moong2's Profile"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{ height: 200, color: "white" }}
          {...rest}
        />
        <Parallax small filter image={require("img/star1.jpeg")} />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={profile}
                        alt="leekeunhwan's face"
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>이근환</h3>
                      <h6>Front-End Developer</h6>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href="https://github.com/leekeunhwan"
                      >
                        <i className={"fab fa-github"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href="https://www.facebook.com/profile.php?id=100002528956445"
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href="https://www.instagram.com/hwannni0611/"
                      >
                        <i className={"fab fa-instagram"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <h5 className="introduce">
                  내일은 오늘보다 더 좋은 모습의 프론트엔드 개발자가<br />
                  되기위해 끊임없이 노력하는 개발자 이근환입니다.<br />
                  <br />
                  #커피를좋아합니다 #음대출신개발자<br />
                  #개발은뿌듯하다 #성장이고픈개발자<br />
                  #365일 #멈추지않는TIL<br />
                  #노력과실력을겸비하자 #일잘하는개발자되기<br />
                </h5>
              </div>
              <GridContainer justify="center" className="resume__container">
                <GridItem xs={3} />
                <GridItem xs={6}>
                  <h6 className="resume">
                    <i className="fas fa-briefcase" /> 보유 스킬
                  </h6>
                </GridItem>
                <GridItem xs={3} />
                <GridItem xs={3} />
                <GridItem xs={2}>
                  <p className="skill">
                    <i className="fab fa-html5" /> HTML
                  </p>
                </GridItem>
                <GridItem xs={4}>
                  <LinearProgress
                    className="bar"
                    color="primary"
                    variant="determinate"
                    value={75}
                  />
                </GridItem>
                <GridItem xs={3} />
                <GridItem xs={3} />
                <GridItem xs={2}>
                  <p className="skill">
                    <i className="fab fa-css3-alt" /> CSS3
                  </p>
                </GridItem>
                <GridItem xs={4}>
                  <LinearProgress
                    className="bar"
                    color="primary"
                    variant="determinate"
                    value={60}
                  />
                </GridItem>
                <GridItem xs={3} />
                <GridItem xs={3} />
                <GridItem xs={2}>
                  <p className="skill">
                    <i className="fab fa-js" /> JavaScript
                  </p>
                </GridItem>
                <GridItem xs={4}>
                  <LinearProgress
                    className="bar"
                    color="primary"
                    variant="determinate"
                    value={85}
                  />
                </GridItem>
                <GridItem xs={3} />
                <GridItem xs={3} />
                <GridItem xs={2}>
                  <p className="skill">
                    <i className="fab fa-node" /> Node.js
                  </p>
                </GridItem>
                <GridItem xs={4}>
                  <LinearProgress
                    className="bar"
                    color="primary"
                    variant="determinate"
                    value={70}
                  />
                </GridItem>
                <GridItem xs={3} />
                <GridItem xs={3} />
                <GridItem xs={2}>
                  <p className="skill">
                    <i className="fab fa-react" /> React.js
                  </p>
                </GridItem>
                <GridItem xs={4}>
                  <LinearProgress
                    className="bar"
                    color="primary"
                    variant="determinate"
                    value={85}
                  />
                </GridItem>
                <GridItem xs={3} />
                <GridItem xs={3} />
                <GridItem xs={2}>
                  <p className="skill">
                    <i className="fas fa-star" /> Meteor.js
                  </p>
                </GridItem>
                <GridItem xs={4}>
                  <LinearProgress
                    className="bar"
                    color="primary"
                    variant="determinate"
                    value={75}
                  />
                </GridItem>
                <GridItem xs={3} />
              </GridContainer>
              <div id="portfolio">
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={11}
                    className={classes.navWrapper}
                  >
                    <h6 className="portfolio">
                      <i className="far fa-file-alt" /> 포트폴리오
                    </h6>
                    <NavPills
                      alignCenter
                      fullWidth
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Toy Project",
                          tabIcon: Toys,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <h5 className="toy__title">
                                  날씨 어플리케이션
                                </h5>
                                <Divider />
                                <h6>사용 기술 : React, REST API</h6>
                                <h6>
                                  국가와 국가에 해당하는 도시를 선택하면<br />
                                  날씨를 알려줍니다.
                                </h6>
                                <a href="https://weather-appbyreactjs.netlify.com/">
                                  <img
                                    alt="날씨 어플리케이션"
                                    src={toy1}
                                    className={navImageClasses}
                                  />
                                </a>
                                <h5 className="toy__title">RGB Challenge</h5>
                                <Divider />
                                <h6>사용 기술 : React, CSS3</h6>
                                <h6>
                                  랜덤으로 생성되는 3가지 색상중<br />
                                  RGB 코드와 일치하는 색을 골라<br />
                                  정답을 맞추는 퀴즈입니다.
                                </h6>
                                <a href="https://moong2-react-rgb-challenge.netlify.com/">
                                  <img
                                    alt="RGB 첼렌지"
                                    src={toy2}
                                    className={navImageClasses}
                                  />
                                </a>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <h5 className="toy__title">오목 게임</h5>
                                <Divider />
                                <h6>사용 기술 : HTML5, CSS3, JavaScript</h6>
                                <h6>
                                  우리가 즐겨하는 오목게임을<br />
                                  만들어보았습니다.<br />
                                </h6>
                                <a href="https://omok-wait-a-minute.netlify.com/">
                                  <img
                                    alt="오목"
                                    src={toy3}
                                    className={navImageClasses}
                                  />
                                </a>
                                <h5 className="toy__title">
                                  할일 관리 어플리케이션
                                </h5>
                                <Divider />
                                <h6>
                                  사용 기술 : HTML5, CSS3, JavaScript, Axios
                                </h6>
                                <h6>
                                  To-Do List를<br />
                                  Json-server와 연동하여<br />
                                  만들어보았습니다.
                                </h6>
                                <a href="https://moong2-todo.netlify.com/">
                                  <img
                                    alt="할일 관리"
                                    src={toy4}
                                    className={navImageClasses}
                                  />
                                </a>
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Project",
                          tabIcon: Palette,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <div className="portfolio__project">
                                  <h5 className="project__title">
                                    SPA 형식의 쇼핑몰
                                  </h5>
                                  <Divider />
                                  <h6>
                                    사용 기술 : HTML5, CSS3, JavaScript,<br />
                                    Axios, Material CSS
                                  </h6>
                                  <Divider />
                                  <h6>
                                    SPA 형식의 애플 제품을 판매하는<br />
                                    쇼핑몰을 만들어보았습니다.<br />
                                    관리자 계정만 상품 등록/수정/삭제가
                                    가능하며,<br />
                                    일반 계정은 물품을 구입할 수 있게
                                    하였습니다.
                                  </h6>
                                  <a href="https://moong2-spa-shopping-mall.netlify.com/">
                                    <img
                                      alt="SPA 형식의 쇼핑몰"
                                      src={project1}
                                      className={navImageClasses}
                                    />
                                  </a>
                                </div>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <div className="portfolio__project">
                                  <h5 className="project__title">
                                    협업 관리 웹 어플리케이션
                                  </h5>
                                  <Divider />
                                  <h6>
                                    사용 기술 : React, React Router, CSS3,<br />
                                    Axios, Semantic-ui-react<br />
                                  </h6>
                                  <Divider />
                                  <h6>
                                    프로젝트 관리 웹 어플리케이션으로<br />
                                    프로젝트를 등록하고, 프로젝트를 진행하면서<br />
                                    발생하는 이슈를 적고 해결하며<br />
                                    협업을 할 수 있습니다.
                                  </h6>
                                  <a href="https://moong2-project-manager.netlify.com/">
                                    <img
                                      alt="협업 관리 웹 어플리케이션"
                                      src={project2}
                                      className={navImageClasses}
                                    />
                                  </a>
                                </div>
                              </GridItem>
                            </GridContainer>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(profilePageStyle)(MainPage);
