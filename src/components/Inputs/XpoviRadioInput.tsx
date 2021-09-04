import React from 'react';
interface XpoviRadioInput {
    value: string,
    isSelected: boolean,
    onChangeCallback: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean

}
const XpoviRadioInput: React.FC<XpoviRadioInput> = ({
    value,
    isSelected,
    onChangeCallback,
    disabled,
    children }) => {
    return (
        <label className="col-10 answer_label">
            <input
                className={"form-check-input"}
                type="radio"
                defaultValue={value}
                checked={isSelected}
                onChange={(e) => onChangeCallback(e)}
                disabled={disabled}
            />
            {children}
        </label>
    );
}

export default XpoviRadioInput;
