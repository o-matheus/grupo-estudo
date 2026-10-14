package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

func handler(w http.ResponseWriter, r *http.Request) {
	log.Printf("%s %s", r.Method, r.URL.Path)
	if r.URL.Path != "/" && r.URL.Path != "/health" {
		http.NotFound(w, r)
		return
	}
	if r.Method != http.MethodGet {
		w.Header().Set("Allow", "GET")
		http.Error(w, "Use GET", http.StatusMethodNotAllowed)
		return
	}
	if r.URL.Path == "/health" {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
		return
	}
	w.Header().Set("Content-Type", "text/plain; charset=utf-8")
	fmt.Fprintln(w, "Olá, grupo de estudo!")
}

func main() {
	server := &http.Server{
		Addr:              ":8080",
		Handler:           http.HandlerFunc(handler),
		ReadHeaderTimeout: 5 * time.Second,
	}
	log.Println("Servidor ouvindo em :8080")
	log.Fatal(server.ListenAndServe())
}
