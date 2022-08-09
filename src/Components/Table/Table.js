import React from "react";
import style from "./table.module.css";
const Table = () => {
  return (
    <div className={style.tableParent}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Page visit</th>
            <th colSpan="2"></th>
            <th>
              <button>See All</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Page Name</td>
            <td>Visitors</td>
            <td>Unique Users</td>
            <td> Bounce Rate</td>
          </tr>
          <tr>
            <td>/Argon/</td>
            <td>4.592</td>
            <td>319</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i>46.53
            </td>
          </tr>
          <tr>
            <td>/argon/index.html/</td>
            <td>4.645</td>
            <td>542</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i> 131
            </td>
          </tr>
          <tr>
            <td>/argon/charts.html/</td>
            <td>445.5</td>
            <td>153</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i> 458
            </td>
          </tr>
          <tr>
            <td>/argon/table.html/</td>
            <td>123.21</td>
            <td>512</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i> 456
            </td>
          </tr>
          <tr>
            <td>/argon/profile.html/</td>
            <td>123.5</td>
            <td>432</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i>542
            </td>
          </tr>
        </tbody>
      </table>

      <table className={style.table2}>
        <thead>
          <tr>
            <th>Social traffic</th>
            <th colSpan="2"></th>
            <th>
              <button>See All</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>referel</td>
            <td>Visitors</td>
            <td colSpan={2}></td>
            
          </tr>
          <tr>
            <td>Facebook</td>
            <td>4.592</td>
            <td>319</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i>46.53
            </td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>4.645</td>
            <td>542</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i> 131
            </td>
          </tr>
          <tr>
            <td>Google</td>
            <td>445.5</td>
            <td>153</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i> 458
            </td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>123.21</td>
            <td>512</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i> 456
            </td>
          </tr>
          <tr>
            <td>Twitter/</td>
            <td>123.5</td>
            <td>432</td>
            <td>
              <i className="fa-solid fa-arrow-up"></i>542
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
