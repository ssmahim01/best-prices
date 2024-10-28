import axios from "axios";
import { useState } from "react";
import { Audio } from "react-loader-spinner";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     // .then(response => response.json())
    //     // .then(data => console.log(data.data))
    // }, []);

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map(phone => {
            const obj = {
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
            }
            return obj;
        })
        setPhones(phonesWithFakeData);
        setLoading(false);
    })

    return (
        <div>

            <h2 className="text-center text-4xl font-bold mb-5">Phones: {phones.length}</h2>

           {loading && <div className="flex justify-center items-center py-5">
            <Audio height="80"
             width="80"
             radius="9"
             color="green"
             ariaLabel="loading"
             wrapperStyle
             wrapperClass/>
           </div>
           }

            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="green"></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;