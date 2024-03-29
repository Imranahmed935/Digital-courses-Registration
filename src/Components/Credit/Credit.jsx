import PropTypes from "prop-types"
const Credit = ({credit}) => {
    return (
        <div>
            <h1 className="text-xl mb-4 ml-4 text-blue-500 font-bold">
             Credit Hour Reaming {credit} hr
            </h1>
            <hr className='mt-6 border-b border-slate-600 font-bold'/>
        </div>
    );
};

Credit.propTypes ={
    credit:PropTypes.number
}

export default Credit;