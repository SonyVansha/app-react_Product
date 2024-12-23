sudo yum update -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
. ~/.nvm/nvm.sh
sudo yum install -y npm git nginx
git clone https://github.com/pradanahandi/apps-product.git
cd apps-product
cp * /var/www/html/