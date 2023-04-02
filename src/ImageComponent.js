import Image from "./images/lasha-test.jpg";
import "./ImageComponent.css";
const ImageComponent = () => {
  return <img className="photo" src={Image} alt="person" />;
};

export default ImageComponent;
