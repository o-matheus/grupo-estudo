FROM golang:1.27.2-bookworm
WORKDIR /app
COPY go.mod main.go ./
RUN go build -o /app/servidor .
EXPOSE 8080
CMD ["/app/servidor"]
