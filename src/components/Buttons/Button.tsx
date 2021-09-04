import React from 'react';
interface ButtonType {
    type: "NEXT" | "PREVIOUS" | "SUBMIT",
    clickCallback: () => void
}
const icons = { "NEXT": " ⥤", "PREVIOUS": "⥢ ", "SUBMIT": "" }
const XpoviButton: React.FC<ButtonType> = ({ type, clickCallback }) => {
    return (
        <input
            type="button"
            className={`btn ${type}-btn `}
            onClick={() => clickCallback()}
            value={type == 'PREVIOUS' ? icons[type] + type : type + icons[type]} />
    );
}

export default XpoviButton;
