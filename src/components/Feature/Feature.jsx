import PropTypes from "prop-types";
import { FaSquareCaretRight } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex justify-center items-center gap-2">
                <FaSquareCaretRight className="text-lime-300"/>
                {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;