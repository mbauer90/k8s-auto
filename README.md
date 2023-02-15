Criar IP Fixo para o cluster,lembrar de configurar no ingress.yaml:
gcloud compute addresses create kubernetes-ingress --global

Atualizar issue de produção:
kubectl annotate ingress web-ingress cert-manager.io/issuer=letsencrypt-production --overwrite
kubectl annotate ingress web-ingress cert-manager.io/issuer=letsencrypt-cloudflare-production --overwrite

Executar mysql:
kubectl exec --stdin --tty pod/pod_id -c mysql -- /bin/bash

COMANDOS UTEIS:
kubectl top nodes

LARAVEL:
php artisan config:clear
php artisan cache:clear
php artisan migrate

Links úteis:
https://number1.co.za/setting-up-keycloak-on-kubernetes/
https://stackoverflow.com/questions/74014422/gke-ingress-is-not-working-with-wordpress-deployment
https://www.digitalocean.com/community/tutorials/how-to-deploy-laravel-7-and-mysql-on-kubernetes-using-helm
https://madewithlove.com/blog/software-engineering/the-easiest-production-ready-image-to-run-your-laravel-application/

GKE REGISTRY
gcloud services enable containerregistry.googleapis.com
gcloud auth configure-docker
docker build -t murilobauer90/pay-laravel:latest .
docker tag murilobauer90/pay-laravel gcr.io/production-376800/autofacil_app_frontend:v1
docker push gcr.io/production-376800/autofacil_app_frontend:v1

Pipeline BitBucket
base64 -w 0 production-376800-6ffda56b9577.json