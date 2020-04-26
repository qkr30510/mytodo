import React from "react";
import './css/TodoWrap.scss';

const TodoWrap = ({ children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};


export default TodoWrap;