import CourseName from "../CourseName/CourseName";
import Credit from "../Credit/Credit";
import PropTypes from "prop-types"
import Total from "../Total/Total";

const Cart = ({courseNames, credit}) => {
    return (
        <div className="w-1/4 ml-10 p-4 rounded bg-slate-100 h-min">
            <Credit credit={credit}></Credit>
            <CourseName courseNames={courseNames}></CourseName>
            <Total></Total>
        </div>
    );
};

Cart.propTypes ={
    courseNames:PropTypes.object,
    credit:PropTypes.number
}

export default Cart;