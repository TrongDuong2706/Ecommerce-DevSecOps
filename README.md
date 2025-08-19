Dự án ecommerce back end viết bằng dot net, FE viết bằng ReactJs
Dự án tập trung vào quá trình pipeline DevSecOps sử dụng các công cụ như VMWare, EC2, gitlab, gitlab-ci, harbor, sonarqube, trivy, arachni, K6. Sử dụng Docker để triển khai dự án
Pipeline DevSecOps bao gồm 7 quy trình build -> scan source code -> scan image -> push to private registry -> deploy -> security scan website -> performance testing

![Pipeline Diagram](images/pipeline.jpg)
1. Build: Sử dụng gitlab-runner để chạy CICD với executer là shell, clone code trên server rồi build
2. Scan source code: Sử dụng sonarqube scanner để scan code, sonarqube server để nhận kết quả, quality gate mặc định
3. Scan image: sử dụng trivy để scan image, lưu artifacts là file html
4. Push to private Registry: Cài đặt harbor trên EC2, thêm cert bằng certbot, tạo các project riêng cho dự án và lưu các image
5. Deploy: Pull image trên harbor và run container
6. Security Scan Website: Sử dụng Arachni, sử dụng docker để cài đặt công cụ, dễ áp dụng vào pipeline
7. Performance testing: sử dụng K6 và viết các file .js để giả lập lưu lượng truy cập vào website arfifacts là file csv
