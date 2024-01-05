import "./TablePageMain.scss";
import Slider from "../Slider/Slider";
import Table from "../Table/Table";

export default function TablePageMain() {
  return (
    <div>
      <Slider />
      <h1>Таблица изучаемых слов</h1>
      <Table />
    </div>
  );
}
