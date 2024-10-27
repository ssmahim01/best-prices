import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({option}) => {
    const {name, price, features} = option;

    return (
        <div className="mx-auto bg-blue-500 rounded-lg p-8 flex flex-col text-white space-y-5">
            <h2 className="text-center">
                <span className="text-3xl font-extrabold">{price}</span>
                <span className="text-xl font-semibold">/mon</span>
            </h2>

            <h2 className="text-3xl font-bold text-center">{name}</h2>

            <div className="flex-grow">
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }   
            </div>

            <button className="btn bg-lime-400 w-full text-gray-100 font-bold rounded-2xl border-none">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;