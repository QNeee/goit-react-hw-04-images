import { useState } from "react";
import { Header, Button, Input, Form } from "./Searchbar.styled";
import PropTypes from "prop-types";
export const Searchbar = (props) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        props.onSubmit({ inputValue });
    }
    const onChange = (e) => {
        setInputValue(e.currentTarget.value);
    }
    return <Header><Form onSubmit={onSubmit}>
        <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue} onChange={onChange}
        />
        <Button type="submit"></Button>
    </Form></Header>
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};