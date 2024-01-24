import React, { useState } from "react";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { NewestButton } from "../../../componentsStyle/general/ButtonStyled";
import { IoIosArrowDown } from "react-icons/io";

const OrderTableContact = ({ setArchived, setNewest }) => {
  const [origin, setOrigin] = useState(true);

  return (
    <OrderTableStyled>
      <div>
        <h4 onClick={() => setArchived(false)}>All Contacts</h4>
        <h4 onClick={() => setArchived(true)}>Archived</h4>
      </div>
      <div>
        {origin ? (
          <NewestButton
            onClick={() => {
              setOrigin(false), setNewest(true);
            }}
          >
            Newest <IoIosArrowDown />
          </NewestButton>
        ) : (
          <NewestButton
            onClick={() => {
              setOrigin(true), setNewest(false);
            }}
          >
            Default <IoIosArrowDown />
          </NewestButton>
        )}
      </div>
    </OrderTableStyled>
  );
};

export default OrderTableContact;
