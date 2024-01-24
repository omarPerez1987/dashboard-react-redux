import React, { useState } from "react";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { CreateButton, SelectFooterStyled } from "../../../componentsStyle/general/ButtonStyled";
import { Link } from "react-router-dom";

const OrderTableBookings = ({ setStateStatus, setSelectFooter }) => {
  return (
    <OrderTableStyled>
      <div>
        <h4 onClick={() => setStateStatus("All")}>All Guest</h4>
        <h4 onClick={() => setStateStatus("Pending")}>Pending</h4>
        <h4 onClick={() => setStateStatus("In")}>Check in</h4>
        <h4 onClick={() => setStateStatus("Out")}>Check out</h4>
      </div>
      <div>
      <Link to={"/home/new-booking"}>
        <CreateButton>+ New Booking</CreateButton>
      </Link>
        <SelectFooterStyled onChange={(e) => setSelectFooter(e.target.value)}>
          <option disabled>Select</option>
          <option value="date">Booking date</option>
          <option value="entryDate">Entry date</option>
          <option value="outDate">Departure date</option>
          <option value="alpha">[ A - Z ]</option>
        </SelectFooterStyled>
      </div>
    </OrderTableStyled>
  );
};

export default OrderTableBookings;
