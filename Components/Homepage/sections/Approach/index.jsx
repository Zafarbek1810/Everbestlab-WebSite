import React from "react";
import { StyledApproach } from "./Approach.style";
import { Col, Row } from "antd";
import Container from "../../../CommonComponents/Container";
import { useTranslation } from "react-i18next";
import MyButton from "../../../CommonComponents/MyButton";
 

const Approach = () => {
  
  const { t } = useTranslation();

  return (
    <StyledApproach>
      <Container>
        <Row>
          <Col className="right-side" span={24} md={24}>
            <div>
              <p className="badge">
                <span>{t("approach.title-top")}</span>
              </p>
              <h2 className="title">{t("approach.title")}</h2>
            </div>
            <MyButton to="/approach" className="approach-btn">
              {t("approach.btn")}
            </MyButton>
          </Col>
        </Row>
        <div className="icons">
          <div className="col">
            <div className="icon">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3438 24.375C17.3438 26.4469 15.6656 28.125 13.5938 28.125C11.5219 28.125 9.84375 26.4469 9.84375 24.375C9.84375 22.3031 11.5219 20.625 13.5938 20.625C15.6656 20.625 17.3438 22.3031 17.3438 24.375Z"
                  fill="#0c5adb"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.5938 26.25C14.091 26.25 14.5679 26.0525 14.9196 25.7008C15.2712 25.3492 15.4688 24.8723 15.4688 24.375C15.4688 23.8777 15.2712 23.4008 14.9196 23.0492C14.5679 22.6975 14.091 22.5 13.5938 22.5C13.0965 22.5 12.6196 22.6975 12.2679 23.0492C11.9163 23.4008 11.7188 23.8777 11.7188 24.375C11.7188 24.8723 11.9163 25.3492 12.2679 25.7008C12.6196 26.0525 13.0965 26.25 13.5938 26.25ZM13.5938 28.125C15.6656 28.125 17.3438 26.4469 17.3438 24.375C17.3438 22.3031 15.6656 20.625 13.5938 20.625C11.5219 20.625 9.84375 22.3031 9.84375 24.375C9.84375 26.4469 11.5219 28.125 13.5938 28.125Z"
                  fill="#0c5adb"
                />
                <path
                  d="M5.625 34.2609C5.625 31.4278 10.9341 30 13.5937 30C16.2534 30 21.5625 31.4278 21.5625 34.2609V39.375H5.625V34.2609Z"
                  fill="#0c5adb"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.81312 33.7341C7.51687 34.0266 7.5 34.1944 7.5 34.2619V37.5H19.6875V34.2609C19.6875 34.1953 19.6706 34.0266 19.3744 33.7341C19.0612 33.4256 18.5447 33.0947 17.8369 32.7919C16.4119 32.1816 14.6719 31.875 13.5937 31.875C12.5156 31.875 10.7747 32.1816 9.35062 32.7919C8.64281 33.0947 8.12625 33.4256 7.81312 33.7341ZM13.5937 30C10.9341 30 5.625 31.4278 5.625 34.2609V39.375H21.5625V34.2609C21.5625 31.4278 16.2534 30 13.5937 30Z"
                  fill="#0c5adb"
                />
                <path
                  d="M35.1562 24.375C35.1562 26.4469 33.4781 28.125 31.4062 28.125C29.3344 28.125 27.6562 26.4469 27.6562 24.375C27.6562 22.3031 29.3344 20.625 31.4062 20.625C33.4781 20.625 35.1562 22.3031 35.1562 24.375Z"
                  fill="#0c5adb"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.4062 26.25C31.9035 26.25 32.3804 26.0525 32.7321 25.7008C33.0837 25.3492 33.2812 24.8723 33.2812 24.375C33.2812 23.8777 33.0837 23.4008 32.7321 23.0492C32.3804 22.6975 31.9035 22.5 31.4062 22.5C30.909 22.5 30.4321 22.6975 30.0804 23.0492C29.7288 23.4008 29.5312 23.8777 29.5312 24.375C29.5312 24.8723 29.7288 25.3492 30.0804 25.7008C30.4321 26.0525 30.909 26.25 31.4062 26.25ZM31.4062 28.125C33.4781 28.125 35.1562 26.4469 35.1562 24.375C35.1562 22.3031 33.4781 20.625 31.4062 20.625C29.3344 20.625 27.6562 22.3031 27.6562 24.375C27.6562 26.4469 29.3344 28.125 31.4062 28.125Z"
                  fill="#0c5adb"
                />
                <path
                  d="M26.25 22.5C26.25 24.5719 24.5719 26.25 22.5 26.25C20.4281 26.25 18.75 24.5719 18.75 22.5C18.75 20.4281 20.4281 18.75 22.5 18.75C24.5719 18.75 26.25 20.4281 26.25 22.5Z"
                  fill="#0c5adb"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5 24.375C22.9973 24.375 23.4742 24.1775 23.8258 23.8258C24.1775 23.4742 24.375 22.9973 24.375 22.5C24.375 22.0027 24.1775 21.5258 23.8258 21.1742C23.4742 20.8225 22.9973 20.625 22.5 20.625C22.0027 20.625 21.5258 20.8225 21.1742 21.1742C20.8225 21.5258 20.625 22.0027 20.625 22.5C20.625 22.9973 20.8225 23.4742 21.1742 23.8258C21.5258 24.1775 22.0027 24.375 22.5 24.375ZM22.5 26.25C24.5719 26.25 26.25 24.5719 26.25 22.5C26.25 20.4281 24.5719 18.75 22.5 18.75C20.4281 18.75 18.75 20.4281 18.75 22.5C18.75 24.5719 20.4281 26.25 22.5 26.25Z"
                  fill="#0c5adb"
                />
                <path
                  d="M21.5625 12.0309C21.5625 10.8293 21.0851 9.6768 20.2354 8.82708C19.3857 7.97737 18.2332 7.5 17.0315 7.5H14.0606C12.8313 7.49802 11.6504 7.97923 10.7726 8.83988C9.89486 9.70052 9.39046 10.8717 9.3682 12.1008C9.34594 13.3299 9.8076 14.5185 10.6536 15.4104C11.4997 16.3022 12.6623 16.8259 13.8909 16.8684L14.0625 16.875V18.75C14.0625 18.75 21.5625 17.6559 21.5625 12.0309ZM24.375 10.5338C24.375 9.23187 24.8921 7.98331 25.8127 7.06274C26.7333 6.14217 27.9818 5.625 29.2837 5.625H34.6875C35.9307 5.625 37.123 6.11886 38.002 6.99794C38.8811 7.87701 39.375 9.0693 39.375 10.3125C39.375 11.5557 38.8811 12.748 38.002 13.6271C37.123 14.5061 35.9307 15 34.6875 15H32.8125V17.8125C32.8125 17.8125 24.375 16.6275 24.375 10.5338ZM23.4375 34.2609C23.4375 31.4278 28.7465 30 31.4062 30C34.0659 30 39.375 31.4278 39.375 34.2609V39.375H23.4375V34.2609Z"
                  fill="#0c5adb"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.6257 33.7341C25.3294 34.0266 25.3125 34.1944 25.3125 34.2619V37.5H37.5V34.2609C37.5 34.1953 37.4832 34.0266 37.1869 33.7341C36.8738 33.4256 36.3572 33.0947 35.6494 32.7919C34.2244 32.1816 32.4844 31.875 31.4063 31.875C30.3282 31.875 28.5872 32.1816 27.1632 32.7919C26.4554 33.0947 25.9388 33.4256 25.6257 33.7341ZM31.4063 30C28.7466 30 23.4375 31.4278 23.4375 34.2609V39.375H39.375V34.2609C39.375 31.4278 34.066 30 31.4063 30ZM22.5 32.8125V32.3859C22.5 30.8137 20.7685 29.6738 18.7454 28.9706C19.9194 28.4158 21.2015 28.1271 22.5 28.125C23.7986 28.1271 25.0807 28.4158 26.2547 28.9706C24.2325 29.6738 22.5 30.8137 22.5 32.3859V32.8125Z"
                  fill="#0c5adb"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5 32.8125V32.3859C22.5 31.5488 22.9913 30.8334 23.7563 30.2419C23.8002 30.2084 23.8445 30.1756 23.8894 30.1434C24.5419 29.6691 25.3707 29.2781 26.2547 28.9716C25.3766 28.5575 24.4367 28.2899 23.4722 28.1794C22.8265 28.1069 22.1746 28.1069 21.5288 28.1794C20.564 28.2895 19.6238 28.5568 18.7454 28.9706C19.6294 29.2781 20.4582 29.6691 21.1116 30.1425C21.1566 30.1753 21.1997 30.2081 21.2429 30.2419C22.0088 30.8325 22.5 31.5488 22.5 32.3859V32.8125Z"
                  fill="#0c5adb"
                />
              </svg>
            </div>
            <div className="text">
              <p>{t("approach.approach1")}</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="col">
            <div className="icon">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 24.375V15C3.75 13.9688 4.1175 13.0862 4.8525 12.3525C5.58625 11.6175 6.46875 11.25 7.5 11.25H15V7.5C15 6.46875 15.3675 5.58562 16.1025 4.85062C16.8363 4.11687 17.7188 3.75 18.75 3.75H26.25C27.2813 3.75 28.1644 4.11687 28.8994 4.85062C29.6331 5.58562 30 6.46875 30 7.5V11.25H37.5C38.5313 11.25 39.4144 11.6175 40.1494 12.3525C40.8831 13.0862 41.25 13.9688 41.25 15V24.375H28.125V22.5C28.125 21.9688 27.9456 21.5231 27.5869 21.1631C27.2269 20.8044 26.7813 20.625 26.25 20.625H18.75C18.2188 20.625 17.7738 20.8044 17.415 21.1631C17.055 21.5231 16.875 21.9688 16.875 22.5V24.375H3.75ZM18.75 11.25H26.25V7.5H18.75V11.25ZM20.625 28.125V24.375H24.375V28.125H20.625ZM7.5 39.375C6.46875 39.375 5.58625 39.0081 4.8525 38.2744C4.1175 37.5394 3.75 36.6562 3.75 35.625V28.125H16.875V30C16.875 30.5312 17.055 30.9762 17.415 31.335C17.7738 31.695 18.2188 31.875 18.75 31.875H26.25C26.7813 31.875 27.2269 31.695 27.5869 31.335C27.9456 30.9762 28.125 30.5312 28.125 30V28.125H41.25V35.625C41.25 36.6562 40.8831 37.5394 40.1494 38.2744C39.4144 39.0081 38.5313 39.375 37.5 39.375H7.5Z"
                  fill="#0c5adb"
                />
              </svg>
            </div>
            <div className="text">
              <p>{t("approach.approach2")}</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="col">
            <div className="icon">
              <svg
                width="45"
                height="43"
                viewBox="0 0 45 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.9486 36.6164L30.7006 26.6246C30.5237 25.2093 29.8359 23.9074 28.7665 22.9637C27.6971 22.02 26.3198 21.4995 24.8935 21.5H20.5957C19.1701 21.5004 17.7937 22.0214 16.7251 22.965C15.6565 23.9086 14.9693 25.21 14.7925 26.6246L13.5426 36.6164C13.474 37.1654 13.5229 37.7226 13.6862 38.2512C13.8495 38.7798 14.1234 39.2675 14.4897 39.6821C14.856 40.0967 15.3062 40.4287 15.8107 40.6559C16.3151 40.8831 16.862 41.0004 17.4153 41H28.0779C28.6309 41.0001 29.1777 40.8826 29.6818 40.6553C30.186 40.4279 30.6361 40.096 31.0021 39.6814C31.3682 39.2668 31.6419 38.7791 31.8051 38.2507C31.9683 37.7223 32.0172 37.1652 31.9486 36.6164V36.6164Z"
                  stroke="#0c5adb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.7466 13.7C25.9775 13.7 28.5966 11.0809 28.5966 7.85C28.5966 4.61913 25.9775 2 22.7466 2C19.5157 2 16.8966 4.61913 16.8966 7.85C16.8966 11.0809 19.5157 13.7 22.7466 13.7Z"
                  stroke="#0c5adb"
                  strokeWidth="3"
                />
                <path
                  d="M7.14658 19.55C9.30049 19.55 11.0466 17.8039 11.0466 15.65C11.0466 13.4961 9.30049 11.75 7.14658 11.75C4.99267 11.75 3.24658 13.4961 3.24658 15.65C3.24658 17.8039 4.99267 19.55 7.14658 19.55Z"
                  stroke="#0c5adb"
                  strokeWidth="3"
                />
                <path
                  d="M38.3465 19.55C40.5004 19.55 42.2465 17.8039 42.2465 15.65C42.2465 13.4961 40.5004 11.75 38.3465 11.75C36.1926 11.75 34.4465 13.4961 34.4465 15.65C34.4465 17.8039 36.1926 19.55 38.3465 19.55Z"
                  stroke="#0c5adb"
                  strokeWidth="3"
                />
                <path
                  d="M38.3465 25.3999H38.9432C39.8664 25.3998 40.7597 25.7272 41.4642 26.3238C42.1687 26.9205 42.6387 27.7477 42.7906 28.6584L43.4399 32.5584C43.5331 33.1171 43.5035 33.6895 43.353 34.2356C43.2026 34.7818 42.935 35.2886 42.5688 35.7208C42.2026 36.153 41.7467 36.5003 41.2327 36.7385C40.7188 36.9766 40.1591 37.1 39.5926 37.0999H32.4965M7.14653 25.3999H6.54983C5.62662 25.3998 4.73331 25.7272 4.02882 26.3238C3.32433 26.9205 2.85435 27.7477 2.70248 28.6584L2.05313 32.5584C1.95994 33.1171 1.9896 33.6895 2.14004 34.2356C2.29048 34.7818 2.55808 35.2886 2.92425 35.7208C3.29041 36.153 3.74634 36.5003 4.26032 36.7385C4.7743 36.9766 5.334 37.1 5.90048 37.0999H12.9965L7.14653 25.3999Z"
                  stroke="#0c5adb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text">
              <p>{t("approach.approach3")}</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="col">
            <div className="icon">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_33_235)">
                  <path
                    d="M12.8678 33.1873C12.3171 33.1881 11.7853 32.9863 11.3738 32.6203L-0.0112305 22.4998L12.006 11.8168C12.4539 11.4336 13.0344 11.2415 13.6225 11.2818C14.2106 11.3221 14.7593 11.5916 15.1508 12.0323C15.5423 12.473 15.7452 13.0498 15.7159 13.6385C15.6865 14.2272 15.4273 14.781 14.994 15.1806L6.76127 22.4998L14.3618 29.2543C14.7032 29.5573 14.9445 29.957 15.0534 30.4003C15.1624 30.8436 15.1339 31.3096 14.9718 31.7363C14.8097 32.1631 14.5216 32.5304 14.1458 32.7896C13.77 33.0487 13.3243 33.1875 12.8678 33.1873ZM32.994 33.1828L45.0113 22.4998L33.6263 12.3793C33.1802 11.9831 32.595 11.7803 31.9994 11.8155C31.4038 11.8508 30.8466 12.1211 30.4504 12.5672C30.0542 13.0133 29.8514 13.5985 29.8866 14.1941C29.9218 14.7896 30.1922 15.3468 30.6383 15.7431L38.2388 22.4998L30.006 29.8168C29.5597 30.2131 29.289 30.7704 29.2535 31.3662C29.2181 31.962 29.4208 32.5475 29.817 32.9938C30.2133 33.4402 30.7706 33.7109 31.3664 33.7463C31.9622 33.7818 32.5477 33.5791 32.994 33.1828ZM22.4685 36.3711L26.9685 9.37108C27.0261 9.076 27.0239 8.77238 26.9621 8.47815C26.9003 8.18393 26.7802 7.90507 26.6089 7.65804C26.4375 7.41101 26.2184 7.20083 25.9645 7.0399C25.7105 6.87898 25.4269 6.77058 25.1304 6.7211C24.8338 6.67163 24.5304 6.68209 24.238 6.75186C23.9455 6.82163 23.67 6.94929 23.4278 7.12732C23.1855 7.30534 22.9814 7.53011 22.8275 7.78834C22.6735 8.04658 22.5729 8.33305 22.5315 8.63083L18.0315 35.6308C17.974 35.9259 17.9762 36.2295 18.0379 36.5238C18.0997 36.818 18.2198 37.0968 18.3911 37.3439C18.5625 37.5909 18.7816 37.8011 19.0356 37.962C19.2895 38.1229 19.5731 38.2313 19.8697 38.2808C20.1662 38.3303 20.4696 38.3198 20.7621 38.2501C21.0545 38.1803 21.33 38.0526 21.5723 37.8746C21.8145 37.6966 22.0187 37.4718 22.1726 37.2136C22.3265 36.9553 22.4272 36.6689 22.4685 36.3711Z"
                    fill="#0c5adb"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_33_235">
                    <rect width="45" height="45" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text">
              <p>{t("approach.approach4")}</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="col">
            <div className="icon">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_33_238"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="6"
                  width="42"
                  height="38"
                >
                  <path
                    d="M19.1666 31.6248L24.9166 33.5415C24.9166 33.5415 39.2916 30.6665 41.2083 30.6665C43.1249 30.6665 43.1249 32.5832 41.2083 34.4998C39.2916 36.4165 32.5833 42.1665 26.8333 42.1665C21.0833 42.1665 17.2499 39.2915 13.4166 39.2915H3.83325"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.3333 17.2498V9.58317C15.3333 9.07484 15.5352 8.58733 15.8946 8.22788C16.2541 7.86844 16.7416 7.6665 17.2499 7.6665H40.2499C40.7582 7.6665 41.2458 7.86844 41.6052 8.22788C41.9647 8.58733 42.1666 9.07484 42.1666 9.58317V24.9165M3.83325 27.7915C5.74992 25.8748 9.58325 22.9998 13.4166 22.9998C17.2499 22.9998 26.3541 26.8332 27.7916 28.7498C29.2291 30.6665 24.9166 33.5415 24.9166 33.5415L3.83325 27.7915Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.9583 7.6665H33.5416V16.2915H23.9583V7.6665Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_33_238)">
                  <path d="M0 0H46V46H0V0Z" fill="#0c5adb" />
                </g>
              </svg>
            </div>
            <div className="text">
              <p>{t("approach.approach5")}</p>
            </div>
          </div>
        </div>
      </Container>
    </StyledApproach>
  );
};

export default Approach;
