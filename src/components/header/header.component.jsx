import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crwns.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import {connect} from 'react-redux'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// import { ReactComponent as Logo }
// This is a new special syntax when importing SVG in React. 
// The ReactComponent import name is special and tells Create React App 
// that you want a React component that renders an SVG, rather than its filename. 


const Header = ({ hidden }) =>  (
    <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <CartIcon />
            </div>
            {hidden ? null : <CartDropDown />}
        </div>
   )
const mapStateToProps = createStructuredSelector({
    hidden:selectCartHidden
})

export default connect(mapStateToProps, null)(Header);