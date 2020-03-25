import { useState } from "react";

const styles = {
  root: {
    flexDirection: "column"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3.5rem"
  },
  label: {
    display: "flex",
    alignItems: "center",
    height: "5.25rem",
    padding: "0 1rem 0 1rem",
    color: "#65e551",
    border: "0.125rem solid rgba(101, 229, 81, 0.4)",
    borderRadius: "0.25rem",
    backgroundImage: "-o-radial-gradient(#153817, #0a160d)",
    backgroundImage: "radial-gradient(#153817, #0a160d)",
    boxShadow: "inset 0 0 0.25rem 0 rgba(56, 254, 58, 0.4)",
    verticalAlign: "middle",
    lineHeight: "1.5rem",
    marginBottom: "1rem"
  },
  finput: {
    height: "3.75rem",
    padding: "0 1rem 0 2rem",
    transition: "border 400ms ease-in",
    color: "#63e0ed",
    border: "0.125rem solid rgba(99, 224, 237, 0.4)",
    borderRadius: "0.25rem",
    background: "-o-radial-gradient(#17713c, #125f32)",
    background: "radial-gradient(#17713c, #125f32)",
    verticalAlign: "middle",
    textShadow: "0 0 0.25rem rgba(99, 224, 237, 0.3)"
  },
  desc: {
    width: "90%",
    color: "#ebe8dd",
    lineHeight: "1.5rem"
  }
};
export default function ControlPanel({ setDeposit, setSelected, deposit, items, purchased }) {
  const [dep, setDep] = useState("");
  const [sel, setSel] = useState("");
  const [message, setMessage] = useState("Insert banknotes...");
  const [messageTwo, setMessageTwo] = useState(".");

  const handleSubmitDeposit = event => {
    if (dep == 50 || dep == 100 || dep == 200 || dep == 500 || dep == 1000) {
      setDeposit(dep);
      setMessage("Inserted money:" + dep + "R");
      setMessageTwo("Choose product...");
    } else {
      setMessage("Unknown banknote!");
    }
    event.preventDefault();
  };

  const handleSubmitSelected = event => {
    event.preventDefault();
    if (sel < 8 && sel > 0 && deposit>=items[sel - 1].price) {
      purchased(sel);
      setMessageTwo("Success!");}
      else{
      if (sel < 8 && sel > 0)
      {setMessageTwo("Не хватает денег!")}
   else{
      setMessageTwo("Enter the correct number!");
    }}
  };

  const handleChangeDep = event => {
    setDep(event.target.value);
  };

  const handleChangeSel = event => {
    setSel(event.target.value);
  };

  return (
    <div style={styles.root}>
      <form style={styles.form} onSubmit={handleSubmitDeposit}>
        <label style={styles.label}>{message}</label>
        <br></br>
        <input
          style={styles.finput}
          type="text"
          value={dep}
          onChange={handleChangeDep}
        />

        <span style={styles.desc}>
          {" "}
          Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives
          change in 1, 2, 5 and 10 R coins.
        </span>
      </form>

      <form style={styles.form} onSubmit={handleSubmitSelected}>
        <label style={styles.label}>{messageTwo}</label>
        <br />
        <input
          disabled={deposit>0?"":"disabled"}
          style={styles.finput}
          type="text"
          value={sel}
          onChange={handleChangeSel}
        />
      </form>
    </div>
  );
}
