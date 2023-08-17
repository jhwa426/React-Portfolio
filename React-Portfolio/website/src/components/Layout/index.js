import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>
                    &lt;body&gt;
                    <Outlet />
                    <span className='tas bottom-tags'>
                        &lt;body&gt;
                        <br />
                        <span className='bottom-tags-html'>
                            &lt;/html&gt;
                        </span>
                    </span>
                </span>

            </div>
        </div>
    );
}

export default Layout;