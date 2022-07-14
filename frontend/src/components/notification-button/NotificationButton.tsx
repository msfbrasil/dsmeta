import notitication_icon from '../../assets/images/notification-icon.svg'

import './styles.css'

function NotificationButton() {
  return ( 
    <div className="dsmeta-red-btn">
      <img src={notitication_icon} alt="Notificar"/>
    </div>
  )
}
  
export default NotificationButton
