FROM ianwalter/puppeteer:latest
RUN apt update -y && apt-get install -y software-properties-common && \
    apt-add-repository 'deb http://security.debian.org/debian-security stretch/updates main' && apt update -y && \
    apt-get install -y openjdk-8-jdk-headless && \
    export JAVA_HOME && \
    apt-get clean

WORKDIR /app
ADD . /app
RUN npm install
RUN apt-get update -y
RUN apt-get install -y google-chrome-stable
CMD npx wdio
# CMD npm run allure-results