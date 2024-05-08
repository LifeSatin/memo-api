import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const BoardWrite = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: 'ddd',
        content: 'sss',
    });

    const { title, content } = board;
    console.log(board);

    const onChange = (event) => {
        const {value, name} = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const saveBoard = async () => {
        await axios.post(`http://localhost:8080/`, board).then(function (response) {
            alert('등록되었습니다.');
            navigate(`/${response.data.id}`);
        });
    };

    const backToList = () => {
        navigate('/');
    };

    return (
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange} />
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea
                    name="content"
                    cols="30"
                    rows="10"
                    value={content}
                    onChange={onChange}
                ></textarea>
            </div>
            <br />
            <div>
                <button onClick={saveBoard}>저장</button>
                <button onClick={backToList}>취소</button>
            </div>
        </div>
    );
};

export default BoardWrite;