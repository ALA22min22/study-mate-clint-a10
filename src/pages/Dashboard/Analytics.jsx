import React, { useEffect, useState, useContext } from "react"; 
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider"; 

const Analytics = () => {
   
    const { user } = useContext(AuthContext); 

    const [stats, setStats] = useState({
        totalUsers: 0,
        totalRequests: 0,
        subjectStats: [],
        experienceStats: []
    });

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    useEffect(() => {
      
        axios.get('http://localhost:3000/admin-stats') 
            .then(res => {
                setStats(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Analytics Dashboard</h2>
            
             {/* Body code */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                
                <div className="stat bg-white shadow-lg rounded-xl border-l-4 border-secondary p-4">
                    <div className="stat-title font-semibold text-gray-500">Total Users</div>
                    <div className="stat-value text-secondary text-4xl">{stats.totalUsers}</div>
                </div>

                <div className="stat bg-white shadow-lg rounded-xl border-l-4 border-primary p-4">
                    <div className="stat-title font-semibold text-gray-500">Total Requests</div>
                    <div className="stat-value text-primary text-4xl">{stats.totalRequests}</div>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pie Chart */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4 text-center text-gray-700">Users by Subject</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={stats.subjectStats}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {stats.subjectStats.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4 text-center text-gray-700">Experience Levels</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={stats.experienceStats}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#8884d8">
                                    {stats.experienceStats.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;