import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Memo = ({id, title, content}) => {
    const navigate = useNavigate();

    const updateMemo = () => {
        navigate(`/update/${id}`);
    }

    const deleteMemo = async () => {
        if (window.confirm('정말 메모를 삭제하시겠습니까?')) {
            await axios.delete(`http://localhost:8080/${id}`).then((res) => {
                alert("삭제되었습니다.");
                navigate('/');
            })
        }
    }

    const moveToList = () => {
        navigate('/');
    }

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <hr/>
                <p>{content}</p>
            </div>
            <div>
                <button onClick={updateMemo}>수정</button>
                <button onClick={deleteMemo}>삭제</button>
                <button onClick={moveToList}>목록</button>
            </div>
        </div>
    );
};

export default Memo;