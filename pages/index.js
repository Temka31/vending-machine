import { useState } from "react";
import ShowCase from "../components/showcase";
import ControlPanel from "../components/controlpanel";
import Card from "../components/card";
import Surrender from "../components/surrender"

const styles = {
  page: {
  display: "-webkit-box",
  display: "-ms-flexbox",
  display: "flex",
  height: "100vh",
  fontSize: "1.125rem",
  },
  page_showcase: {
  flex: "1 1 auto",
  padding: "1.75rem",
  backgroundColor: "#141a0d",
  },
  panel: {
    flex: "0 0 22.5rem",
    padding: "1.75rem",
    backgroundColor: "#1a1f15",
    overflowY: "scroll",
  }
};
const surrender = { ten: 0, five: 0, two: 0, one: 0 };
export default function Index() {
  const items = [
    { name: "Cola", type: "Cold drink", price: 130 },
    { name: "Evian", type: "Water", price: 90},
    { name: "Durex", type: "Condoms", price: 600},
    { name: "Snickers", type: "Choco bar", price: 105},
    { name: "Wagon Wheels", type: "Choco cookies", price: 165},
    { name: "WTF, Alice?", type: "I don't know", price: 200},
    { name: "Fanta", type: "Cold drink", price: 130}
  ];

  const [deposit, setDeposit] = useState("");
  const [purchasedItem, setpurchasedItem] = useState("");

  

  const purchased = (selected) => {
    if (items[selected - 1].price<=deposit) {
      setpurchasedItem(items[selected - 1]);
      surrender.ten = ~~((deposit - items[selected - 1].price) / 10);
      surrender.five = ~~(((deposit - items[selected - 1].price) % 10) / 5);
      surrender.two = ~~((((deposit - items[selected - 1].price) % 10) % 5) / 2);
      surrender.one = ~~(
        ((((deposit - items[selected - 1].price) % 10) % 5) % 2) /
        1
      );
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.page_showcase}>
      <ShowCase  items={items} deposit={deposit} />
      </div>
      <div style={styles.panel}>
        <ControlPanel
          setDeposit={setDeposit}
          deposit={deposit}
          purchased={purchased}
        />
        
        <Surrender surrender={surrender} item={purchasedItem}/>
        
      </div>
    </div>
  );
}
