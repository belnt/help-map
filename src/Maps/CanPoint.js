import { UserStatus, getContactButtons } from '../Core/Point';
import { escapeHtml } from '../Core/Security';

function getPointBalloonContent(person, index) {
    const status = UserStatus[person.status]
    const style = {
        backgroundColor: status.bgcolor,
        color: status.color
      };

    return `
        <div>
            <div class="status-code">
            <span class="driver status status-${person.status} mb-1" style="background-color: ${style.backgroundColor}; color: ${style.color}">${status.name}</span>
            <span><strong>Код: ${person.code}</strong></span>
            </div>
            <div>
                <strong>Основной адрес:</strong> ${escapeHtml(person.address)}
            </div>
            <div>
                <strong>Контакт:</strong> ${escapeHtml(person.nickname)}
            </div>
            <div>
                <strong>Поможет:</strong> ${escapeHtml(person.help)}
            </div>
            <div>
                <strong>Авто:</strong> ${escapeHtml(person.is_auto)}
            </div>
            <div>
                <strong>Комментарий:</strong> ${escapeHtml(person.comments)}
            </div>
            <div>
                <strong>Отметка времени:</strong> ${escapeHtml(person.date)}
            </div>
            ${getContactButtons(person)}
        </div>`
}

export function getCanPointFeature(person, index) {
    // Generate a dynamic Id to make a map rerendered properly.
    const now = Date.now();
    const id = `${index}_${now}`;

    const nickname = escapeHtml(person.nickname);
    const status = UserStatus[person.status]

    return {
        type: 'Feature',
        id,
        geometry: {
            type: 'Point',
            coordinates: [person.lat, person.lon]
        },
        options: {
            preset: 'islands#heartIcon',
            iconColor: '#1890ff', //status.bgcolor
        },
        properties: {
            balloonContent: getPointBalloonContent(person, index),
            hintContent: `Помогатор (${nickname})`,
            clusterCaption: `Помогатор (${nickname})`,
        }
    };
}
