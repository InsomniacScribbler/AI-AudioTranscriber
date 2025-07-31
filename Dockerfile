# Stage 1: Build the JAR
FROM eclipse-temurin:21-jdk as build

WORKDIR /app

COPY . .

RUN ./mvnw clean package -DskipTests

# Stage 2: Run the JAR
FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY --from=build /app/target/AIAudioTranscriber-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 2222

ENTRYPOINT ["java", "-jar", "app.jar", "--server.port=2222"]
