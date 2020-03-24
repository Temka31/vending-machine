import Card from "./card";
const styles = {
  showcase_body: {
    position: "relative",
    padding: "2rem 1.25rem",
    border: "0.125rem solid #0e4e0f",
    borderRadius: "0.25rem",
    background: "-o-radial-gradient(#153817, #0a160d)",
    background: "radial-gradient(#153817, #0a160d)",
    boxShadow: "inset 0 0 0.25rem 0 rgba(56, 254, 58, 0.4)"
  },
  product_list: {
    display: "flex",
    flexWrap: "wrap",
    aligContent: "streth",
    paddingLeft: 0,
    marginTop: 0,
    marginRight: "-0.875rem",
    marginBottom: 0
  }
};
export default function ShowCace({ items, deposit }) {
  const isEnabled = item => {
    return item.price <= deposit;
  };

  return (
    <div style={styles.showcase_body}>
      <div style={styles.product_list}>
        {items.map(item => (
          <Card
            key={item.name}
            item={item}
            number={items.indexOf(item) + 1}
            enabled={isEnabled(item)}
          />
        ))}
      </div>
    </div>
  );
}
