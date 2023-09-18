import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../../../Components/CommonComponents/Container/index";
import { useVisibilityHook } from "react-observer-api";
import CountUp from "react-countup";
import {Wrapper} from "./AboutFourthSection.style"

const counterData = [
  
  {
    end: 40,
    duration: 3,
    initial: 0,
    suffix: "+",
    title: "counter.title2",
  },
  {
    end: 15,
    duration: 3,
    initial: 0,
    suffix: "+",
    title: "counter.title3",
  },
  {
    title: "counter.title5",
    end: 3,
    duration: 3,
    initial: 0,
    suffix: "+",
  },
];

const CountAtom = ({ end, duration, suffix, title, initial }) => {
  const { setElement, isVisible } = useVisibilityHook();

  const { t } = useTranslation();

  return (
    <Col md={8} span={24} className="count-col">
      <p className="countTitle">{t(title)}</p>
      <span className="inCount" ref={setElement}>
        {isVisible ? <CountUp end={end} duration={duration} /> : initial}
        {suffix}
      </span>
    </Col>
  );
};

const CounterAbout = () => {
  return (
    <Wrapper>

      <Container>
        <div className="countWrapper">
          <Row>
            {counterData.map((item) => (
              <CountAtom key={item.title} {...item} />
            ))}
          </Row>
        </div>
      </Container>
    </Wrapper>

  );
};

export default CounterAbout;
