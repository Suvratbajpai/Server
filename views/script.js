let transmissionLog = [];

function startTransmission() {
    const clientPacket = document.querySelector('.client .packet');
    const serverPacket = document.querySelector('.server .packet');
    const serverAck = document.querySelector('.server .ack');

    // Client packet animation
    clientPacket.style.bottom = '100px';

    // Server packet animation
    serverPacket.style.bottom = '100px';

    // Server acknowledgment animation
    setTimeout(() => {
        serverAck.style.display = 'block';
        serverAck.style.top = '100px';
    }, 1000);

    // Update transmission log
    const transmissionDetails = {
        type: 'Transmission',
        time: new Date().toLocaleTimeString(),
        packet: 'Packet Transferred from Client to Server',
        ack: 'Acknowledgment Received at Server'
    };
    transmissionLog.push(transmissionDetails);

    // Update details
    updateDetails();
}

function stopTransmission() {
    const serverPacket = document.querySelector('.server .packet');
    const serverAck = document.querySelector('.server .ack');

    // Clear animations
    serverPacket.style.bottom = '0';
    serverAck.style.display = 'none';
    serverAck.style.top = '-25px';

    // Clear transmission log
    transmissionLog = [];

    // Update details
    updateDetails();
}

function updateDetails() {
    const detailsElement = document.querySelector('.details');
    detailsElement.innerHTML = '';

    transmissionLog.forEach(transmission => {
        const logElement = document.createElement('div');
        logElement.innerHTML = `
            <strong>${transmission.type}</strong> - ${transmission.time}<br>
            ${transmission.packet}<br>
            ${transmission.ack}<br><br>
        `;
        detailsElement.appendChild(logElement);
    });
}
