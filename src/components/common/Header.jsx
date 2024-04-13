import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <div className='header'>
            <span>Blog Example</span>
            <div>
                <Link to='/write'>
                    <button>새글 작성</button>
                </Link>
                <Link to='/login'>
                    <button>로그인</button>
                </Link>
            </div>

        </div>
    );
};

export default Header;
