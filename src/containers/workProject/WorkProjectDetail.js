/* eslint-disable react/prop-types */
import "./WorkProjectDetail.css";
import { useParams } from "react-router-dom";

export default function WorkProjectDetail() {
  let { id } = useParams();
  return (
    <div id="projectDetail">
      <h2>WPD</h2>
      <h3>ID: {id}</h3>
    </div>
  );
}
