import { useMemo } from "react";

const makeStyles = enabled => ({
  product_list_item: {
    flex: "0 0 calc(33% - 0.625rem)",
    marginRight: "0.3125rem",
    marginBottom: "2rem",
    marginLeft: "0.3125rem"
  },
  product: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    padding: "0.625rem 0.5rem 0.375rem 0.5rem",
    transition: "color 1000ms ease-in, text-shadow 1200ms ease-in",
    color: "#38fe3a",
    borderRadius: "0.125rem",
    backgroundColor: "rgba(34, 102, 33, 0.4)"
  },
  name: {
    marginBottom: "0.5rem",
    fontSize: "1.25rem",
    lineHeight: "1.625rem"
  },

  desc: {
    marginBottom: "0.875rem",
    lineHeight: "1.5rem"
  },

  price: {
    marginTop: "auto",
    color: enabled ? "#63e0ed" : "#38fe3a"
  },
  number: {
    position: "absolute",
    right: "0.375rem",
    bottom: "0.125rem",
    fontSize: "1.75rem",
    color: enabled ? "#63e0ed" : "#38fe3a"
  }
});
export default function Card({ item, enabled, number }) {
  const styles = useMemo(() => makeStyles(enabled), [enabled]);

  return (
    <div style={styles.product_list_item}>
      <div style={styles.product}>
        <span style={styles.name}>{item.name}</span>
        <span style={styles.desc}>{item.type}</span>
        <span style={styles.price}>{item.price}</span>
        <span style={styles.number}>{number}</span>
      </div>
    </div>
  );
}
