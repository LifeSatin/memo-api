import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Memo from "../components/Memo";

const BoardDetail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(`http://localhost:8080/${id}`);
                setBoard(resp.data);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <h2>loading...</h2>
            ) : (
                <Memo
                    id={board.id}
                    title={board.title}
                    content={board.content}
                />
            )}
        </div>
    );
};

export default BoardDetail;