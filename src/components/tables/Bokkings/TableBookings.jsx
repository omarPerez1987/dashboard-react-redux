import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { ButtonVariantStyled } from "../../../componentsStyle/general/ButtonStyled";
import ModalNotesBookings from "../../modal/ModalNotesBookings";

const TableBookings = ({ bookings }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [infoNotes, setInfoNotes] = useState(false);

  return (
    <>
      <TableStyle>
        <TheadStyled>
          <tr>
            <th>Guest</th>
            <th>Order Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Special Request</th>
            <th>Room Type</th>
            <th>Status</th>
          </tr>
        </TheadStyled>
        <tbody>
          {bookings &&
            bookings.map((data) => (
              <TrbodyStyled key={data.id}>
                <TdbodyNameStyled>
                  <img src={data.photo} alt="" />
                  <div>
                    <span>{data.id}</span>
                    <p>{data.name}</p>
                  </div>
                </TdbodyNameStyled>
                <TdbodyStyled>
                  {data.orderDate} {data.checkinTime}
                </TdbodyStyled>
                <TdbodyStyled>
                  <p>{data.checkin}</p> <span>{data.checkinTime}</span>
                </TdbodyStyled>
                <TdbodyStyled>
                  <p>{data.checkout}</p> <span>{data.checkoutTime}</span>
                </TdbodyStyled>
                <TdbodyStyled>
                  {data.notes ? (
                    <ButtonVariantStyled
                      type="view-active"
                      onClick={() => {
                        setOpenModal(true);
                        setInfoNotes(data.notes);
                      }}
                    >
                      View Notes
                    </ButtonVariantStyled>
                  ) : (
                    <ButtonVariantStyled type="view-inactive">
                      View Notes
                    </ButtonVariantStyled>
                  )}
                </TdbodyStyled>
                <TdbodyStyled>
                  <p>{data.room}</p>
                </TdbodyStyled>
                <TdbodyStyled>
                  {data.check === "in" && (
                    <ButtonVariantStyled type="in">
                      Check in
                    </ButtonVariantStyled>
                  )}
                  {data.check === "out" && (
                    <ButtonVariantStyled type="out">
                      Check out
                    </ButtonVariantStyled>
                  )}
                  {data.check === "pending" && (
                    <ButtonVariantStyled type="pending">
                      In Progress
                    </ButtonVariantStyled>
                  )}
                </TdbodyStyled>
                <TdbodyStyled>
                  <PiDotsThreeVerticalBold
                    onClick={() => {
                      navigate(`/home/bookings-details/${data.idRoom}`);
                    }}
                  />
                </TdbodyStyled>
              </TrbodyStyled>
            ))}
        </tbody>
      </TableStyle>
      {openModal && (
        <ModalNotesBookings notes={infoNotes} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default TableBookings;
