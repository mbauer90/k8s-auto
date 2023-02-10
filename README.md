Criar IP Fixo para o cluster,lembrar de configurar no ingress.yaml:
gcloud compute addresses create kubernetes-ingress --global

Atualizar issue de produção:
kubectl annotate ingress web-ingress cert-manager.io/issuer=letsencrypt-production --overwrite
kubectl annotate ingress web-ingress cert-manager.io/issuer=letsencrypt-cloudflare-production --overwrite

Executar mysql:
kubectl exec --stdin --tty pod/pod_id -c mysql -- /bin/bash

COMANDOS UTEIS:
kubectl top nodes