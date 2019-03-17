import React from "react";
import { FormInput, FormCurrency } from "./FormFields";

export function SectionList(props) {
    return (
        <div>
            {props.sections.map((sectionItem, index) => (
                <div key={index}>
                    <div className="bg-light text-success border-bottom pt-1 pb-1 pl-1">
                        {sectionItem.header}
                    </div>
                    <InputList
                        inputs={sectionItem.items}
                        columns={sectionItem.columns}
                    />
                </div>
            ))}
        </div>
    );
}

function InputList(props) {
    //create sublist of items, defined columns per row
    let items = [];
    const columnSize = Math.ceil(12 / props.columns);
    for (let i = 0; i < props.inputs.length; i += props.columns) {
        let subItems = [];
        const max = Math.min(i + props.columns, props.inputs.length);
        for (let j = i; j < max; j++) {
            // will do it really simple here, ok? 2 types supported only!!!
            subItems.push(
                props.inputs[j].type === "input" ? (
                    <FormInput
                        key={j}
                        attributes={props.inputs[j]}
                        columnSize={columnSize}
                    />
                ) : (
                    <FormCurrency
                        key={j}
                        attributes={props.inputs[j]}
                        columnSize={columnSize}
                    />
                )
            );
        }
        items.push(subItems);
    }

    // now will display in rows preprocessed fields from above
    return (
        <div className="card-body">
            {items.map((inputItem, index) => (
                <div key={index} className="form-row">
                    {inputItem}
                </div>
            ))}
        </div>
    );
}
