# Image to compile source code
FROM golang:1.23 AS builder

WORKDIR /app

# COPY go.mod go.sum ./
# RUN go mod tidy & go mod download

COPY . .

RUN  go build -o main backend/cmd/main.go


# Final image to execute binary file
FROM golang:1.23
WORKDIR /srg

COPY --from=builder /app/main .

CMD ["./main"]
