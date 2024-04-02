import PropsTypes from 'prop-types';

const Course = ({ course, handleCourseName}) => {
    const { cover, title, credit_hours, price, short_description } = course;
    return (
        <div className='space-y-4'>
            <img className='w-full' src={cover} alt="" />
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='text-xl'>{short_description}</p>
            <div className='flex justify-between'>
                <div>
                    <p className='text-xl'>$ price:{price}</p>
                </div>
                <div>
                    <h3 className='text-xl'>credit: {credit_hours}</h3>
                </div>
            </div>
            <button
                onClick={() => handleCourseName(course)}
                className='btn bg-green-500 w-full p-2
                             rounded text-xl font-bold'
            >select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropsTypes.object,
    handleCourseName: PropsTypes.func
}

export default Course;
