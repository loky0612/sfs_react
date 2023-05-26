import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './Rating.css';

const Rating = (props) => {
  
    const [number, setNumber] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);
    const sname = props.sname;
  

  return (
    <div className='man'>
        <div className='bbox'>
            <div className='cont'>
                <div className='subtext'><h1>{sname}</h1></div>
                <div className='ll'>
                    {Array(5)
                    .fill()
                    .map((_, index) => number >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                        onMouseOver={() => !number && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        style={{ color: "orange" }}
                        onClick={() => setNumber(index + 1)} className="star"
                    />
                    ) : (
                    <AiOutlineStar
                        onMouseOver={() => !number && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        style={{ color: "orange" }}
                        onClick={() => setNumber(index + 1)} className="star"
                    />
                    ))}
                </div>
                <div>
                    <textarea className="tt" placeholder='Tell something'></textarea>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rating;