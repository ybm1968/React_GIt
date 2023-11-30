import React from 'react'
import { Link } from 'react-router-dom'

const BoardRead = ({no, board}) => {
    return (
        <div>
            <h1>게시글 읽기</h1>
            <h3>번호 : {no}</h3>
            <hr />
            <table border={1}>
                <tr>
                    <td>번호</td>
                    <td>
                        <input type="text" value={board.no}  readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>등록일자</td>
                    <td>
                        <input type="text" value={board.regDate}  readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>
                        <input type="text" value={board.title}  readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td>
                        <input type="text" value={board.writer}  readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>
                        <textarea cols="40" rows="5" value={board.content}></textarea>
                    </td>
                </tr>
            </table>

            <Link to="/boards">목록</Link>
            <hr />
            <Link to={`/boards/update/${no}`}>수정</Link>
        </div>
    )
}

export default BoardRead
