import React, { useContext } from "react";
import { useFormik } from "formik";
import { ObsContext } from "../Providers/ObservationRecordProvider";

const validate = (values) => {
  const errors = {};
  if (!values.place) {
    errors.place = "Required";
  } else if (values.place.length > 25) {
    errors.place = "Must be 25 characters or less";
  }

  if (!values.long) {
    errors.long = "Required";
  } else if (values.long.length > 5) {
    errors.long = "Must be 5 characters or less";
  }

  if (!values.lat) {
    errors.lat = "Required";
  } else if (values.lat.length > 5) {
    errors.lat = "Must be 5 characters or less";
  }

  if (!values.bird) {
    errors.bird = "Required";
  } else if (values.bird.length > 5) {
    errors.bird = "Must be 5 characters or less";
  }

  return errors;
};

const sampleAddressJson = {
  candidates: [
    {
      formatted_address: "140 George St, The Rocks NSW 2000, Australia",
      geometry: {
        location: { lat: -33.8599358, lng: 151.2090295 },
        viewport: {
          northeast: { lat: -33.85824377010728, lng: 151.2104386798927 },
          southwest: { lat: -33.86094342989272, lng: 151.2077390201073 },
        },
      },
      name: "Museum of Contemporary Art Australia",
      rating: 4.4,
    },
  ],
  status: "OK",
};

const RecordForm = (props) => {
  const msg = useContext(ObsContext);

  const formik = useFormik({
    initialValues: {
      place: "",
      long: "",
      lat: "",
      bird: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <p>{msg}</p>
      <h3>Record your observation</h3>
      <label htmlFor="place">Place / Address : </label>{" "}
      <div class="mb-3">
        <input
          id="place"
          name="place"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.place}
          aria-describedby="placeInput"
          placeholder="Enter place"
        />
        {formik.touched.place && formik.errors.place ? (
          <div>{formik.errors.place}</div>
        ) : null}
      </div>
      <label htmlFor="long">Longitude / Lattitude : </label>{" "}
      <div class="mb-3">
        <input
          id="long"
          name="long"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.long}
          aria-describedby="longitude"
          placeholder="Enter longitude"
        />
        {formik.touched.long && formik.errors.long ? (
          <div>{formik.errors.long}</div>
        ) : null}{" "}
        <input
          id="lat"
          name="lat"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lat}
          aria-describedby="lattitude"
          placeholder="Enter lattitude"
        />
        {formik.touched.lat && formik.errors.lat ? (
          <div>{formik.errors.lat}</div>
        ) : null}
      </div>
      <label htmlFor="bird">Bird / Species Name : </label>{" "}
      <div class="mb-3">
        <input
          id="bird"
          name="bird"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bird}
          aria-describedby="bird"
          placeholder="What is the bird you observed"
        />
        {formik.touched.bird && formik.errors.bird ? (
          <div>{formik.errors.bird}</div>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Record
      </button>
    </form>
  );
};

export default RecordForm;
