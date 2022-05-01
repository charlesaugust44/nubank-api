```mermaid
sequenceDiagram
    You->>Nubank Server: GET /discovery
    Nubank Server-->>You: Login Endpoint
    
    You->>Nubank Server: GET /app/discovery
    Nubank Server-->>You: Lift Endpoint
    
    You->>Nubank Server: POST login
    Nubank Server-->>You: Login Access Token
    
    You->>Nubank Server: POST lift
    Nubank Server-->>You: Lift Access Token & Endpoints
    
    You->>Nubank Server: GET Bills Summary
    Nubank Server-->>You: Bills Summary
```

### 1. Discovery

This endpoint will return the available endpoints for unauthenticated users
> GET https://prod-global-webapp-proxy.nubank.com.br/api/discovery

#### Response:

````json
{
  "register_prospect_savings_web": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBijYSQBQwHMScYOrw1dfGdoonaFA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3Byb3NwZWN0L3JlZ2lzdGVyL3NhdmluZ3Mtd2Vi",
  "register_prospect_savings_mgm": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDN6gRSzstj8Zs1nYYayRriWutMYg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3Byb3NwZWN0L3JlZ2lzdGVyL3NhdmluZ3MtbWdt",
  "pusher_auth_channel": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAeA3V5-G9OzDz-GUxxb4QaTZpr4g.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jaGF0LWNsaWVudC5udWJhbmsuY29tLmJyL2FwaS9wdXNoZXIvYXV0aA",
  "register_prospect_debit": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCYbtgnjPgX7MHBwJG2pPTWwZmkVQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3Byb3NwZWN0L3JlZ2lzdGVyL2RlYml0",
  "reset_password": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAlsb_71MAcRvpX9jCh1FaKvBEuVg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Jlc2V0LXBhc3N3b3JkL2NvbXBsZXRl",
  "register_prospect_ultraviolet_web": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBzBj4mZOgKwMz_cGmjritBp_CI2Q.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3Byb3NwZWN0L3JlZ2lzdGVyL3VsdHJhdmlvbGV0LXdlYg",
  "business_card_waitlist": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LB8kp0xr4iAUEMn-ZfrdtUhJoCjdA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1iaXJkLWJveC5udWJhbmsuY29tLmJyL2FwaS9jcmVkaXQtY2FyZC13YWl0bGlzdA",
  "register_prospect": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBmwSyeH60uJKrevw-E9FDjqxayww.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3Byb3NwZWN0L3JlZ2lzdGVy",
  "register_prospect_savings_request_money": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCmAsPA_3bO08u7hNM8U0w6zz-hdQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3Byb3NwZWN0L3JlZ2lzdGVyL3NhdmluZ3MtcmVxdWVzdC1tb25leQ",
  "register_prospect_global_web": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCO3gflk3zixYHuNpceiQBJnsYTCQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3Byb3NwZWN0L3JlZ2lzdGVyL2dsb2JhbC13ZWI",
  "register_prospect_c": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LD1RQ-IG6wyp1A5C4Qrvtidi3xxaw.aHR0cHM6Ly9wcm9kLWdsb2JhbC1iaXJkLWJveC5udWJhbmsuY29tLmJyL2FwaS9jb21wYW55LXByb3NwZWN0cw",
  "request_password_reset": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LClV6czXGMzwOAShSFHH32BBNcZrg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Jlc2V0LXBhc3N3b3Jk",
  "auth_gen_certificates": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LApUVAX0b5R5DnjMw3-9ibnk8UnZg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2dlbi1jZXJ0aWZpY2F0ZXM",
  "login": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBUC2Tx4PB-W6VD1SEIOd2xp14EDQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Rva2Vu",
  "email_verify": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDlmi5eGa7ikt-NlESQWn3Y4MoSTA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL2VtYWlsL3ZlcmlmeQ",
  "ultraviolet_waitlist": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBylDzSFuXkIv0jq7TAUv4aIj4hqw.aHR0cHM6Ly9wcm9kLWdsb2JhbC1lc3BlcmEtc2VudGFkby5udWJhbmsuY29tLmJyL2FwaS93YWl0bGlzdC91bHRyYXZpb2xldA",
  "auth_device_resend_code": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDYdvoPz_8E2Hn5QE5zBfzyVPPaEQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2RldmljZS9hdXRob3JpemUtcmVzZW5kLWNvZGU",
  "msat": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LA68SUWvd84x5gAXPeCJlaVpNJ4Mw.aHR0cHM6Ly9wcm9kLWdsb2JhbC1taWNhLm51YmFuay5jb20uYnIvYXBpL21zYXQ"
}
````

