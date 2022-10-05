import {Link} from 'react-router-dom';

function Prac () {
    return(
        <div>
            <Link to = '/'>
                <h2>ReactRouter 실습</h2>
            </Link>
            <nav>
                <ul>
                    <li><Link to='/student/sesac'>학생SeSAC</Link></li>
                    <li><Link to='/student/condingon'>코딩온</Link></li>
                    <li><Link to='/student/new?name=sesac&key=id#codingon'>searchParams</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Prac;