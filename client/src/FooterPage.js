import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="blue-grey darken-3" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">College Singlet</h5>
      <p>
      </p>
      </Col>
      <Col md="6">
      <p>* All photographs  (click a name for more):</p>
      <a href="https://ckramerphoto.smugmug.com/"><h5 className="title">Cam Kramer</h5></a>
      <ul>
        <li className="list-unstyled">
          <a href="https://www.flickr.com/photos/chrishunkeler/"><h5>Chris Hunkeler</h5></a>
        </li>
      
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    {/* <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
    </Container> */}
  </div>
</Footer>
);
}
}

export default FooterPage;