### 2. Login

> POST https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBUC2Tx4PB-W6VD1SEIOd2xp14EDQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Rva2Vu

#### Payload:

````json
{
  "grant_type": "password",
  "login": "[CPF]",
  "password": "[PASSWORD]",
  "client_id": "other.conta",
  "client_secret": "yQPeLzoHuJzlMMSAjC-LgNUJdUecx8XO"
}
````

You can get `client_secret` on the nubank login page, go to the source file `script/script.js:2721` variable `p`

#### Response:

````json
{
  "access_token": "[TOKEN]",
  "token_type": "bearer",
  "_links": {
    "revoke_token": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDoV28GLVEQYvnPwBMVrQIH5KJBMQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Jldm9rZQ"
    },
    "revoke_all": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCi_hq8s2Ixt7wmq4_qG6mtdnCCrA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Jldm9rZS9hbGw"
    },
    "account_emergency": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBGEhGeiQnDWN-6boUu2GNEjUjJHQ.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL2FjY291bnQvZW1lcmdlbmN5LWFjY2Vzcw"
    },
    "bill_emergency": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBwrqtP7xslMKIRBw5-vAlSD4hATg.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL2JpbGwvZW1lcmdlbmN5LWFjY2Vzcw"
    }
  },
  "refresh_token": "string token",
  "refresh_before": "2022-04-26T01:19:05Z"
} 
````

### 3. App Discovery

This endpoint returns all available endpoints for a semi-authenticated user (user with no app qrcode validation)

> GET https://prod-global-webapp-proxy.nubank.com.br/api/app/discovery

#### Response:

