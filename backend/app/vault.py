import hvac

VAULT_ADDR = "http://vault:8200"  # Running in a container

def get_bitbucket_credentials():
    client = hvac.Client(url=VAULT_ADDR)
    client.token = "root"  # Replace with secure method in prod

    secret = client.secrets.kv.read_secret_version(path="bitbucket")
    return secret["data"]["data"]
