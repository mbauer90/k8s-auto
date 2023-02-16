## :rocket: GKE

Criar IP Fixo para o cluster,lembrar de configurar no ingress.yaml: <br />
gcloud compute addresses create kubernetes-ingress --global <br />

Atualizar issue de produção: <br /> 
kubectl annotate ingress web-ingress cert-manager.io/issuer=letsencrypt-production --overwrite <br />
kubectl annotate ingress web-ingress cert-manager.io/issuer=letsencrypt-cloudflare-production --overwrite <br />

Executar mysql: <br />
kubectl exec --stdin --tty pod/pod_id -c mysql -- /bin/bash <br />

Restart deployment sem deixar fora app <br />
kubectl rollout restart deployment pay-frontend <br />

COMANDOS UTEIS: <br />
kubectl top nodes <br />

LARAVEL: <br />
php artisan config:clear <br />
php artisan cache:clear <br />
php artisan migrate <br />

### Links úteis: <br />
https://number1.co.za/setting-up-keycloak-on-kubernetes/
https://stackoverflow.com/questions/74014422/gke-ingress-is-not-working-with-wordpress-deployment
https://www.digitalocean.com/community/tutorials/how-to-deploy-laravel-7-and-mysql-on-kubernetes-using-helm
https://madewithlove.com/blog/software-engineering/the-easiest-production-ready-image-to-run-your-laravel-application/

### GKE REGISTRY <br />
gcloud services enable containerregistry.googleapis.com <br />
gcloud auth configure-docker <br />
docker build -t murilobauer90/pay-laravel:latest . <br />
docker tag murilobauer90/pay-laravel gcr.io/production-376800/autofacil_app_frontend:v1 <br />
docker push gcr.io/production-376800/autofacil_app_frontend:v1 <br />

Pipeline BitBucket <br />
base64 -w 0 production-376800-6ffda56b9577.json <br />