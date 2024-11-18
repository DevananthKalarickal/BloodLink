import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Featured = () => {
  const navigate = useNavigate(); // Move inside the component

  const handleLearnMoreClick = () => {
    navigate('/Learnmore');
    window.scrollTo(0, 0);
  }
  return (
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
                Join the life-saving cause and help those in need by donating blood. Your donation can save lives.
              </Card.Text>
              <Button
                variant="outline-danger"
                className="w-100 rounded-pill shadow-sm modern-button"
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #ff416c, #ff4b2b)';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#dc3545';
                }}
                aria-label="Read more about becoming a blood donor"
                onClick={handleLearnMoreClick}>
                Learn more →
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Similar Cards */}
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
                Blood donations are essential for treating patients in emergencies, surgeries, and chronic conditions.
              </Card.Text>
              <Button
                variant="outline-danger"
                className="w-100 rounded-pill shadow-sm modern-button"
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #ff416c, #ff4b2b)';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#dc3545';
                }}
                aria-label="Read more about why to donate blood"
                onClick={handleLearnMoreClick}>
                Learn more →
              </Button>
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
                alt ="How Blood Donation Helps?"
              />
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-danger fw-bold fs-4 modern-title">How Blood Donation Helps?</Card.Title>
              <Card.Text className="text-muted flex-grow-1 fs-5 modern-text">
                Your donation directly helps patients in need, providing them with the critical blood they require to survive and recover.
              </Card.Text>
              <Button
                variant="outline-danger"
                className="w-100 rounded-pill shadow-sm modern-button"
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #ff416c, #ff4b2b)';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#dc3545';
                }}
                aria-label="Read more about how blood donation helps"
                onClick={handleLearnMoreClick} >
                Learn more →
              </Button>
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
              <li className="text-muted fs-5">→ Help save lives in emergencies</li>
              <li className="text-muted fs-5">→ Support patients undergoing surgery</li>
              <li className="text-muted fs-5">→ Provide assistance for those with chronic blood conditions</li>
            </ul>
            <Button
              variant="outline-danger"
              className="w-100 rounded-pill shadow-sm modern-button"
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(to right, #ff416c, #ff4b2b)';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#dc3545';
              }}
              aria-label="Read more about blood donors"
              onClick={handleLearnMoreClick}>
              Learn more →
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Featured;