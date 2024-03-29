import CourseName from "../CourseName/CourseName";
import Credit from "../Credit/Credit";
import PropTypes from "prop-types"

const Cart = ({courseNames}) => {
    return (
        <div className="w-1/4 ml-10 p-4 rounded bg-slate-100 h-min">
            <Credit></Credit>
            <CourseName courseNames={courseNames}></CourseName>
        </div>
    );
};

Cart.propTypes ={
    courseNames:PropTypes.object
}

export default Cart;