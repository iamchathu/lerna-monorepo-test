import app from './app';

const server = app.listen(app.get('port'), app.get('ip'), (): void => {
  console.log(`listening on *:${app.get('port')}`);
  app.emit('SERVER_STARTED');
});

export default server;
