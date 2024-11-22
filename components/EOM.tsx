import React from 'react';

type Employee = {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
};

const EmployeeOfTheMonth: React.FC<Employee> = ({ name, position, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded  overflow-hidden shadow-lg ">
      <img className="w-full h-52 object-fit" src={imageUrl} alt={`${name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{position}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default EmployeeOfTheMonth;
