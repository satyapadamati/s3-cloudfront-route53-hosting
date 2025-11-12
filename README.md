🌐 Static Website Hosting on AWS (S3 + CloudFront + Route 53 + GoDaddy)

This project demonstrates how to host a static website using Amazon S3, enhance performance and security with Amazon CloudFront, and manage domain resolution through Amazon Route 53 — while using a custom domain from GoDaddy.

🔗 Live Website: https://letschill.shop

🚀 Project Overview

The goal of this project is to deploy a fully functional static website on AWS, configured with a custom domain and SSL certificate for HTTPS access.
It integrates multiple AWS services to deliver speed, scalability, and reliability.

🧰 Services Used
AWS Service	Purpose
Amazon S3	Hosts static website files (HTML, CSS, JS, images).
Amazon CloudFront	Delivers content globally with low latency.
AWS Certificate Manager (ACM)	Provides SSL certificate for HTTPS.
Amazon Route 53	Handles DNS routing for the domain.
GoDaddy	Domain registrar (used for domain name).
⚙️ Architecture Diagram
User → CloudFront (HTTPS) → S3 Bucket (Website Files)
                 ↓
         Route 53 Hosted Zone (DNS)
                 ↓
             GoDaddy Domain

🧩 Steps to Deploy
Step 1: Create an S3 Bucket

Open the S3 Console → Create bucket (name = your domain, e.g., letschill.shop).

Disable Block all public access.

Enable Static website hosting → Add index.html as the index document.

Upload your website files (index.html, style.css, script.js, etc.).

Step 2: Make the Bucket Public

Add the following Bucket Policy:

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::letschill.shop/*"
    }
  ]
}

Step 3: Configure CloudFront

Create a CloudFront Distribution.

Origin → Choose your S3 bucket.

Viewer Protocol Policy → Redirect HTTP to HTTPS.

Add your domain name (letschill.shop) in Alternate Domain Names (CNAME).

Request an SSL Certificate from ACM for your domain.

Validate the certificate (via DNS or email).

Deploy the distribution and note the CloudFront Domain Name.

Step 4: Configure Route 53

Create a Public Hosted Zone for your domain (letschill.shop).

Note the Name Server (NS) values.

Go to GoDaddy → DNS Management → Nameservers → Custom Nameservers.

Replace the existing nameservers with the ones from Route 53.

Step 5: Create an Alias Record

In Route 53 → Hosted Zone → Create Record.

Record Type → A – IPv4 Address.

Alias → Yes.

Choose the CloudFront distribution.

Save the record.

🌍 Step 6: Access Your Website

After DNS propagation (usually 15–60 minutes):

👉 Visit: https://letschill.shop

Your static website will now load securely using HTTPS.

👨‍💻 Contributors

Satyakiran Padamati – Developer & AWS Architect

Aditya Jaiswal – Contributor

Ebanga Ebane – Inspiration & Creative Support

🏁 Key Learnings

Hosting static websites using S3

Configuring CloudFront CDN for global delivery

Setting up Route 53 DNS with GoDaddy domain

Managing SSL Certificates via ACM

Understanding end-to-end AWS networking & deployment

🪪 License

This project is open-source and available under the MIT License

🌐 Static Website Hosting on AWS (S3 + CloudFront + Route 53 + GoDaddy)

This project demonstrates how to host a static website using Amazon S3, enhance performance and security with Amazon CloudFront, and manage domain resolution through Amazon Route 53 — while using a custom domain from GoDaddy.

🔗 Live Website: https://www.letschill.shop

🚀 Project Overview

The goal of this project is to deploy a fully functional static website on AWS, configured with a custom domain and SSL certificate for HTTPS access.
It integrates multiple AWS services to deliver speed, scalability, and reliability.

🧰 Services Used
AWS Service	Purpose
Amazon S3	Hosts static website files (HTML, CSS, JS, images).
Amazon CloudFront	Delivers content globally with low latency.
AWS Certificate Manager (ACM)	Provides SSL certificate for HTTPS.
Amazon Route 53	Handles DNS routing for the domain.
GoDaddy	Domain registrar (used for domain name).
⚙️ Architecture Diagram
User → CloudFront (HTTPS) → S3 Bucket (Website Files)
                 ↓
         Route 53 Hosted Zone (DNS)
                 ↓
             GoDaddy Domain

🧩 Steps to Deploy
Step 1: Create an S3 Bucket

Open the S3 Console → Create bucket (name = your domain, e.g., letschill.shop).

Disable Block all public access.

Enable Static website hosting → Add index.html as the index document.

Upload your website files (index.html, style.css, script.js, etc.).

Step 2: Make the Bucket Public

Add the following Bucket Policy:

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::letschill.shop/*"
    }
  ]
}

Step 3: Configure CloudFront

Create a CloudFront Distribution.

Origin → Choose your S3 bucket.

Viewer Protocol Policy → Redirect HTTP to HTTPS.

Add your domain name (letschill.shop) in Alternate Domain Names (CNAME).

Request an SSL Certificate from ACM for your domain.

Validate the certificate (via DNS or email).

Deploy the distribution and note the CloudFront Domain Name.

Step 4: Configure Route 53

Create a Public Hosted Zone for your domain (letschill.shop).

Note the Name Server (NS) values.

Go to GoDaddy → DNS Management → Nameservers → Custom Nameservers.

Replace the existing nameservers with the ones from Route 53.

Step 5: Create an Alias Record

In Route 53 → Hosted Zone → Create Record.

Record Type → A – IPv4 Address.

Alias → Yes.

Choose the CloudFront distribution.

Save the record.

🌍 Step 6: Access Your Website

After DNS propagation (usually 15–60 minutes):

👉 Visit: https://letschill.shop

Your static website will now load securely using HTTPS.

👨‍💻 Contributors

Satyakiran Padamati – Developer & AWS Architect

Aditya Jaiswal – Contributor

Ebanga Ebane – Inspiration & Creative Support

🏁 Key Learnings

Hosting static websites using S3

Configuring CloudFront CDN for global delivery

Setting up Route 53 DNS with GoDaddy domain

Managing SSL Certificates via ACM

Understanding end-to-end AWS networking & deployment

🪪 License

This project is open-source and available under the MIT License

<img width="1182" height="482" alt="diagram-export-11-11-2025-3_20_43-PM" src="https://github.com/user-attachments/assets/b136b617-a444-46a9-b43a-ce72b98970d5" />
<img width="1917" height="1015" alt="Screenshot 2025-11-11 152858" src="https://github.com/user-attachments/assets/d5ef31fd-5b57-43f0-8461-5ea8c3e51bbc" />
<img width="1918" height="1011" alt="Screenshot 2025-11-11 152915" src="https://github.com/user-attachments/assets/069ab9bb-7345-49a7-bedf-7213f243157a" />
<img width="1919" height="1027" alt="Screenshot 2025-11-11 152935" src="https://github.com/user-attachments/assets/ea1ccc41-10dd-4d6e-9a43-09315cd84274" />
<img width="1919" height="1016" alt="Screenshot 2025-11-11 153016" src="https://github.com/user-attachments/assets/bb5b061e-2780-4708-9af1-2adb12763858" />
<img width="1916" height="1014" alt="Screenshot 2025-11-11 152826" src="https://github.com/user-attachments/assets/9da5f549-18a2-430b-9654-521b86d20fe3" />



