import { Nav, NavLink } from "./MenuStyledComponent";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiLaptop } from 'react-icons/gi';
import { PiProjectorScreenChartBold } from 'react-icons/pi';
import { IoSchoolSharp } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';

const Menu = () => {

    return (
        <Nav>
            <NavLink href="#Home">
                <AiOutlineHome />
            </NavLink>

            <NavLink href="#AboutMe">
                <AiOutlineUser />
            </NavLink>

            <NavLink href="#Skills">
                <GiLaptop />
            </NavLink>

            <NavLink href="#Projects">
                <PiProjectorScreenChartBold />
            </NavLink>

            <NavLink href="#Education">
                <IoSchoolSharp />
            </NavLink>

            <NavLink href="#ContactMe">
                <AiOutlineMessage />
            </NavLink>
        </Nav>
    );
}

export default Menu;