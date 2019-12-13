FROM node:12.13.1-alpine3.10

ENV PORT 3000
ENV STATUS_CODE 404
ENV CONTENT  "Not Found"

EXPOSE 3000

WORKDIR /usr/src/app
COPY    server.js /usr/src/app/server.js

CMD ["node", "server"]
