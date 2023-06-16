import s from "./style.module.css";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <Search size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={s.input}
        type="text"
        value={value}
        placeholder={"Search for favorite TV show"}
      />
    </div>
  );
}
