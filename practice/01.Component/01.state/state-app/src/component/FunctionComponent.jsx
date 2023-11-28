import React, { useState } from 'react'

const FunctionComponent = () => {

    // useState 사용하여, 상태 정의
    const [name, setName] = useState('Aloha');

    // 버튼 클릭 시
    const handleClick = (newName) => {
        console.log(`Click ${newName}`);

        // name 상태 업데이트
        setName(newName)
    } 

    return (
        <div>
            <h1>함수형 컴포넌트</h1>
            <h2>Hello I'm {name}</h2>
            <button onClick={() => handleClick('Aloha') }>Aloha</button>
            <button onClick={() => handleClick('Joeun') }>Joeun</button>
        </div>
    )
}

export default FunctionComponent

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