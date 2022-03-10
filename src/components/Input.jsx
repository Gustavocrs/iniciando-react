import "./Input.css";

export function Input(props) {
  return (
    <input
      className="inputPadrao"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      id={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
