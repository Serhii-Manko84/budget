import React, { useState } from "react";
import PropTypes from "prop-types";

import { Wrapper, Input, Row, Button, Comment } from "./styles";

const Form = (props) => {
  const [form, setForm] = useState({
    value: "",
    date: new Date().toISOString().substring(0, 10),
    comment: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    props.onChange(form);
    setForm({ ...form, value: "", comment: "" });
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Row>
          <Input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
          />

          <Input
            value={form.value}
            name="value"
            type="number"
            placeholder="Summa"
            onChange={onChange}
          />
        </Row>
        <Row>
          <Button>Save</Button>
          <Comment name="comment" value={form.comment} onChange={onChange} />
        </Row>
      </form>
    </Wrapper>
  );
};

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
