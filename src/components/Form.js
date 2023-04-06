import React from "react";
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                +
            </div>
        </div>
    );
};
export default Form;

//value: input의 내용
//onCreate: 버튼이 클릭될 때 실행 될 함수
//onChange: input 변경시 실행될 함수
//onKeyPress: input에서 키를 입력 할 때 실행되는 함수. 