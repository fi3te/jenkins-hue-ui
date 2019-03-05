# A new frontend for the original JenkinsHue based on the CoreUI Free Angular 2+ Admin Template

🚧 UNDER DEVELOPMENT 🚧

![screenshot1](https://github.com/fi3te/jenkins-hue-ui/blob/jenkins-hue-ui-development/doc/screenshot1.png)

1) docker-compose.yml with an in-memory database
```
version: '3'
services:
  jh-backend:
    restart: always
    image: fi3te/jenkins-hue
    container_name: jh-backend
    environment:
     - "TZ=Europe/Berlin"
     - jenkins.url=TODO
     - jenkins.userName=TODO
     - jenkins.password=TODO
     - admins=admin1
   # OPTIONAL
   # - ldap.server.domain=
   # - ldap.server.url= e.g. ldaps://xxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxx.de
   # - ldap.server.userSearchFilter= e.g. (&(xxxxxxxxxxxxxxxxxxxxx={0})(objectclass=user))
   # - ldap.server.userSearchBase=
   # - ldap.server.groupSearchBase=
   # - ldap.server.userDn= e.g. CN=xxxxxxxxxxxxxxxxxxxxx,OU=xxxxxxxxxxxxxxxxxxxxx,DC=xxxxxxxxxxxxxxxxxxxxx
   # - ldap.server.userName=
   # - ldap.server.password=
   # - trust-store= e.g. filename.ending
   # - trust-store-password=
    expose:
     - "8484"
    networks:
     - app-network
  jh-frontend:
    restart: always
    image: fi3te/jenkins-hue-ui
    container_name: jh-frontend
    expose:
     - "80"
    ports:
     - "80:80"
    depends_on:
      - jh-backend
    networks:
     - app-network
networks:
  app-network:
    driver: bridge
```

2) docker-compose.yml with a PostgreSQL database
```
version: '3'
services:
  postgres:
    restart: always
    image: postgres:10
    container_name: jh-postgres
    environment:
      POSTGRES_PASSWORD: postgres-password-example
    volumes:
     - /var/lib/postgresql/data
    networks:
     - app-network
  jh-backend:
    restart: always
    image: fi3te/jenkins-hue
    container_name: jh-backend
    environment:
     - "TZ=Europe/Berlin"
     - spring.profiles.active=postgre,live
     - spring.datasource.password=postgres-password-example
     - jenkins.url=TODO
     - jenkins.userName=TODO
     - jenkins.password=TODO
     - admins=admin1
   # OPTIONAL
   # - ldap.server.domain=
   # - ldap.server.url= e.g. ldaps://xxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxx.de
   # - ldap.server.userSearchFilter= e.g. (&(xxxxxxxxxxxxxxxxxxxxx={0})(objectclass=user))
   # - ldap.server.userSearchBase=
   # - ldap.server.groupSearchBase=
   # - ldap.server.userDn= e.g. CN=xxxxxxxxxxxxxxxxxxxxx,OU=xxxxxxxxxxxxxxxxxxxxx,DC=xxxxxxxxxxxxxxxxxxxxx
   # - ldap.server.userName=
   # - ldap.server.password=
   # - trust-store= e.g. filename.ending
   # - trust-store-password=
    expose:
     - "8484"
    depends_on:
     - postgres
    networks:
     - app-network
  jh-frontend:
    restart: always
    image: fi3te/jenkins-hue-ui
    container_name: jh-frontend
    expose:
     - "80"
    ports:
     - "80:80"
    depends_on:
      - jh-backend
    networks:
     - app-network
networks:
  app-network:
    driver: bridge
```
