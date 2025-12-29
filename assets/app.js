// Minimal interactions: accessible menu toggle, secure chat addMessage pattern (placeholder)
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const expanded = sidebar.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      if (expanded) {
        // focus first nav item
        const first = sidebar.querySelector('.nav-item');
        if (first) first.focus();
      } else {
        menuToggle.focus();
      }
    });
  }

  // Demo: update sync time every minute
  const sync = document.getElementById('syncStatus');
  if (sync) {
    setInterval(() => {
      const now = new Date();
      const t = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      sync.textContent = `Sistema sincronizado — ${t}`;
    }, 60000);
  }

  // Secure message builder (example usage)
  function addMessage(content, isUser = false) {
    const chatBody = document.querySelector('.chat-body');
    if (!chatBody) return;
    const msg = document.createElement('div');
    msg.className = 'message ' + (isUser ? 'user' : 'bot');

    const header = document.createElement('div');
    header.className = 'message-header';
    const who = document.createElement('span');
    who.textContent = isUser ? 'Você' : 'StatGoal AI';
    const time = document.createElement('span');
    const now = new Date();
    time.textContent = now.toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'});
    header.appendChild(who);
    header.appendChild(time);

    const body = document.createElement('div');
    body.className = 'message-content';
    // Use textContent to prevent HTML injection
    body.textContent = content;

    msg.appendChild(header);
    msg.appendChild(body);
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Expose for console demo (optional)
  window.demoAddMessage = addMessage;
});
