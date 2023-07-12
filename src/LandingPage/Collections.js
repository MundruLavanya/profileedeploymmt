import { Container, Row } from "react-bootstrap";
import Collectionitem from "./Collectionitem";
import Img1 from "../Images/photography2.jpeg";
import Img2 from "../Images/photography3.jpeg";
import Img3 from "../Images/photography4.jpeg";
import Img4 from "../Images/photography5.jpeg";
import Img5 from "../Images/photography6.jpeg";
import Img6 from "../Images/photography7.jpeg";
import Img7 from "../Images/photography8.jpeg";
import Img8 from "../Images/photography9.jpeg";

export default function Collections() {
  return (
    <Container className="py-5">
      <h3 className="font-secondary color-primary fs-40">
        <u>Collections</u> <i class="bi bi-arrow-right"></i>
      </h3>
      <Row>
        <Collectionitem img={Img1} text="Photography" />
        <Collectionitem img={Img2} text="Selfie" />
        <Collectionitem img={Img3} text="Selfie" />
        <Collectionitem img={Img4} text="Bird" />
        <Collectionitem img={Img5} text="Bird" />
        <Collectionitem img={Img6} text="Marriage" />
        <Collectionitem img={Img7} text="Prewedding" />
        <Collectionitem img={Img8} text="Babies" />
      </Row>
    </Container>
  );
}
