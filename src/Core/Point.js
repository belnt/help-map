export const UserStatus = {
  actual: { name: "Актуально", bgcolor: "#f61c1c", color: 'white' },
  stillneed: { name: "Надо еще", bgcolor: "#f4cccc", color: 'black' },
  notyet: { name: "Пока не надо", bgcolor: "#f9cb9c", color: 'black' },
  nomore: { name: "Больше не надо", bgcolor: "#b6d7a8", color: 'white' },
  inprocess: { name: "Везут", bgcolor: "#ffff00", color: 'black' },
};

export function getContactButtons(point) {
  const coors = point.lat + "," + point.lon;
  let contact = null;
  let isContact = false;
  let isGeo = false;
  let telegram = '';
  if(point.contact.length > 0){
    if (point.contact[0] === "@") {
      telegram = point.contact;
      contact = `<a href="https://t.me/${telegram.slice(1)}" class="ant-btn ant-btn-primary ant-btn-sm"><span>Телеграм</span></a>`;;
    } else {
      contact = `<a href="tel:${point.contact}" class="ant-btn ant-btn-primary ant-btn-sm"><span>Позвонить</span></a>`;;
    }
  } 
  let geo = `<a href="https://yandex.ru/maps/?rtext=~${coors}&rtt=auto'" class="ant-btn ant-btn-sm" target="_blank"><span>Маршрут</span></a>`;
  

  switch (point.status) {
    case "actual":
      isContact = true;
      isGeo = true;
      break;
    case "stillneed":
      isContact = true;
      isGeo = true;
      break;
    case "notyet":
      isContact = false;
      isGeo = true;
      break;
    case "nomore":
      isContact = false;
      isGeo = false;
      break;
    case "inprocess":
      isContact = false;
      isGeo = false;
      break;

    default:
      isContact = true;
      isGeo = true;
      break;
  }

  if (!isContact || !contact) {
    contact = "";
  }
  if (!isGeo) {
    geo = "";
  }

  const buttons = `<div class="baloon-footer">
  ${contact}
  ${geo}
  </div>`;
  return buttons;
}
