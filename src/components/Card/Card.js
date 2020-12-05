import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import "./style.scss";
export default function Card(props) {
  const { data } = props;
  return (
    <div className="card-custom">
      <div className="content">
        <div className="content__avatar">
          {data.avatar && <img src={data.avatar} alt="avatar" />}
        </div>
        <div className="content__info">
          <div className="content__info-name">{data.display_name}</div>
          <div className="content__info-rating">
            <StarRatings
              rating={data.rating}
              starRatedColor="#e3b768"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="3px"
              name="rating"
            />

            <div className="num-of-patient">30 bệnh nhân</div>
          </div>
          <div className="content__info-specialist">
            {data.specialty[0].name}
          </div>
          <div className="content__info-clinic-name">{data.clinic_name}</div>
          <div className="content__info-clinic-address">
            {data.clinic_address}
          </div>
        </div>
      </div>
    </div>
  );
}
