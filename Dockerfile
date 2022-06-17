FROM httpd:2.4
VOLUME /home/admin/micrositios /usr/local/apache2/htdocs/
LABEL traefik.http.routers.testweb.rule="Host(`testweb.sub.omnitracs.online`)"
LABEL traefik.http.routers.testweb.tls.certresolver="myresolver"
LABEL traefik.http.services.testweb.loadbalancer.server.port="80"
