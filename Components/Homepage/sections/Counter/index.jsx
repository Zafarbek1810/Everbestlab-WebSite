import { Col, Row } from "antd";
import React from "react";
import Container from "../../../CommonComponents/Container";
import { CounterWrapper } from "./Counter.style";
import { useTranslation } from "react-i18next";
import { useVisibilityHook } from "react-observer-api";
import CountUp from "react-countup";

const counterData = [
  {
    end: 20,
    duration: 3,
    initial: 0,
    suffix: "",
    title: "counter.title1",
  },
  {
    end: 40,
    duration: 3,
    initial: 0,
    suffix: "",
    title: "counter.title2",
  },
  {
    end: 15,
    duration: 3,
    initial: 0,
    suffix: "",
    title: "counter.title3",
  },
  {
    end: 20,
    duration: 3,
    initial: 0,
    suffix: "K",
    title: "counter.title4",
  },
];

const CountAtom = ({ end, duration, suffix, title, initial }) => {
  const { setElement, isVisible } = useVisibilityHook();

  const { t } = useTranslation();

  return (
    <Col md={6} span={24} className="count-col">
      <span className="inCount" ref={setElement}>
        {isVisible ? <CountUp end={end} duration={duration} /> : initial}
        {suffix}
      </span>
      <p className="countTitle">{t(title)}</p>
    </Col>
  );
};

const Counter = () => {
  return (
    <CounterWrapper>
      <Container>
        <div className="countWrapper">
          <Row>
            {counterData.map((item) => (
              <CountAtom key={item.title} {...item} />
            ))}
          </Row>
        </div>
      </Container>  
    </CounterWrapper>
  );
};

export default Counter;
