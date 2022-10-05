import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

const Prac2 = () => {
    const {name} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const keyWord = searchParams.get("name");
    const navigate = useNavigate();
    
    return (
        <div>
            <h5>학생의 이름은 <span style={{color:'green'}}>{name}</span>입니다.</h5>
            { keyWord != null && <h5>실제 이름은 <span style={{color: "red"}}>{keyWord}</span></h5>}
            <button onClick={() => navigate(-1)}>이전페이지로</button>
        </div>
    )
}

export default Prac2;