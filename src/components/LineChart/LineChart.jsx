import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const marks = [
        {
          "id": 1,
          "name": "Alice Johnson",
          "physics": 82,
          "math": 85
        },
        {
          "id": 2,
          "name": "Bob Smith",
          "physics": 75,
          "math": 72
        },
        {
          "id": 3,
          "name": "Charlie Brown",
          "physics": 90,
          "math": 92
        },
        {
          "id": 4,
          "name": "David Lee",
          "physics": 65,
          "math": 68
        },
        {
          "id": 5,
          "name": "Emily Davis",
          "physics": 88,
          "math": 88
        },
        {
          "id": 6,
          "name": "Frank Wilson",
          "physics": 79,
          "math": 79
        },
        {
          "id": 7,
          "name": "Grace Miller",
          "physics": 95,
          "math": 95
        },
        {
          "id": 8,
          "name": "Henry Harris",
          "physics": 72,
          "math": 75
        },
        {
          "id": 9,
          "name": "Isabella Clark",
          "physics": 84,
          "math": 82
        },
        {
          "id": 10,
          "name": "Jack Taylor",
          "physics": 69,
          "math": 69
        }
      ];

    return (
        <div className='py-12'>
            <LChart width={1200} height={400} data={marks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="math" stroke='blue'></Line>
                <Line type="monotone" dataKey="physics" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;