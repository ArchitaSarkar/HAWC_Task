import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import API from '../api/axios';

const columns = [
    { name: 'Name', selector: row => `${row.first_name} ${row.last_name}`, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'University', selector: row => row.university_name },
    { name: 'Joined', selector: row => row.year_joined, sortable: true },
];

export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await API.get('/teachers');
                setData(res.data);
            } catch (err) {
                alert("Session expired. Please login again.");
                localStorage.clear();
                window.location.href = '/login';
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Teacher Directory</h1>
            <DataTable columns={columns} data={data} pagination highlightOnHover />
        </div>
    );
}