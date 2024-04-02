  import { useState } from "react";
  import Cart from "./Components/Cart/Cart";
  import Courses from "./Components/Courses/Courses";
  import Header from "./Components/Header/Header";
  import toast, { Toaster } from 'react-hot-toast';

  const App = () => {
  const [courseNames, setCourseNames] = useState([]);
  console.log(courseNames)
  const [credit, setCredit]=useState(20);
  const [total, setTotal]=useState(0);
  const [totalResult, setTotalResult]= useState(0);
  
  const totalPrice = (price) => {
    const price1 = price;
    const newPrice = totalResult + price1;
    setTotalResult(newPrice);
}
  const handleTotal = (course) => {
    const newValue = total + course;
    setTotal(newValue);
    if(total <= 20){
      return;
    }else{
      handleCredit(newValue); 
    }
    
  }

  const handleCredit = (course) => {
    const newResult = credit - course.credit_hours;
    if( newResult < 0){
      toast.error("You don't have enough credits");
      return
    }
    if (credit <= 0){
      return
    }
    setCredit(newResult)
    handleTotal(course.credit_hours);
    totalPrice(course.price);

  }

  const handleCourseName = (course) => {
    if (credit <= 0) {
      toast.error("You don't have enough credits");
      return;
    }
  
    const newValue1 = [...courseNames, course];
  
    const newResult = credit - course.credit_hours;
    if (newResult < 0) {
      toast.error("You don't have enough credits");
      return;
    }

    const alReadyExist = courseNames.some((item) => item.id === course.id);
    if (alReadyExist) {
      toast.error("The course is already added");
      return;
    }

    setCourseNames(newValue1);git
    setCredit(newResult);
    setTotal(total + course.credit_hours);
    setTotalResult(totalResult + course.price);
  };
  

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
