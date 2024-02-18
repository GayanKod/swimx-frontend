import React, {useState} from 'react';
import {HiPencilAlt, HiTrash} from 'react-icons/hi';

const data = [
    {
        id: 1,
        user: 'John Doe',
        code: 'JD001',
        date: '2024-02-18',
        checkIn: '09:00 AM',
        checkOut: '05:00 PM',
        amount: 1000,
        status: 'Paid'
    },
    {
        id: 2,
        user: 'Jane Smith',
        code: 'JS002',
        date: '2024-02-19',
        checkIn: '08:30 AM',
        checkOut: '04:30 PM',
        amount: 1200,
        status: 'Pending'
    },
    {
        id: 3,
        user: 'Alice Johnson',
        code: 'AJ003',
        date: '2024-02-20',
        checkIn: '10:00 AM',
        checkOut: '06:00 PM',
        amount: 1500,
        status: 'Paid'
    },
    {
        id: 4,
        user: 'Bob Brown',
        code: 'BB004',
        date: '2024-02-21',
        checkIn: '09:30 AM',
        checkOut: '05:30 PM',
        amount: 1100,
        status: 'Pending'
    },
    {
        id: 5,
        user: 'Bob Brown',
        code: 'BB004',
        date: '2024-02-21',
        checkIn: '09:30 AM',
        checkOut: '05:30 PM',
        amount: 1100,
        status: 'Pending'
    },
    {
        id: 6,
        user: 'Bob Brown',
        code: 'BB004',
        date: '2024-02-21',
        checkIn: '09:30 AM',
        checkOut: '05:30 PM',
        amount: 1100,
        status: 'Pending'
    },
];

const AdminDashboardUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 5;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const filteredData = data.filter((item) =>
        item.user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="container mx-auto my-4">
            <h1 className="text-2xl font-bold mb-4">All Registered Users Users</h1>
            <div className="mb-4 bg-white rounded-lg shadow-md px-4 py-2">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search User..."
                    className="border-none outline-none w-full"
                />
            </div>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="table-auto min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check
                            In
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check
                            Out
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount
                            (Rs.)
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedData.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 whitespace-nowrap">{item.user}</td>
                            <td className="px-6 whitespace-nowrap">{item.code}</td>
                            <td className="px-6 whitespace-nowrap">{item.date}</td>
                            <td className="px-6 whitespace-nowrap">{item.checkIn}</td>
                            <td className="px-6 whitespace-nowrap">{item.checkOut}</td>
                            <td className="px-6 whitespace-nowrap">{item.amount}</td>
                            <td className="px-6 whitespace-nowrap">
                                    <span
                                        className={`inline-flex items-center justify-center w-16 h-6 rounded-full text-xs font-medium ${item.status === 'Pending' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                        {item.status}
                                    </span>
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                                    <HiPencilAlt/>
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded ml-2">
                                    <HiTrash/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    {paginatedData.length === 0 && (
                        <tr>
                            <td colSpan="8" className="px-6 py-4 text-center text-gray-500">No data available</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-4">
                <div>
                    <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button onClick={() => handlePageChange(currentPage === 1 ? 1 : currentPage - 1)}
                                className={`inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                                disabled={currentPage === 1}>Previous
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage === totalPages ? totalPages : currentPage + 1)}
                            className={`inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                            disabled={currentPage === totalPages}>Next
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardUsers;
