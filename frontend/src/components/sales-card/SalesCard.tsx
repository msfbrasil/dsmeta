
import axios from "axios";
import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";

import NotificationButton from '../notification-button/NotificationButton';

import './styles.css';

function SalesCard() {

  const initialMinDate = new Date(new Date().setDate(new Date().getDate() - 365));
  const initialMaxDate = new Date();

  const [minDate, setMinDate] = useState(initialMinDate);
  const [maxDate, setMaxDate] = useState(initialMaxDate);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect( () => {
    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = maxDate.toISOString().slice(0, 10);
    axios.get( `${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}` )
      .then( response => {
        setSales( response.data.content );
      } )
  }, [minDate, maxDate] );

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-input-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-input-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-input-control-container">
        <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
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
            {sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td className="showLarge">#{sale.id}</td>
                  <td className="showMedium">{new Date(sale.date).toLocaleDateString()}</td>
                  <td>{sale.sellerName}</td>
                  <td className="showLarge">{sale.visited}</td>
                  <td className="showLarge">{sale.deals}</td>
                  <td>R$ {sale.amount.toFixed(2)}</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <NotificationButton/>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard;
