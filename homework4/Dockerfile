FROM adoptopenjdk/openjdk15:alpine
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY target/*jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]