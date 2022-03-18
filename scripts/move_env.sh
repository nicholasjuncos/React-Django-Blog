#!/usr/bin/env bash
sudo cp /home/ubuntu/environment /home/ubuntu/website/backend/.env
sudo chown -R ubuntu /home/ubuntu/website/backend/.env

sudo touch /home/ubuntu/website/frontend/.env
sudo chown -R ubuntu /home/ubuntu/website/frontend/.env
echo $'REACT_APP_DJANGO_BACKEND = \"https://regis-blog-me.com/\"\nNODE_ENV = production' > /home/ubuntu/website/frontend/.env

sudo mkdir /var/log/gunicorn
sudo mkdir /home/ubuntu/.aws
sudo rm /etc/nginx/sites-enabled/default
sudo mv /home/ubuntu/website/scripts/files/nginx.conf /etc/nginx/nginx.conf
sudo mv /home/ubuntu/website/scripts/files/website.conf /etc/supervisor/conf.d/website.conf
sudo mv /home/ubuntu/website/scripts/files/hosts /etc/hosts
# sudo mv /home/ubuntu/website/500.html /usr/share/nginx/html/500.html
sudo mv /home/ubuntu/website/scripts/files/conf /home/ubuntu/.aws/conf
cd /home/ubuntu
virtualenv -p python3 env
source /home/ubuntu/env/bin/activate
cd /home/ubuntu/website
pip install -r requirements.txt
pip install gunicorn
pip install boto3
sudo mkdir /home/ubuntu/website/staticfiles
sudo chmod -R 777 /home/ubuntu/website/staticfiles
./manage.py collectstatic