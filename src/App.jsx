  import { useState } from "react";
  import Cart from "./Components/Cart/Cart";
  import Courses from "./Components/Courses/Courses";
  import Header from "./Components/Header/Header";
  import toast, { Toaster } from 'react-hot-toast';

  const App = () => {
  const [courseNames, setCourseNames] = useState([]);
  const [credit, setCredit]=useState(20);
  const [total, setTotal]=useState(0);
  const [totalResult, setTotalResult]= useState(0);

  const totalPrice = (course) => {
    const price = course.price;
    const newPrice = totalResult + price;
    setTotalResult(newPrice);
}

  const handleTotal = (course) => {
    const newValue = total + course.credit_hours;
    setTotal(newValue);
    handleCredit(newValue);
  }

  const handleCredit = (newValue) => {
    const newResult = credit - newValue;
    setCredit(newResult)
  }

  const handleCourseName = (course)=>{
  const alReadyExist = courseNames.some(item=>item.id === course.id);
  if(alReadyExist){
  toast.error('the course already  added');
  return ;
  }
  const newValue1 = [...courseNames, course]
  setCourseNames(newValue1);
  handleTotal(course);
  handleCredit(course.credit_hours);
  totalPrice(course);
  }

  return (
  <div>
  <Header></Header>
  <main className="container w-9/12 mx-auto mt-6 flex">
  <Courses 
  handleCourseName={handleCourseName}
  handleTotal={handleTotal}
  ></Courses>
  <Cart 
  courseNames={courseNames}
  handleCredit={handleCredit}
  credit={credit}
  total={total}
  totalResult={totalResult}
  ></Cart>
  </main>
  <Toaster toast={toast}></Toaster>
  </div>
  );
  };

  export default App;
