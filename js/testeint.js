// Carregue a biblioteca de autenticação do Google
gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: 'SUA_API_KEY',
      clientId: 'SEU_CLIENT_ID',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      scope: 'https://www.googleapis.com/auth/calendar.readonly',
    });
  
    gapi.client.load('calendar', 'v3', () => {
      gapi.auth2.getAuthInstance().signIn().then(() => {
        const request = gapi.client.calendar.events.list({
          calendarId: 'primary',
          timeMin: (new Date()).toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime',
        });
  
        request.execute((response) => {
          const events = response.items;
          if (events.length > 0) {
            // Processar os eventos
          } else {
            console.log('Nenhum evento encontrado.');
          }
        });
      });
    });
  });
  