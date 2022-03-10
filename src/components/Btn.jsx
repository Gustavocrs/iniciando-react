import "./Btn.css";

export function Btn(props) {
  return (
    <button className="btnPadrao" onClick={props.onClick}>
      {props.text}
    </button>
  );
  
}

