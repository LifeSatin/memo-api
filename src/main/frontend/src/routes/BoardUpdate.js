import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BoardUpdate = () => {
    //선언부
    const navigate = useNavigate();
    const {id} = useParams();
    const [board, setBoard] = useState({
        title: '',
        content: '',
    });

    const { title, content } = board;

    const onChange = (event) => {
        const {value, name} = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    useEffect(() => {
        const getMemo = async () => {
            const resp = await (await axios.get(`http://localhost:8080/${id}`)).data;
            setBoard(resp);
        };
        getMemo();
    }, []);

    //메모 수정 
    const updateMemo = async () => {
        await axios.patch(`http://localhost:8080/${id}`, board).then((res) => {
            alert('수정되었습니다.');
            navigate(`/${id}`);
        });
    };

    //돌아가기
    const backToDetail = () => {
        navigate(`/${id}`);
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
                <button onClick={updateMemo}>수정</button>
                <button onClick={backToDetail}>취소</button>
            </div>
        </div>
    )
}

export default BoardUpdate;