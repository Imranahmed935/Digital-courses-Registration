import PropsTypes from "prop-types"
const TotalResult = ({totalResult}) => {
    return (
        <div>
            <h1 className="text-xl ml-4 font-bold">Total: {totalResult}</h1>
        </div>
    );
};

TotalResult.propTypes ={
    totalResult:PropsTypes.number
}
export default TotalResult;