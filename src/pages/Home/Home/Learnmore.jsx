import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";

const Learnmore = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar2/>

      {/* Main Section */}
      <div className="px-4 py-12 bg-light mb-5 mt-5">
        {/* Card Section */}
        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-lg border-0 h-100 d-flex flex-column rounded-4 modern-card">
              <div className="overflow-hidden rounded-top-4">
                <Card.Img
                  variant="top"
                  src="https://s.wsj.net/public/resources/images/NA-CE022_GAYBLO_GR_20141223204618.jpg"
                  className="img-fluid"
                  style={{ height: '250px', objectFit: 'cover', filter: 'brightness(90%)' }}
                  alt="Become a Blood Donor"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-danger fw-bold fs-4 modern-title">Become a Blood Donor</Card.Title>
                <Card.Text className="text-muted flex-grow-1 fs-5 modern-text">
                Join the life-saving cause and help those in need by donating blood. Your donation can save lives, providing a lifeline to patients undergoing critical surgeries or facing life-threatening conditions. Blood donors are everyday heroes who make a profound impact on their communities by giving the gift of life. Each pint of blood donated can save up to three lives, making your contribution invaluable. By becoming a blood donor, you join a global network of compassionate individuals committed to making a difference. Together, we can ensure that blood is always available for those in need, offering hope and recovery to countless individuals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-lg border-0 h-100 d-flex flex-column rounded-4 modern-card">
              <div className="overflow-hidden rounded-top-4">
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1415405974/photo/blood-donor-at-donation-with-bouncy-ball-holding-in-hand.jpg?s=612x612&w=0&k=20&c=j0nkmkJxIP6U6TsI3yTq8iuc0Ufhq6xoW4FSMlKaG6A="
                  className="img-fluid"
                  style={{ height: '250px', objectFit: 'cover', filter: 'brightness(90%)' }}
                  alt="Why Donate Blood?"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-danger fw-bold fs-4 modern-title">Why Donate Blood?</Card.Title>
                <Card.Text className="text-muted flex-grow-1 fs-5 modern-text">
                Blood donations are essential for treating patients in emergencies, surgeries, and chronic conditions. In critical situations, such as accidents or natural disasters, the need for blood can surge, and every donation helps save lives. Blood is also crucial for patients undergoing major surgeries, cancer treatments, and those with medical conditions like anemia or hemophilia. Donated blood is often the difference between life and death for individuals in need, especially those in urgent need of transfusions. Regular donations ensure a steady supply, providing hospitals with the resources they need to treat patients and save lives every day. Your donation can directly impact the recovery and survival of those battling life-threatening health issues.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-lg border-0 h-100 d-flex flex-column rounded-4 modern-card">
              <div className="overflow-hidden rounded-top-4">
                <Card.Img
                  variant="top"
                  src="https://www.osfhealthcare.org/blog/wp-content/uploads/2021/12/shutterstock_1586903512-1.jpg"
                  className="img-fluid"
                  style={{ height: '250px', objectFit: 'cover', filter: 'brightness(90%)' }}
                  alt="How Blood Donation Helps?"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-danger fw-bold fs-4 modern-title">How Blood Donation Helps?</Card.Title>
                <Card.Text className="text-muted flex-grow-1 fs-5 modern-text">
                Your donation directly helps patients in need, providing them with the critical blood they require to survive and recover. By donating blood, you are offering a lifeline to individuals facing serious medical conditions, such as trauma, cancer, or blood disorders. Each donation contributes to maintaining a steady supply of blood, ensuring that hospitals can respond swiftly to emergencies and planned surgeries. For patients with chronic conditions, regular blood transfusions are often a matter of life and death, and your generosity can make a world of difference. Blood donations have the power to restore health, improve quality of life, and even save lives, making every donation a vital act of compassion.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Hero Section */}
        <div className="hero pt-5">
          <Row className="align-items-center">
            <Col xs={12} lg={5} className="pr-lg-4 mb-4 mb-lg-0">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://t4.ftcdn.net/jpg/10/59/51/69/360_F_1059516962_BCfDziuoY2F9LO4jnoNgtw1pGjnL0VxV.jpg"
                  className="img-fluid shadow-lg"
                  alt="Blood Types"
                  style={{ height: '350px', objectFit: 'cover', borderRadius: '15px' }}
                />
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <h2 className="text-danger border-bottom pb-3 fw-bold fs-2">Who Are Blood Donors?</h2>
              <p className="py-4 fs-5 modern-text">
                Blood donors are individuals who donate blood voluntarily to help others in need. They play a crucial role in saving lives.
              </p>
              <ul className="pb-4">
              <li className="text-muted fs-5">→ Help save lives in emergencies, such as accidents, natural disasters, or unexpected medical crises.</li>
<li className="text-muted fs-5">→ Support patients undergoing surgery, ensuring they have the necessary blood supply for a successful recovery.</li>
<li className="text-muted fs-5">→ Provide assistance for those with chronic blood conditions, such as sickle cell anemia or thalassemia, who need regular transfusions.</li>
<li className="text-muted fs-5">→ Aid cancer patients who often require blood during treatments like chemotherapy, which can weaken the body’s blood count.</li>
<li className="text-muted fs-5">→ Ensure that blood banks are stocked and ready for unexpected medical procedures, maintaining a continuous supply for those in need.</li>
<li className="text-muted fs-5">→ Help newborns and premature babies who may need blood transfusions due to underdeveloped blood systems or health complications at birth.</li>
<li className="text-muted fs-5">→ Provide life-saving support for patients suffering from severe anemia, making it possible for them to continue treatment and improve their health.</li>

              </ul>
            </Col>
          </Row>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};


export default Learnmore;
