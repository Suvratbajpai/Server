let transmissionLog = [];

function startTransmission() {
    const packet = document.querySelector('.sender .packet');
    const ack = document.querySelector('.sender .ack');
    const receiverPacket = document.querySelector('.receiver .packet');

    // Packet sending animation
    packet.style.animationName = 'sendPacket';
    packet.style.animationDuration = '2s';
    packet.style.animationTimingFunction = 'linear';
    packet.style.animationIterationCount = 'infinite';

    // Acknowledgment animation
    ack.style.display = 'block';
    ack.style.animationName = 'acknowledgePacket';
    ack.style.animationDuration = '2s';
    ack.style.animationTimingFunction = 'linear';
    ack.style.animationIterationCount = 'infinite';

    // Packet receiving animation
    setTimeout(() => {
        receiverPacket.style.animationName = 'receivePacket';
        receiverPacket.style.animationDuration = '2s';
        receiverPacket.style.animationTimingFunction = 'linear';
        receiverPacket.style.animationIterationCount = 'infinite';
    }, 1000);

    // Update transmission log
    const transmissionDetails = {
        type: 'Transmission',
        time: new Date().toLocaleTimeString(),
        packet: 'Packet Transferred',
        ack: 'Acknowledgment Received'
    };
    transmissionLog.push(transmissionDetails);

    // Update details
    updateDetails();
}

function stopTransmission() {
    const packet = document.querySelector('.sender .packet');
    const ack = document.querySelector('.sender .ack');
    const receiverPacket = document.querySelector('.receiver .packet');

    // Clear animations
    packet.style.animationName = '';
    ack.style.animationName = '';
    receiverPacket.style.animationName = '';

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
            <strong>${transmission.type}</strong>-<br>
            ${transmission.packet}<br>
            ${transmission.ack}<br><br>
        `;
        detailsElement.appendChild(logElement);
    });
}
