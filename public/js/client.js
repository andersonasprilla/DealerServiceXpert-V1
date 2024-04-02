async function createClientHandler(event) {
    event.preventDefault();

    const name = document.getElementById('name-signup').value.trim()
    const phoneNumber = document.getElementById('phoneNumber-signup').value.trim()
    const repairOrderNumber = document.getElementById('repairOrderNumber-signup').value.trim()
    const carModel = document.getElementById('carModel-signup').value.trim()
    const serviceRequested = document.getElementById('serviceRequested-signup').value.trim()
    const waitingForService = document.getElementById('waitingForService-signup').checked
    console.log(waitingForService)

    if(name && phoneNumber && repairOrderNumber && carModel && serviceRequested ) {
    
        const response = await fetch('/api/clients', {
            method: 'post',
            body: JSON.stringify({
                name,
                phoneNumber,
                repairOrderNumber,
                carModel,
                serviceRequested,
                waitingForService
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }

    
}

document.querySelector('#clientForm').addEventListener('submit', createClientHandler)