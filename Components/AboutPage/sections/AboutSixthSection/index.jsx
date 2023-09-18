import React from "react";
import Container from "../../../CommonComponents/Container";
import { Wrapper } from "./wrapper.style";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const ourStaffs = [
  {
    img: "/staffs/saparboy-min.jpg",
    title: "Saparboy Batirov",
    text: "CTO and Co-Founder",
    url: "https://www.linkedin.com/in/sbotirov/"
  },
  {
    img: "/staffs/bobur-min.jpg",
    title: "Bobur Rajabov",
    text: "CEO and Co-Founder",
    url: "https://www.linkedin.com/in/bobur-rajabov-32655146/"
  },
  {
    img: "/staffs/ulugbek-min.jpg",
    title: "Ulug'bek Ro'zimboyev",
    text: "Chief Architect and Co-Founder",
    url: "https://www.linkedin.com/in/ulug-bek-komilovich-7a2a1482/"
  },
  {
    img: "/staffs/navruz.jpg",
    title: "Navruzbek Akhmedov",
    text: "Chief Mobile Engineer and Co-Founder",
    url: "https://www.linkedin.com/in/navruzbek-akhmedov-6ba6b7a8/"
  },
  {
    img: "/staffs/hamdam.jpg",
    title: "Hamdamboy Urunov",
    text: "R&D Department Head",
    url: "https://www.linkedin.com/in/urunov-hamdamboy/"
  },
  {
    img: "/staffs/dilshodlittle-min.jpg",
    title: "Haydarov Dilshodbek",
    text: "Backend Engineer",
  },
  {
    img: "/staffs/ismoil.jpg",
    title: "Yuldoshev Ismoil",
    text: "Senior Backend Engineer",
  },
  {
    img: "/staffs/giyos.jpg",
    title: "Ilkhomov G'iyosiddin",
    text: "Frontend Developer",
  },
  {
    img: "/staffs/abdulhakim-min.jpg",
    title: "Abdukhalimov Abdulkhakim",
    text: "Frontend Engineer",
  },
  {
    img: "/staffs/ilhom-min.jpg",
    title: "Yuldoshev Ilkhom",
    text: "Frontend Developer",
  },
  {
    img: "/staffs/siroj-min.jpg",
    title: "Qilichbayev Sirojiddin",
    text: "Backend Developer",
  },
  {
    img: "/staffs/aziz-min.jpg",
    title: "Davletov Azizbek",
    text: "Backend Developer",
  },
   {
    img: "/staffs/zafar-min.jpg",
    title: "Yo’ldoshev Zafarbek",
    text: "Frontend Developer",
  },
  {
    img: "/staffs/davron-min.jpg",
    title: "Xolboyev Davronjon",
    text: "Android Developer",
  },
  {
    img: "/staffs/davlatyor-min.jpg",
    title: "Erkinov Davlatyor",
    text: "Frontend Developer",
  },
  {
    img: "/staffs/umidjon-min.jpg",
    title: "Sharifov Umidjon",
    text: "Project Manager",
  },
  {
    img: "/staffs/temur-min.jpg",
    title: "Valiev Temurbek",
    text: "Frontend Developer",
  },
  {
    img: "/staffs/alisher-min.jpg",
    title: "Raximov Alisher",
    text: "QA Engineer",
  },
  {
    img: "/staffs/abdulloh-min.jpg",
    title: "Abdulla Bardiyev",
    text: "iOS Developer",
  },
  {
    img: "/staffs/dilshodKatta-min.jpg",
    title: "Abdullayev Dilshodbek",
    text: "Backend Developer",
  },
  {
    img: "/staffs/doniyor-min.jpg",
    title: "Azodov Doniyor",
    text: "Backend Developer",
  },
  {
    img: "/staffs/salohiddin-min.jpg",
    title: "Qayumov Salokhiddin",
    text: "AI Engineer",
  }
];

const AboutSixthSection = () => {

  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <section>
          <h2 className="title">
            {t("team.title")} <br /> {t("team.title2")}
          </h2>

          <hr />

          <div className="images-wrapper">
            {ourStaffs.map(({img, url, title, text }, index) => (
              <div className="images-item" key={index}>
                <div className="images-inner">
                  <div className="img-wrapper">
                    <img src={img} />
                    {url &&  <a href={url} target={'_blank'} rel="noreferrer" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedinIn} className="linkedinIcon" />
                    </a>}
                  </div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Wrapper>
  );
};

export default AboutSixthSection;
