import PropsTypes from 'prop-types'
const Name = ({name}) => {
    return (
        <div>
            <h4 className='text-xl ml-4'>{name.title}</h4>
        </div>
    );
};

Name.propTypes= {
    name: PropsTypes.object
}
export default Name;