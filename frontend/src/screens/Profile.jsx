import React from "react";

const StudentProfile = () => {
  const studentProfile = {
    name: "Vardhan",
    id: "123456",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 College St, City, State, ZIP",
    major: "Computer Science",
    year: "Junior",
    gpa: 3.75,
    bio: "Enthusiastic computer science student with a passion for software development and machine learning. Actively involved in coding competitions and open-source projects.",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex items-center">
          <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
            {studentProfile.name.charAt(0)}
          </div>
          <div className="ml-6">
            <h2 className="text-3xl font-bold">{studentProfile.name}</h2>
            <p className="text-gray-600">Student ID: {studentProfile.id}</p>
            <p className="text-gray-600">Major: {studentProfile.major}</p>
            <p className="text-gray-600">Year: {studentProfile.year}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Email:</span> {studentProfile.email}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Phone:</span> {studentProfile.phone}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Address:</span> {studentProfile.address}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Academic Information</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Major:</span> {studentProfile.major}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Year:</span> {studentProfile.year}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">GPA:</span> {studentProfile.gpa}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 sm:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Bio</h3>
          <p className="text-gray-600">{studentProfile.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
