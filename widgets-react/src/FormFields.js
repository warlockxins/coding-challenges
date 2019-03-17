import React from "react";

export function FormInput(props) {
    const { label, value, required } = props.attributes;
    return (
        <div className={`form-group col-md-${props.columnSize}`}>
            <label htmlFor={label}>{label}</label>
            <input
                className="form-control"
                id={label}
                value={value}
                required={required}
                readOnly
            />
        </div>
    );
}

export function FormCurrency(props) {
    const { label, value, symbol } = props.attributes;
    return (
        <div className={`form-group col-md-${props.columnSize}`}>
            <label htmlFor="currency">{label}</label>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">{symbol}</span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    id="currency"
                    value={value}
                    readOnly
                />
            </div>
        </div>
    );
}
