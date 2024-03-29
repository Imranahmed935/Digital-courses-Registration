import PropsTypes from 'prop-types'
const Total = ({total}) => {
    return (
        <div>
            <div>
            <h1 className="ml-4 mt-2 font-bold text-xl">Total credit Hour {total}</h1>
            </div>
            <hr className='mt-6 border-b border-slate-600 font-bold'/>
        </div>
        
    );
};

Total.propTypes= {
    total: PropsTypes.number
}

export default Total;