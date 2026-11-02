from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Simulando o banco de dados e contexto seguro
USER_PIN = "1234"
SAFE_IP = "192.168.1.100"

class LoginRequest(BaseModel):
    user_id: str
    pin: str
    ip_address: str
    mfa_code: str = None

@app.post("/login")
def login(req: LoginRequest):
    # Verifica credencial primária
    if req.pin != USER_PIN:
        raise HTTPException(status_code=401, detail="PIN incorreto")
    
    # Motor de Contexto: Tarefa 1 vs Tarefa 2
    if req.ip_address != SAFE_IP:
        # Se for contexto novo, exige MFA
        if req.mfa_code != "000000": # 000000 é nosso mock de MFA
            return {"status": "mfa_required", "message": "Mudança de contexto. MFA exigido."}
        
    return {"status": "success", "token": "jwt_token_mock_aqui"}

@app.post("/recovery")
def recovery(user_id: str):
    # Tarefa 3: Simula o disparo de aprovação para o gestor
    return {"status": "recovery_initiated", "message": "Notificação enviada ao gestor imediato."}
