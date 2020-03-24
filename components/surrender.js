const styles = {
  output: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingBottom: "1.75rem"
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
  outputItem: {
    display: "flex",
    flex: "0 0 calc(43% - 0.65rem)",
    color: "#65e551",
    height: "17.5rem",
    padding: "1.25rem 0.875rem",
    border: "0.125rem solid rgba(101, 229, 81, 0.4)",
    borderRadius: "0.25rem",
    background: "-o-radial-gradient(#153817, #0a160d)",
    background: "radial-gradi, #0a160dent(#153817)",
    boxShadow: "inset 0 0 0.25rem 0 rgba(56, 254, 58, 0.4)"
  },

  row: {
    display: "flex"
  }
};
export default function Surrender({ surrender, item }) {
  return (
    <div style={styles.output}>
      <div style={styles.label}>
        <span>Возьмите свой товар</span>
      </div>
      <div style={styles.row}>
        <div style={styles.outputItem}>
          {surrender.ten > 0 ? "10 R:" + surrender.ten + "coin" : <></>}
        </div>

        <div style={styles.outputItem}>
          <span>
            {item.name}

            <br />

            {item.type}

            <br />

            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
}
