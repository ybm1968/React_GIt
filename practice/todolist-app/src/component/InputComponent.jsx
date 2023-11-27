import React from 'react'
import { useState } from 'react'

const InputComponent = () => {

    const [todo, setTodo] = useState();

 
    // 비동기로 전송하는 메소드
    const insert = () => {
        const url ='http://192.168.30.119:8080/todos'
        const data = { name : todo }
        const init = {
            method  : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body    : JSON.stringify(data)
        }
        
        fetch(url, init)
            .then(response => {
                // 서버 응답을 JSON 형식으로 파싱
                return response.json();
            })
            .then(data => {
                // 파싱된 데이터 출력
                console.log(data);
            })
            .catch(error => {
                // 오류 처리
                console.error('Request failed:', error);
            });
    }

    return (
        <div>
            <form action="" method='post'>
                <input type="text" placeholder='오늘 할일 입력' />
                <input type="javascript:;" onClick={insert} value='추가' />
                <button onClick={insert} />
            </form>
        </div>
    )
}

export default InputComponent