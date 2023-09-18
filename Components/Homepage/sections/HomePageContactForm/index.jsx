import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HomePageFormWrapper } from "./HomePageForm.style";
import Container from "../../../CommonComponents/Container";
import {Form, Input, Button, Row, Col, message} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";
import TextArea from "antd/lib/input/TextArea";

const HomePageForm = () => {
  const [captcha, setCaptcha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  
  const onSubmit = (values) => {
    
    
    console.log(values);
    if (values.email !== undefined && values.yourName !== undefined) {
      const text = values.text || "";
      const email = values.email;
      const yourName = values.yourName;
      
      const body = JSON.stringify({yourName, email, text})
      console.log(body);
      setIsLoading(true);
      fetch("https://everbestlab.com/api/send", {
        method: "POST",
        headers: {
          ["Content-Type"]: "application/json"
        },
        body
      }).then(res => {
        form.resetFields();
        message.success("Success!");
      }).catch((err) => {
        console.log(err);
        message.error("Failed while sending email :(");
      }).finally(() => {
        setIsLoading(false);
      })
    } else {
      message.error("Please fill all fields!")
    }
  }
  
  const { t } = useTranslation();

  return (
    <HomePageFormWrapper>
      <div className="anchorLink" id="contacts"></div>
      <div className="formWrapper"></div>
      <Container>
        <div className="form">
          <h3>{t("capcha.title")}</h3>

          {/* ------------------- FORM ---------------------- */}
          <Form form={form} name="nest-messages" autoComplete="off" onFinish={onSubmit}>
            <Row justify="space-between">
              <Col md={11} span={24}>
                <Form.Item name={"yourName"} required={true}>
                  <Input placeholder={t('capcha.name')} type="text"/>
                </Form.Item>
                <Form.Item name={"email"} required={true}>
                  <Input placeholder={t('capcha.email')} type="email" />
                </Form.Item>
              </Col>
              <Col md={11} span={24}>
                <Form.Item name={"text"}>
                  <TextArea rows={3} placeholder={t('capcha.message')} />
                </Form.Item>
              </Col>
            </Row>

            <Row className="captcha-row">
              <Col md={5} span={24} className="captcha-col">
                <ReCAPTCHA
                  sitekey="6Ldlj0ogAAAAAN_WLV-Q6Q4xaErsionnvE4gyNGr"
                  onChange={() => {
                    setCaptcha((p) => !p);
                  }}
                />
              </Col>
              <Col className="formBtn" md={6} span={12}>
                <Button type="primary" htmlType="submit" disabled={!captcha} loading={isLoading}>
                  {t('capcha.btn')}
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </HomePageFormWrapper>
  );

};

export default HomePageForm;
