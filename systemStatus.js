function updateSystemStatus(status) {
    try {
        const statusElement = document.getElementById('system-status');
        if (statusElement) {
            statusElement.textContent = status;
            statusElement.className = `status-${status.toLowerCase()}`;
        }
    } catch (error) {
        console.error('Errore nell\'aggiornamento dello stato del sistema:', error);
    }
}