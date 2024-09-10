import { useEffect, useState } from 'react';
import axios from 'axios';

interface Data {
  id: number;
  title: string;
}

const ApiData = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">API Data</h1>
      <ul className="space-y-2">
        {data.slice(0, 10).map((item) => (
          <li key={item.id} className="p-2 border border-gray-300 rounded-md">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
