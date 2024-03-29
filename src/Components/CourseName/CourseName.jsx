import PropsTypes from 'prop-types'
import Name from '../Name/Name';
const CourseName = ({courseNames}) => {
    return (
        <div>
           <h1 className="ml-4 font-bold text-2xl">course name</h1> 
           {
            courseNames.map(name => <Name
            key={name.id}
            name={name}
            ></Name>)
           }
        </div>
    );
};

CourseName.propTypes= {
    courseNames: PropsTypes.object
}

export default CourseName;