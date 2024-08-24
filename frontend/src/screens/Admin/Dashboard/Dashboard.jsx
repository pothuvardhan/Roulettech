import React from "react";

const StudentDashboard = () => {
  const studentData = {
    name: "Vardhan",
    id: "123456",
    attendance: "85%",
    assignmentScores: [
      { title: "Assignment 1", score: 85 },
      { title: "Assignment 2", score: 92 },
      { title: "Assignment 3", score: 78 },
    ],
    examScores: [
      { title: "Midterm Exam", score: 88 },
      { title: "Final Exam", score: 90 },
    ],
    extraCurricular: [
      { activity: "Basketball Team", position: "Captain" },
      { activity: "Drama Club", position: "Member" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md p-2"
          />
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Welcome, {studentData.name}</h2>
          <p className="text-gray-600">Student ID: {studentData.id}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2">Attendance</h2>
            <p className="text-gray-600 text-xl">{studentData.attendance}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Assignment Scores</h2>
            <ul>
              {studentData.assignmentScores.map((assignment, index) => (
                <li key={index} className="mb-2">
                  <span className="font-semibold">{assignment.title}:</span> {assignment.score}%
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Exam Scores</h2>
            <ul>
              {studentData.examScores.map((exam, index) => (
                <li key={index} className="mb-2">
                  <span className="font-semibold">{exam.title}:</span> {exam.score}%
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Extra Curricular Activities</h2>
            <ul>
              {studentData.extraCurricular.map((activity, index) => (
                <li key={index} className="mb-2">
                  <span className="font-semibold">{activity.activity}:</span> {activity.position}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
