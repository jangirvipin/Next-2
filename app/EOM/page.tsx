import EmployeeOfTheMonth from "@/components/EOM";


const App = () => {
  const employee = {
    name: 'Jane Doe',
    position: 'Senior Developer',
    description: 'Recognized for outstanding leadership and exceptional coding skills this month.',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg', // Replace with an actual image URL
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <EmployeeOfTheMonth
        name={employee.name}
        position={employee.position}
        description={employee.description}
        imageUrl={employee.imageUrl}
      />
    </div>
  );
};

export default App;