````json
{
  "scopes": "https://prod-global-auth.nubank.com.br/api/admin/scope",
  "creation": "https://prod-global-auth.nubank.com.br/api/creation",
  "rosetta_images": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCZTaIkGL-AVlvzCFoPKSmIv7vX3w.aHR0cHM6Ly9wcm9kLWdsb2JhbC1yb3NldHRhLm51YmFuay5jb20uYnIvYXBpL2ltYWdlcw",
  "change_password": "https://prod-global-auth.nubank.com.br/api/change-password",
  "smokejumper": "https://prod-cdn.nubank.com.br/mobile/fire-station/smokejumper.json",
  "block": "https://prod-global-auth.nubank.com.br/api/admin/block",
  "lift": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LD1_tXTsdl5luooo69vWaMYPjMJww.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2xpZnQ",
  "shard_mapping_id": "https://prod-global-auth.nubank.com.br/api/mapping/:kind/:id",
  "force_reset_password": "https://prod-global-auth.nubank.com.br/api/admin/force-reset-password",
  "rosetta_localization": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAPNOpaMjp3phF4ZqOlXvdoKS2B3w.aHR0cHM6Ly9wcm9kLWdsb2JhbC1yb3NldHRhLm51YmFuay5jb20uYnIvYXBpL3N0cmluZ3MvbG9jYWxpemF0aW9ucw",
  "revoke_token": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDoV28GLVEQYvnPwBMVrQIH5KJBMQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Jldm9rZQ",
  "userinfo": "https://prod-global-auth.nubank.com.br/api/userinfo",
  "reset_password": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LClV6czXGMzwOAShSFHH32BBNcZrg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Jlc2V0LXBhc3N3b3Jk",
  "unblock": "https://prod-global-auth.nubank.com.br/api/admin/unblock",
  "shard_mapping_cnpj": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAjzxLJkwHPzOTsIaGV8lvzKj7ZmA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL21hcHBpbmcvY25wag",
  "shard_mapping_cpf": "https://prod-global-auth.nubank.com.br/api/mapping/cpf",
  "register_prospect": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBP40j7z-k9aFUoe5gILMnMXO2UWg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3Byb3NwZWN0L3JlZ2lzdGVyL21vYmlsZQ",
  "engage": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LC6vqU-NJo61yaw0a-WAUZf0AuUkw.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL2FjY291bnQtcmVxdWVzdHMvZW5nYWdl",
  "creation_with_credentials": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAzlv7WqsVJyp-Lr1yILp5C9oQ5KA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2NyZWF0aW9uLXdpdGgtY3JlZGVudGlhbHM",
  "magnitude": "https://prod-global-magnitude.nubank.com.br/api/events",
  "revoke_all": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCi_hq8s2Ixt7wmq4_qG6mtdnCCrA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Jldm9rZS9hbGw",
  "user_update_credential": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LARn0s-LIhp4PSEiastN64vn4Lhyg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3VzZXIvOnVzZXItaWQvY3JlZGVudGlhbA",
  "user_hypermedia": "https://prod-global-auth.nubank.com.br/api/admin/users/:id/hypermedia",
  "gen_certificate": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LApUVAX0b5R5DnjMw3-9ibnk8UnZg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2dlbi1jZXJ0aWZpY2F0ZXM",
  "email_verify": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDlmi5eGa7ikt-NlESQWn3Y4MoSTA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL2VtYWlsL3ZlcmlmeQ",
  "token": "https://prod-global-auth.nubank.com.br/api/token",
  "account_recovery": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCO04Eljd3Vo8Qiqvt2mSbBv55cnw.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2FjY291bnQtcmVjb3Zlcnk",
  "start_screen_v2": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCpIch1Xb0-3HMNFYiUOByUy6LfZQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL2FwcC92Mi9zdGFydC1zY3JlZW4",
  "scopes_remove": "https://prod-global-auth.nubank.com.br/api/admin/scope/:admin-id",
  "approved_products": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAnvk8CPPypu3dxCp00Fe67JlXWAw.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL2FwcC9hcHByb3ZlZC1wcm9kdWN0cw",
  "admin_revoke_all": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCBAfmrme6Vl_eeLd8nVUD8u2E6hA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2FkbWluL3VzZXJzLzppZC9yZXZva2UvYWxs",
  "faq": {
    "ios": "https://ajuda.nubank.com.br/ios",
    "android": "https://ajuda.nubank.com.br/android",
    "wp": "https://ajuda.nubank.com.br/windows-phone"
  },
  "ultraviolet_product_interest_screen": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDMc0s3FzyUMEDff7vzp5Oj5x1g_Q.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3VsdHJhdmlvbGV0L3Byb2R1Y3QtaW50ZXJlc3Qvc2NyZWVuLWNvbnRlbnQ",
  "ultraviolet_register_product_interest": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCA3swiGxa9mburZLxlFGvCg1AGhA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL3VsdHJhdmlvbGV0L3Byb2R1Y3QtaW50ZXJlc3Q",
  "scopes_add": "https://prod-global-auth.nubank.com.br/api/admin/scope/:admin-id",
  "registration": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCUKkajiwi_pYDihTCJMYJ7mPcDhA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3JlZ2lzdHJhdGlvbg",
  "global_services": "https://prod-global-auth.nubank.com.br/api/mapping/global-services",
  "start_screen": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LB5FIwN3mYs10dirYsVkaQ80cojWg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL2FwcC9zdGFydC1zY3JlZW4",
  "user_change_password": "https://prod-global-auth.nubank.com.br/api/user/:user-id/password",
  "rosetta_localizations_by_locale": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCeeZTaasyAHBxda2iV0XyZSFtKVA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1yb3NldHRhLm51YmFuay5jb20uYnIvYXBpL2xvY2FsZS86bG9jYWxlL2xvY2FsaXphdGlvbnM",
  "remote_config": "https://prod-global-app-config.nubank.com.br/api/remote-config",
  "fog_wall_discovery": "https://prod-global-webapp-proxy.nubank.com.br/api/fogwall/discovery",
  "account_recovery_token": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBUC2Tx4PB-W6VD1SEIOd2xp14EDQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Rva2Vu",
  "user_status": "https://prod-global-auth.nubank.com.br/api/admin/user-status",
  "engage_and_create_credentials": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAnmk_JLdwCottMRxZ1rIhrCET6Rw.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jdXN0b21zLm51YmFuay5jb20uYnIvYXBpL2FwcC9lbmdhZ2UtYW5kLWNyZWF0ZS1jcmVkZW50aWFscw"
}
````

