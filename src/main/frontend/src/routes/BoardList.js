import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const BoardList = () => {
    const navigate = useNavigate();

    const url = 'http://localhost:8080';

    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(url);
                setContent(resp.data.content);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    const moveToWrite = () => {
        navigate('/write');
    }

    return (
        <div>
            <ul>
                {content.map((board) => (
                    <li key={board.id}>
                        <Link to={`/${board.id}`}>{board.title}</Link>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={moveToWrite}>글쓰기</button>
            </div>
        </div>
    );
};

export default BoardList;