import { Console } from 'console';
import React, { useState } from 'react';
interface XpoviNumberInput {
    value:string,
    maxLength: Number
    disabled: boolean
    onChangeCallback: (e: React.ChangeEvent<HTMLInputElement>) => void,

}
const XpoviNumberInput: React.FC<XpoviNumberInput> = ({
    value,
    disabled,
    maxLength,
    onChangeCallback,
    children }) => {
    const [digitsLength, setDigitsLength] = useState<number>(0);
    return (
        <label className="col-10 answer_label">
            <input
                className={"form-control"}
                type="number"
                defaultValue={value}
                disabled={disabled}
                onChange={(e) => {
                    setDigitsLength(Number(e.currentTarget.value.length))
                    return onChangeCallback(e)
                }}
                onKeyDown={(event) => {
                    if (digitsLength+1 > maxLength && event.code !="Backspace") {
                        event.preventDefault();
                    }
                }}

            />
            {children}
        </label>
    );
}

export default XpoviNumberInput;