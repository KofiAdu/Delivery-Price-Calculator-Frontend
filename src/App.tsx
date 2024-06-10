import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { calculateDeliveryFee } from "./CalculateDeliveryFee";

function App() {
  const [cartValue, setCartValue] = useState<string>("");
  const [deliveryDistance, setDeliveryDistance] = useState<string>("");
  const [numberOfItems, setNumberOfItems] = useState<string>("");
  const [deliveryDateTime, setDeliveryDateTime] = useState<string>("");
  const [deliveryFee, setDeliveryFee] = useState<number>();

  const handleCalculateClick = () => {
    const parsedCartValue = parseFloat(cartValue);
    const parsedDeliveryDistance = parseFloat(deliveryDistance);
    const parsedNumberOfItems = parseInt(numberOfItems, 10);
    const parsedDeliveryDateTime = new Date(deliveryDateTime);

    if (
      isNaN(parsedCartValue) ||
      isNaN(parsedDeliveryDistance) ||
      isNaN(parsedNumberOfItems) ||
      isNaN(parsedDeliveryDateTime.getTime())
    ) {
      return;
    }

    const getDeliveryFee = calculateDeliveryFee(
      parsedCartValue,
      parsedDeliveryDistance,
      parsedNumberOfItems,
      parsedDeliveryDateTime
    );

    setDeliveryFee(getDeliveryFee);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #2196F3",
        borderRadius: "10px",
        backgroundColor: "#E3F2FD",
        width: "350px",
        padding: "2%",
      }}
    >
      <Typography
        variant="h6"
        style={{
          width: "100%",
          borderBottom: "2px solid #2196F3",
          marginBottom: "1em",
          textAlign: "center",
          padding: "0.5em 0",
          color: "#2196F3",
        }}
      >
        Delivery Fee Calculator
      </Typography>
      <TextField
        data-test-id="cartValue"
        label="Cart Value (€)"
        type="number"
        size="small"
        value={cartValue}
        onChange={(e) => setCartValue(e.target.value)}
        style={{ marginBottom: "1em", width: "80%" }}
      />
      <TextField
        data-test-id="deliveryDistance"
        label="Delivery Distance (m)"
        value={deliveryDistance}
        onChange={(e) => setDeliveryDistance(e.target.value)}
        size="small"
        type="number"
        style={{ marginBottom: "1em", width: "80%" }}
      />
      <TextField
        data-test-id="numberOfItems"
        label="Number of Items"
        value={numberOfItems}
        onChange={(e) => setNumberOfItems(e.target.value)}
        size="small"
        type="number"
        style={{ marginBottom: "1em", width: "80%" }}
      />
      <TextField
        data-test-id="orderTime"
        value={deliveryDateTime}
        onChange={(e) => setDeliveryDateTime(e.target.value)}
        size="small"
        type="datetime-local"
        style={{ marginBottom: "1em", width: "80%" }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "1em", width: "80%" }}
        onClick={handleCalculateClick}
      >
        Calculate Delivery Price
      </Button>
      {deliveryFee && (
        <div style={{ marginBottom: "1em", textAlign: "center" }}>
          <Typography
            id="fee"
            variant="body1"
            style={{ fontSize: "1.2em", margin: 0 }}
          >
            Delivery Price:
            <strong style={{ marginLeft: "0.5em", color: "#2196F3" }}>
              {deliveryFee.toFixed(2)}€
            </strong>
          </Typography>
        </div>
      )}
    </Card>
  );
}

export default App;
