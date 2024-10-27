import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym facilities",
            "Basic fitness classes",
            "Limited access to pool",
            "Discounted towel service"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "Access to gym facilities",
            "Variety of fitness classes",
            "Personal training sessions (limited)",
            "Access to wellness center"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 79.99,
          "features": [
            "Access to gym facilities",
            "Unlimited fitness classes",
            "Unlimited personal training sessions",
            "Priority access to equipment"
          ]
        }
      ];

    return (
        <div className="my-10">
            <h2 className="text-4xl font-extrabold text-center my-5">Best Prices in the Town</h2>
           <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;