### 4. Display QRCode

The QRCode has the value of the session id to be validated by the app, this function generate a random identification.

````js
function generateSSID() {
    var a, b;
    return b = function () {
        var b;
        return a && a.getRandomValues ? (b = new Uint8Array(1),
            a.getRandomValues(b),
            (b[0] % 16).toString(16)) : (16 * Math.random() | 0).toString(16)
    }
        ,
        a = window.crypto || window.msCrypto,
        "xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx".replace(/x/g, b)
}
````

### 4 - Check `lift`

This endpoint needs to be checked every second, it will return a `404` while the qrcode isn't validated with the Nubank App

> POST https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LD1_tXTsdl5luooo69vWaMYPjMJww.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2xpZnQ

#### Headers:

````json
{
  "Authorization": "Bearer [TOKEN]"
}
````

#### Payload:

````json
{
  "qr_code_id": "[generateSSID()]",
  "type": "login-webapp"
}
````

#### Response (when code `404`):

````json
{
  "error": "Not Found"
}
````

#### Response (when code `200`):

````json
{
  "access_token": "[TOKEN]",
  "token_type": "bearer",
  "_links": {
    "fog_wall": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCAknxCJAE0vLUS9cVoxTEXleyKUQ.aHR0cHM6Ly9wcm9kLXMzLWZvZy13YWxsLm51YmFuay5jb20uYnIvYXBpL3F1ZXJ5"
    },
    "rewards_customer_enrollment": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDvOtzVB2vLID2zTxThai2VP60cjQ.aHR0cHM6Ly9wcm9kLXMzLW1haXRyZS5udWJhbmsuY29tLmJyL2FwaS9wcm9kdWN0cy86cHJvZHVjdC1uYW1lL2N1c3RvbWVycy81YjczMjUzNi01NDZiLTQxNTYtYTRhMC01N2Q4NzBmYmRkNGEvZW5yb2xsbWVudC1pbmZv"
    },
    "rosetta_images": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDuv4FkWdA2i3CLCsmJ1oK_2uAKJQ.aHR0cHM6Ly9wcm9kLXMzLXJvc2V0dGEubnViYW5rLmNvbS5ici9hcGkvaW1hZ2Vz"
    },
    "milli_vanilli": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCoRxeNtZFIkAp-RuQ7_ZFuTBtqRQ.aHR0cHM6Ly9wcm9kLXMzLW1pbGxpLXZhbmlsbGkubnViYW5rLmNvbS5ici9hcGkvcXVlcnk"
    },
    "change_password": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBHzAKwzJ6P44jCIkdtlkSoglL_0g.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2NoYW5nZS1wYXNzd29yZA"
    },
    "loki": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDwuZ6YpmDc6qVClTR-I-xPoG3PDQ.aHR0cHM6Ly9wcm9kLXMzLWxva2kubnViYW5rLmNvbS5ici9hcGkvcXVlcnk"
    },
    "ultraviolet_cashback_history": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBcxHQdRp1dj7T1Q1ZZsHfNlVQH5w.aHR0cHM6Ly9wcm9kLXMzLWNoYXBpbmhhLm51YmFuay5jb20uYnIvYXBpL3VsdHJhdmlvbGV0L3NjcmVlbnMvY2FzaGJhY2staGlzdG9yeQ"
    },
    "allowed_universal_links": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDG2zF7hPmpspXoMpuzJuihrA0gyg.aHR0cHM6Ly9udWFwcC5udWJhbmsuY29tLmJyL2NvbmZpZ3MvYWxsb3dlZF91bml2ZXJzYWxfbGlua3MuanNvbg"
    },
    "enabled_features": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDG0VX9YQL22CeObmM8DtKHOrG5Bg.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL3JvbGxvdXQ"
    },
    "insurance_bff": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDOdmuqmE-t-olHV2k1ZjQJMXqTZg.aHR0cHM6Ly9wcm9kLXMzLWluc3VyYW5jZS1iZmYubnViYW5rLmNvbS5ici9hcGkvaW5zdXJhbmNl"
    },
    "certificate_status": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCmXXoO2zXndEkDhxuODRtyjs2TuQ.aHR0cHM6Ly9wcm9kLXMzLWthZWxhbi5udWJhbmsuY29tLmJyL2FwaS9hdXRob3JpemF0aW9uL2NlcnRpZmljYXRlLXN0YXR1cz9za2lwLWludHJvPXRydWU"
    },
    "telefonista": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LD4gd53AGphssSfNb3XnwAGwDSrPw.aHR0cHM6Ly9wcm9kLXMzLXRlbGVmb25pc3RhLm51YmFuay5jb20uYnIvYXBpL3F1ZXJ5"
    },
    "rosetta_localization": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBrepADJBJE1Mzkm5OCYNqdrY6FmQ.aHR0cHM6Ly9wcm9kLXMzLXJvc2V0dGEubnViYW5rLmNvbS5ici9hcGkvc3RyaW5ncy9sb2NhbGl6YXRpb25z"
    },
    "credit_card_widget": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCD1V3iLwE_oosDr99fWGonh_T7qA.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL3dpZGdldA"
    },
    "revoke_token": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDoV28GLVEQYvnPwBMVrQIH5KJBMQ.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Jldm9rZQ"
    },
    "userinfo": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAF-5obM3RRAalRZrGip3woZFBNQw.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3VzZXJpbmZv"
    },
    "events_page": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDVGWN_i65f1EFQIpe9hl9nNCiOsA.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL2ZlZWQ_ZGF5cz05MA"
    },
    "loginWebapp": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBrjfZ3r9LOyz3JwUL4CJIWRh1qEA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2xvZ2luLXdlYmFwcA"
    },
    "dropman": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCyf4LC2ADIvII_-t7X6M_V3Bf5Aw.aHR0cHM6Ly9wcm9kLXMzLW1hbmNpbmkubnViYW5rLmNvbS5ici9hcGkvcXVlcnk"
    },
    "token_validate": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBN4wkGRUQ-ag5BCGYI9yIE3qhURg.aHR0cHM6Ly9wcm9kLXMzLWthcm1hLXBvbGljZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL3Rva2VuL3ZhbGlkYXRl"
    },
    "events": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LALxeq6Zmfki1_ZapG9EFLRf_g1VQ.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL2ZlZWQ"
    },
    "townsville": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LACgFRpIXXsluSFPuv8B42iHdot4w.aHR0cHM6Ly9wcm9kLXMzLXRvd25zdmlsbGUubnViYW5rLmNvbS5ici9hcGkvcXVlcnk"
    },
    "tokenization_activation_screen": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCfQmQcd0-CLvbSiyr6yYMoENB5uA.aHR0cHM6Ly9wcm9kLXMzLW1yLXdoaXRlLm51YmFuay5jb20uYnIvYXBpL3Rva2VuaXphdGlvbi9hY3RpdmF0aW9uLXNjcmVlbg"
    },
    "register_rewards": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LB9tn6qPKdcMFi-ildTseG-XfTqsQ.aHR0cHM6Ly9wcm9kLXMzLXNvbW1lbGllci5udWJhbmsuY29tLmJyL2FwaS9wcm9kdWN0cy9yZXdhcmRzL3BsYW5z"
    },
    "login_webapp": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBrjfZ3r9LOyz3JwUL4CJIWRh1qEA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2xvZ2luLXdlYmFwcA"
    },
    "brooklyn_bridge": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBgRdEq1vxCLYXveySbWctHoWquSg.aHR0cHM6Ly9wcm9kLXMzLWJyb29rbHluLWJyaWRnZS5udWJhbmsuY29tLmJyL2FwaS9kaXNjb3Zlcnk"
    },
    "postcode": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDoBTYeNo0eZYkq6zgfJKcxMME5hQ.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9wb3N0Y29kZXMvYnIve3Bvc3Rjb2RlfQ"
    },
    "app_flows": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBJ-J3ff15TIVLmLe8ZmJLgybUEDw.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL2FwcC9mbG93cw"
    },
    "magnitude": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCvTBa-9w314wnkzwLamMHUrPalSQ.aHR0cHM6Ly9wcm9kLXMzLW1hZ25pdHVkZS5udWJhbmsuY29tLmJyL2FwaS9ldmVudHM"
    },
    "zapdos": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBQ5AfHUdJEOdQ0n963zg0uEFG0zg.aHR0cHM6Ly9wcm9kLXMzLXphcGRvcy5udWJhbmsuY29tLmJyL2FwaS9xdWVyeQ"
    },
    "facade": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDHu6-36pnzwyK67TOvHDvxs8c17w.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9kaXNjb3Zlcnk"
    },
    "rewards_signup_widget": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCJD9jKaEWiA0TIFhMHfx_QVeQAFA.aHR0cHM6Ly9wcm9kLXMzLWNoYXRlYXUubnViYW5rLmNvbS5ici9hcGkvY3VzdG9tZXJzLzViNzMyNTM2LTU0NmItNDE1Ni1hNGEwLTU3ZDg3MGZiZGQ0YS9jcm9zcy1zZWxs"
    },
    "revoke_all": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCi_hq8s2Ixt7wmq4_qG6mtdnCCrA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3Jldm9rZS9hbGw"
    },
    "notification_push_event": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LB25Ygz8-WFqK8oDxhALO1ocqUupw.aHR0cHM6Ly9wcm9kLXMzLXRlbGVmb25pc3RhLm51YmFuay5jb20uYnIvYXBpL3B1c2gvZXZlbnQ"
    },
    "customer": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDzksmt72gp0BbLZmtcOOo4w9PnSA.aHR0cHM6Ly9wcm9kLXMzLWN1c3RvbWVycy5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRh"
    },
    "allowed_request_subdomains": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDaeXPM7SCACpH0P8kzwVvM8AgT6g.aHR0cHM6Ly9udWFwcC5udWJhbmsuY29tLmJyL2NvbmZpZ3MvYWxsb3dlZF9yZXF1ZXN0X3N1YmRvbWFpbnMuanNvbg"
    },
    "account": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDUHXfmoV8_s1dwS9SKn74EcP4Fyw.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9hY2NvdW50cy81Yjc0OGRmMS0yZmYyLTQwMWItYjIyYy00ZTk3M2VlNjY1ZTA"
    },
    "bills_summary": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LADxYo6NQQdYwT4aL2dC82n7r9RXg.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9hY2NvdW50cy81Yjc0OGRmMS0yZmYyLTQwMWItYjIyYy00ZTk3M2VlNjY1ZTAvYmlsbHMvc3VtbWFyeQ"
    },
    "start_auto_trust": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAdQe0uWuerZtWZdv5hq7BUQE-PBQ.aHR0cHM6Ly9wcm9kLXMzLWthcm1hLXBvbGljZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL2F1dG8tdHJ1c3Q"
    },
    "orionid": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LB8uUJtABn1DHCN7j2n9iKNGSLSiA.aHR0cHM6Ly9wcm9kLXMzLW9yaW9uaWQubnViYW5rLmNvbS5icg"
    },
    "blond_jose": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LACNBQhn_f18d9hD-Hm2Viig1buYg.aHR0cHM6Ly9wcm9kLXMzLWJsb25kLWpvc2UubnViYW5rLmNvbS5ici9hcGkvY3VzdG9tZXJzLzViNzMyNTM2LTU0NmItNDE1Ni1hNGEwLTU3ZDg3MGZiZGQ0YS9mbG93cy86Zmxvdy1pZA"
    },
    "features_map": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAMRwJRzQIhv6YR2XQwxJbzAIALyg.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL3JvbGxvdXQtbWFw"
    },
    "healthcheck": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAJhD_PzdtCoydZ4Zhr6q8Yfkvpmg.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL2hlYWx0aGNoZWNrLWRldmljZQ"
    },
    "savings_account": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBVlxKap0DHaFnZPHsgnirsxZT-Pg.aHR0cHM6Ly9wcm9kLXMzLXN0b3Jtc2hpZWxkLm51YmFuay5jb20uYnIvYXBpL3F1ZXJ5"
    },
    "selfie_authorization": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAOSFy1EetQycBU4G1dd1KgE6-lhA.aHR0cHM6Ly9wcm9kLXMzLWJvbmFmb250Lm51YmFuay5jb20uYnIvYXBpL2N1c3RvbWVycy81YjczMjUzNi01NDZiLTQxNTYtYTRhMC01N2Q4NzBmYmRkNGEvZmxvd3Mvc2VsZmllLWF1dGhvcml6YXRpb24"
    },
    "ultraviolet_dashboard": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LD5wJoiP-8xaBVk1pR6fMb5lFGlWQ.aHR0cHM6Ly9wcm9kLXMzLWNoYXBpbmhhLm51YmFuay5jb20uYnIvYXBpL3VsdHJhdmlvbGV0L3NjcmVlbnMvZGFzaGJvYXJk"
    },
    "nakamoto": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAug1gzvE8nuLhXzdtAAB-SCpPqXA.aHR0cHM6Ly9wcm9kLXMzLW5ha2Ftb3RvLm51YmFuay5jb20uYnI"
    },
    "rewards_enrollment": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBs-7LbQAvYBaJrz-J4HCec7evVLg.aHR0cHM6Ly9wcm9kLXMzLXNvbW1lbGllci5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL2Vucm9sbG1lbnRzL2N1cnJlbnQ_ZW5oYW5jZWQ9dHJ1ZQ"
    },
    "purchases": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBSLFobCmITQf_3lhAD6o-FqQFo9g.aHR0cHM6Ly9wcm9kLXMzLWZhY2FkZS5udWJhbmsuY29tLmJyL2FwaS9yZW1vdmVkP25hbWU9cHVyY2hhc2Vz"
    },
    "paprika": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCpUuwyNhSJi3qAKZb53GTsyiTx0g.aHR0cHM6Ly9wcm9kLXMzLXBhcHJpa2EubnViYW5rLmNvbS5ici9hcGkvcXVlcnk"
    },
    "digital_wallets": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAQ8A4aW-rz_-i2dOdyPV_vZ9gdUw.aHR0cHM6Ly9wcm9kLXMzLW1yLXdoaXRlLm51YmFuay5jb20uYnIvYXBpL2N1c3RvbWVycy81YjczMjUzNi01NDZiLTQxNTYtYTRhMC01N2Q4NzBmYmRkNGEvZGlnaXRhbC13YWxsZXRzL2NvbnRlbnQtc2NyZWVucw"
    },
    "cancun": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBpmkG9Y1EgrHuTGSr2jN09EexoCQ.aHR0cHM6Ly9wcm9kLXMzLWNhbmN1bi5udWJhbmsuY29tLmJy"
    },
    "airbender": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDTTbvER7u2aULfy3sAAMcey65-Iw.aHR0cHM6Ly9wcm9kLXMzLWFpcmJlbmRlci5udWJhbmsuY29tLmJyL2FwaS9jdXN0b21lcnMvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL2Zsb3dzLzpmbG93LWlk"
    },
    "blackmirror": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LD57mLn2J21PMZjvOGgcAOkC_73oA.aHR0cHM6Ly9wcm9kLWdsb2JhbC1jb3VudGVyc3BlbGwubnViYW5rLmNvbS5ici9hcGkvY3VzdG9tZXIvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL2ZhcQ"
    },
    "ghostflame": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBVlxKap0DHaFnZPHsgnirsxZT-Pg.aHR0cHM6Ly9wcm9kLXMzLXN0b3Jtc2hpZWxkLm51YmFuay5jb20uYnIvYXBpL3F1ZXJ5"
    },
    "revelio": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCUmD-JY9dGmPym9qfdTTHwKZpAZw.aHR0cHM6Ly9wcm9kLXMzLXJldmVsaW8ubnViYW5rLmNvbS5icg"
    },
    "avvicinato": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDDmFf-PtFyB2g1X6qLtExxDANyNw.aHR0cHM6Ly9wcm9kLXMzLWF2dmljaW5hdG8ubnViYW5rLmNvbS5ici9hcGkvcXVlcnk"
    },
    "canuto": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBYecIPE8OLiNjfQ6TLeZJlxAzwHQ.aHR0cHM6Ly9wcm9kLXMzLWNhbnV0by5udWJhbmsuY29tLmJyL2FwaS9xdWVyeQ"
    },
    "shore": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCZhlBjIcUn_rWzU41HqHda1eXZfQ.aHR0cHM6Ly9wcm9kLXMzLXNob3JlLm51YmFuay5jb20uYnIvYXBpL3F1ZXJ5"
    },
    "brewmaster": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAge7i-Lw9P8fgkrnZ4aKCfnYbf5Q.aHR0cHM6Ly9wcm9kLXMzLWJyZXdtYXN0ZXIubnViYW5rLmNvbS5ici9hcGkvcXVlcnk"
    },
    "mr_white": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDpaqDPZdudehA5xohxYNAtE-Lanw.aHR0cHM6Ly9wcm9kLXMzLW1yLXdoaXRlLm51YmFuay5jb20uYnIvYXBpL2Rpc2NvdmVyeQ"
    },
    "user_change_password": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LAJIqSqIjy2QEu1i4VnB6LmeVxp4g.aHR0cHM6Ly9wcm9kLWdsb2JhbC1hdXRoLm51YmFuay5jb20uYnIvYXBpL3VzZXIvNWI3MzI1MzYtNTQ2Yi00MTU2LWE0YTAtNTdkODcwZmJkZDRhL3Bhc3N3b3Jk"
    },
    "rosetta_localizations_by_locale": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LBdqn-G5PsWhy6n70ZnqgEAec98fA.aHR0cHM6Ly9wcm9kLXMzLXJvc2V0dGEubnViYW5rLmNvbS5ici9hcGkvbG9jYWxlLzpsb2NhbGUvbG9jYWxpemF0aW9ucw"
    },
    "cashier": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCa4lzo_Fs9KrUEk1-qg8UCgcdwyQ.aHR0cHM6Ly9wcm9kLXMzLWNhc2hpZXIubnViYW5rLmNvbS5icg"
    },
    "fog_wall_discovery": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDDZcMEEsJhmJ2gA42SffsIZ8pqNg.aHR0cHM6Ly9wcm9kLXMzLWZvZy13YWxsLm51YmFuay5jb20uYnIvYXBpL2Rpc2NvdmVyeQ"
    },
    "mancini": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LCyf4LC2ADIvII_-t7X6M_V3Bf5Aw.aHR0cHM6Ly9wcm9kLXMzLW1hbmNpbmkubnViYW5rLmNvbS5ici9hcGkvcXVlcnk"
    },
    "tolkien_registry": {
      "href": "https://prod-global-webapp-proxy.nubank.com.br/api/proxy/AJxL5LDprrPs4HHtSJCwxOci8Qw9gZzF3A.aHR0cHM6Ly9pbnZhbGlkLm51YmFuay5jb20uYnIvYXBpL3Rva2VuL3JlZ2lzdHJ5"
    }
  }
}
````
