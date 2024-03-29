import PropsTypes from 'prop-types'
import Name from '../Name/Name';
const CourseName = ({courseNames}) => {
    return (
        <div >
           <h1 className="ml-4 mt-2 font-bold text-xl">course name</h1> 
           {
            courseNames.map(name => <Name
            key={name.id}
            name={name}
            ></Name>)
           }
            <hr className='mt-6 border-b border-slate-600 font-bold'/>
        </div>
    );
};

CourseName.propTypes= {
    courseNames: PropsTypes.object
}

export default CourseName;