import React from "react";
import { Container } from "./Style"

interface ISelectInputProps{
    Options: {
        value: string | number;
        label: string | number;
        icon?: React.ReactNode;
    }[],
}

const SelectInput: React.FC<ISelectInputProps> = ({ Options }) => {
    return (
        <Container>
            <select>
                {
                    Options.map(option => (
                            <option value={option.value}>
                                {option.icon} 
                                {option.label}
                            </option>
                        )
                    )
                }
            </select>
        </Container>    
    )
}

export default SelectInput;
