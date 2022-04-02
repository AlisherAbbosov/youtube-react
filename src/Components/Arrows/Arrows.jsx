import "./Arrows.scss";
import ArrowLeft from "../Lib/Icons/Home/Left.png";
import ArrowRight from "../Lib/Icons/Home/Right.png";

const Arrows = () => {
  return (
    <div className="arrows">
      <img className="arrow" src={ArrowLeft} alt="arrow" />
      <img className="arrow" src={ArrowRight} alt="right" />
    </div>
  );
};

export default Arrows;
