
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from '../notification-button/NotificationButton'

import './styles.css'

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-input-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-input-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-input-control-container">
        <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-input-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="showLarge">ID</th>
              <th className="showMedium">Data</th>
              <th>Vendedor</th>
              <th className="showLarge">Visitas</th>
              <th className="showLarge">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="showLarge">#341</td>
              <td className="showMedium">08/07/2022</td>
              <td>Anakin</td>
              <td className="showLarge">15</td>
              <td className="showLarge">11</td>
              <td>R$ 55300,00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton/>
                </div>
              </td>
            </tr>
            <tr>
              <td className="showLarge">#341</td>
              <td className="showMedium">08/07/2022</td>
              <td>Anakin</td>
              <td className="showLarge">15</td>
              <td className="showLarge">11</td>
              <td>R$ 55300,00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton/>
                </div>
              </td>
            </tr>
            <tr>
              <td className="showLarge">#341</td>
              <td className="showMedium">08/07/2022</td>
              <td>Anakin</td>
              <td className="showLarge">15</td>
              <td className="showLarge">11</td>
              <td>R$ 55300,00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard
